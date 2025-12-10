const quizContainerEl = document.getElementById('quizContainer');
const quizContentEl = document.getElementById('quiz-content');
const resultsContainerEl = document.getElementById('results-container');
const navigationContainerEl = document.getElementById('navigationContainer');

const progressBarEl = document.getElementById('progressBar');
const questionNumberEl = document.getElementById('questionNumber');
const questionTextEl = document.getElementById('questionText');
const answersContainerEl = document.getElementById('answersContainer');
const nextButtonEl = document.getElementById('nextButton');

const resultTitleEl = document.getElementById('result-title');
const resultCodeEl = document.getElementById('result-code');
const majorsListEl = document.getElementById('majors-list');

const modalEl = document.getElementById('resourceModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalDescEl = document.getElementById('modalDesc');
const modalResourcesEl = document.getElementById('modalResources');

let currentQuestionIndex = 0;
let selectedCode = null;
let navigationIndex = -1; 
const totalQuestions = (typeof quizQuestions !== 'undefined') ? quizQuestions.length : 0;

let scores = {
    R: 0, I: 0, A: 0, S: 0, E: 0, C: 0
};

function loadQuestion() {
    if (typeof quizQuestions === 'undefined' || quizQuestions.length === 0) {
        console.error("No questions found. Ensure questions.js is loaded.");
        return;
    }

    navigationIndex = -1;

    quizContentEl.style.opacity = '0';
    quizContentEl.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / totalQuestions) * 100;

        progressBarEl.style.width = progress + '%';
        questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
        questionTextEl.textContent = currentQuestion.question;

        answersContainerEl.innerHTML = '';

        const answerLetters = ['A', 'B', 'C', 'D'];
        currentQuestion.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            
            answerDiv.dataset.code = answer.code; 

            answerDiv.innerHTML = `
                <div class="answer-letter">${answerLetters[index]}</div>
                <div class="answer-text">${answer.text}</div>
            `;

            answerDiv.addEventListener('click', () => {
                selectAnswer(answerDiv, answer.code);
                navigationIndex = index;
                updateKeyboardFocus();
            });
            
            answersContainerEl.appendChild(answerDiv);
        });

        quizContentEl.style.opacity = '1';
        quizContentEl.style.transform = 'translateY(0)';
    }, 300);
}

function selectAnswer(element, code) {
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });

    element.classList.add('selected');
    selectedCode = code;
    nextButtonEl.disabled = false;
}

function nextQuestion() {
    if (selectedCode === null) return;

    scores[selectedCode]++;
    currentQuestionIndex++;

    selectedCode = null;
    navigationIndex = -1; 
    nextButtonEl.disabled = true;

    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResults();
    }
}

document.addEventListener('keydown', (e) => {
    if (modalEl.classList.contains('active')) {
        if (e.key === 'Escape') closeModal();
        return; 
    }

    if (resultsContainerEl.style.display === 'block') return;

    const options = document.querySelectorAll('.answer-option');
    if (options.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault(); 
        navigationIndex++;
        if (navigationIndex >= options.length) navigationIndex = 0;
        updateKeyboardFocus();
    } 
    else if (e.key === 'ArrowUp') {
        e.preventDefault(); 
        navigationIndex--;
        if (navigationIndex < 0) navigationIndex = options.length - 1; 
        updateKeyboardFocus();
    } 
    else if (e.key === 'Enter') {
        e.preventDefault();
        if (!nextButtonEl.disabled) {
            nextQuestion();
        } else if (navigationIndex !== -1) {
            options[navigationIndex].click();
        }
    }
});

function updateKeyboardFocus() {
    const options = document.querySelectorAll('.answer-option');
    options.forEach((opt, index) => {
        if (index === navigationIndex) {
            opt.classList.add('keyboard-focus');
        } else {
            opt.classList.remove('keyboard-focus');
        }
    });
}

function getSortedUserCodes(scores) {
    const sortedEntries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sortedEntries.map(entry => entry[0]);
}

function showResults() {
    quizContentEl.style.opacity = '0';
    navigationContainerEl.style.opacity = '0';
    quizContentEl.style.transform = 'translateY(-20px)';
    navigationContainerEl.style.transform = 'translateY(-20px)';

    progressBarEl.style.width = '100%';

    setTimeout(() => {
        quizContentEl.style.display = 'none';
        navigationContainerEl.style.display = 'none';

        const userCodes = getSortedUserCodes(scores);
        const primaryCode = userCodes[0];
        const topThree = userCodes.slice(0, 3); 

        let recommendedMajors = MAJORS_DATA.filter(major => major.required[0] === primaryCode);

        recommendedMajors.sort((a, b) => {
            const getMatchScore = (major) => {
                let matchScore = 0;
                for (let i = 1; i < major.required.length; i++) {
                    if (topThree.includes(major.required[i])) {
                        matchScore++;
                    }
                }
                return matchScore;
            };
            return getMatchScore(b) - getMatchScore(a);
        });

        const top3Majors = recommendedMajors.slice(0, 3);
        
        resultTitleEl.style.display = 'none';
        resultCodeEl.style.display = 'none';
        
        majorsListEl.innerHTML = '';
        
        if (top3Majors.length > 0) {
            top3Majors.forEach(major => {
                const li = document.createElement('li');
                li.className = 'major-result-card'; 
                
                li.innerHTML = `
                    <span class="major-name">${major.name}</span>
                    <button class="btn-resources" onclick="openModal('${major.name}')">
                        View Resources
                    </button>
                `;
                majorsListEl.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.className = 'major-result-card';
            li.textContent = "Explore General Studies";
            majorsListEl.appendChild(li);
        }

        resultsContainerEl.style.display = 'block';

    }, 500); 
}

function openModal(majorName) {
    const majorData = MAJORS_DATA.find(m => m.name === majorName);

    if (majorData) {
        modalTitleEl.textContent = majorData.name;
        modalDescEl.textContent = majorData.description;
        
        modalResourcesEl.innerHTML = '';

        majorData.resources.forEach(res => {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${res.url}" target="_blank" class="resource-link">
                    ${res.title} ↗
                </a>
            `;
            modalResourcesEl.appendChild(li);
        });

        modalEl.classList.add('active');
    }
}

function closeModal() {
    modalEl.classList.remove('active');
}

function handleModalClick(event) {
    if (event.target === modalEl) {
        closeModal();
    }
}

function restartQuiz() {
    scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    currentQuestionIndex = 0;
    selectedCode = null;
    navigationIndex = -1;

    closeModal(); 
    resultsContainerEl.style.display = 'none';
    resultCodeEl.style.display = 'block';

    quizContentEl.style.display = 'block';
    navigationContainerEl.style.display = 'block';
    
    setTimeout(() => {
        quizContentEl.style.opacity = '1';
        navigationContainerEl.style.opacity = '1';
        quizContentEl.style.transform = 'translateY(0)';
        navigationContainerEl.style.transform = 'translateY(0)';
    }, 10);
    
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);