const MAJORS_DATA = [
    // Investigative (I)
    { name: "Computer Science", required: ["I", "R", "C"] },
    { name: "Biology", required: ["I", "R"] },
    { name: "Psychology", required: ["I", "S", "A"] },
    { name: "Engineering", required: ["I", "R"] },
    { name: "Architecture", required: ["I", "R", "C"] },
    { name: "Economics", required: ["I", "C", "E"] },
    { name: "Mathematics and Statistics", required: ["I", "C"] },
    { name: "Social Sciences (Sociology, Anthropology)", required: ["I", "S"] },
    
    // Artistic (A)
    { name: "Visual and Performing Arts", required: ["A"] },
    { name: "English Language and Literature", required: ["A", "S", "I"] },
    { name: "Journalism", required: ["A", "S"] },
    { name: "Graphic Design", required: ["A", "R"] },
    { name: "Art History", required: ["A", "I"] },

    // Social (S)
    { name: "Nursing", required: ["S", "I", "R"] },
    { name: "Education", required: ["S", "A"] },
    { name: "Health Sciences", required: ["S", "I"] },
    { name: "Criminal Justice", required: ["S", "E", "R"] },
    { name: "Communications", required: ["S", "A", "E"] },
    { name: "Political Science", required: ["S", "E", "I"] },

    // Enterprising (E)
    { name: "Business Administration", required: ["E", "C", "S"] },
    { name: "Finance", required: ["E", "C", "I"] },
    { name: "Marketing", required: ["E", "A", "S"] },
    { name: "Entrepreneurship", required: ["E", "C"] },
    { name: "Hospitality Management", required: ["E", "S"] },
    
    // Realistic (R)
    { name: "Mechanical Engineering", required: ["R", "I"] },
    { name: "Civil Engineering", required: ["R", "I"] },
    { name: "Environmental Science", required: ["R", "I"] },
    { name: "Agriculture", required: ["R", "I"] },
    { name: "Forestry", required: ["R", "I"] },
    { name: "Construction Management", required: ["R", "E"] },
    { name: "Automotive Technology", required: ["R", "C"] },

    // Conventional (C)
    { name: "Accounting", required: ["C", "E", "I"] },
    { name: "Data Science", required: ["C", "I"] },
    { name: "Information Systems", required: ["C", "I"] }
];

const PERSONALITY_NAMES = {
    R: "Realistic",
    I: "Investigative",
    A: "Artistic",
    S: "Social",
    E: "Enterprising",
    C: "Conventional"
};

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

let currentQuestionIndex = 0;
let selectedCode = null;
// Check if quizQuestions exists
const totalQuestions = (typeof quizQuestions !== 'undefined') ? quizQuestions.length : 0;

// Score tracker
let scores = {
    R: 0, I: 0, A: 0, S: 0, E: 0, C: 0
};

function loadQuestion() {
    if (typeof quizQuestions === 'undefined' || quizQuestions.length === 0) {
        console.error("No questions found. Ensure questions.js is loaded.");
        return;
    }

    // Animate out old question
    quizContentEl.style.opacity = '0';
    quizContentEl.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const progress = ((currentQuestionIndex) / totalQuestions) * 100;

        // Update progress bar
        progressBarEl.style.width = progress + '%';
        questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
        questionTextEl.textContent = currentQuestion.question;

        // Clear old answers
        answersContainerEl.innerHTML = '';

        // Create and display new answer options
        const answerLetters = ['A', 'B', 'C', 'D'];
        currentQuestion.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            
            answerDiv.dataset.code = answer.code; 

            answerDiv.innerHTML = `
                <div class="answer-letter">${answerLetters[index]}</div>
                <div class="answer-text">${answer.text}</div>
            `;

            answerDiv.addEventListener('click', () => selectAnswer(answerDiv, answer.code));
            
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
    nextButtonEl.disabled = true;

    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResults();
    }
}

function getSortedUserCodes(scores) {
    // Convert scores object to array [ ['I', 5], ['R', 3], ... ]
    const sortedEntries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    // Return just the codes: ['I', 'R', 'C', 'S', 'E', 'A']
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

        // Get top 3 
        const userCodes = getSortedUserCodes(scores);
        const primaryCode = userCodes[0];
        const topThree = userCodes.slice(0, 3); // Get top 3 for comparison

        // Filter majors by primary code
        let recommendedMajors = MAJORS_DATA.filter(major => major.required[0] === primaryCode);

        // 3. Sort majors based on secondary/tertiary matches
        recommendedMajors.sort((a, b) => {
            // Function to calculate how many of a major's required codes are in the user's top 3
            const getMatchScore = (major) => {
                let matchScore = 0;
        
                for (let i = 1; i < major.required.length; i++) {
                    if (topThree.includes(major.required[i])) {
                        matchScore++;
                    }
                }
                return matchScore;
            };

            const scoreA = getMatchScore(a);
            const scoreB = getMatchScore(b);

            // Sort descending (higher match score first)
            return scoreB - scoreA;
        });

        const top3Majors = recommendedMajors.slice(0, 3);
        const primaryName = PERSONALITY_NAMES[primaryCode];
        resultTitleEl.textContent = `Your Top Personality Type is:`;
        
        resultCodeEl.textContent = `${primaryName} (${topThree.join('-')})`;
        
        majorsListEl.innerHTML = '';
        
        if (top3Majors.length > 0) {
            top3Majors.forEach(major => {
                const li = document.createElement('li');
                li.textContent = major.name;
                majorsListEl.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = "Explore General Studies";
            majorsListEl.appendChild(li);
        }

        resultsContainerEl.style.display = 'block';

    }, 500); 
}

function restartQuiz() {
    scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    currentQuestionIndex = 0;
    selectedCode = null;

    resultsContainerEl.style.display = 'none';

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