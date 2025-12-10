const quizQuestions = [
    { //1
        question: "A group project is assigned. What is your immediate role?",
        answers: [
            { text: "I’ll take the lead, organize the workflow, and assign tasks to everyone.", code: "E" },
            { text: "I'll dive into the research to find all the facts and data we need.", code: "I" },
            { text: "I'll volunteer to design the presentation slides and create the visuals.", code: "A" },
            { text: "I’ll be the mediator, making sure everyone is heard and the team works together smoothly.", code: "S" }
        ]
    },
    { //2
        question: "You're given a $100 budget to improve your school. What do you do?",
        answers: [
            { text: "Use it to buy supplies for a club that helps students in need.", code: "S" },
            { text: "Invest it in a bake sale to try and turn it into $500 for a bigger project.", code: "E" },
            { text: "Buy tools to fix that wobbly table in the library or plant a small garden.", code: "R" },
            { text: "Create a detailed spending plan and present it to the school council for approval. ", code: "C" }
        ]
    },
    { //3
        question: "When you're watching a movie, what are you paying the most attention to?",
        answers: [
            { text: "The cinematography, the music, and the overall visual style.", code: "A" },
            { text: "The plot holes, the character motivations, and trying to predict the ending.", code: "I" },
            { text: "The relationships between the characters and how they interact.", code: "S" },
            { text: "The special effects, stunts, and how they made everything look so real.", code: "R" }
        ]
    },
    { //4
        question: "You have a free weekend with no homework. What are you most likely doing?",
        answers: [
            { text: "Going hiking, working on my car, or building something.", code: "R" },
            { text: "Volunteering for a local cause or organizing a get-together with friends.", code: "S" },
            { text: "Cleaning my room and planning my schedule for the upcoming week.", code: "C" },
            { text: "Writing, drawing, playing an instrument, or visiting an art museum.", code: "A" }
        ]
    },
    { //5
        question: "Which part of planning a party sounds most fun to you?",
        answers: [
            { text: "Creating the guest list, budget spreadsheet, and a minute-by-minute schedule.", code: "C" },
            { text: "Designing the invitations and decorations to fit a creative theme.", code: "A" },
            { text: "Promoting the party and convincing all the most interesting people to come.", code: "E" },
            { text: "Greeting guests at the door and making sure everyone is having a good time.", code: "S" }
        ]
    },
    { //6
        question: "When you play a video game, what kind of role do you prefer?",
        answers: [
            { text: "A support character who heals the team and helps others.", code: "S" },
            { text: "The team leader who develops the strategy and gives commands.", code: "E" },
            { text: "A scout or strategist who analyzes the map and finds the enemy's weaknesses.", code: "I" },
            { text: "An action-oriented character who is in the middle of the fight.", code: "R" }
        ]
    },
    { //7
        question: "You're asked to give a presentation. What do you focus on most?",
        answers: [
            { text: "Ensuring all my information is well-researched, accurate, and cited.", code: "I" },
            { text: "Delivering a powerful and persuasive speech that wins the audience over.", code: "E" },
            { text: "Creating a visually stunning slideshow that captures everyone's attention.", code: "A" },
            { text: "Making sure my presentation is perfectly organized and follows all the requirements.", code: "C" }
        ]
    },
    { //8
        question: "How do you prefer to learn something new?",
        answers: [
            { text: "By jumping in and learning through trial-and-error.", code: "R" },
            { text: "By reading books and articles to understand the theory behind it first.", code: "I" },
            { text: "By taking a class or having a mentor teach me directly.", code: "S" },
            { text: "By following a step-by-step instruction manual or online tutorial.", code: "C" }
        ]
    },
    { //9
        question: "You're at a museum. Which exhibit are you drawn to?",
        answers: [
            { text: "The natural history section with dinosaur skeletons and scientific displays.", code: "I" },
            { text: "The modern art gallery with abstract paintings and sculptures.", code: "A" },
            { text: "The technology wing with interactive exhibits of machines and engines.", code: "R" },
            { text: "A special exhibit on cultural history and how different societies lived.", code: "S" }
        ]
    },
    { //10
        question: "When you disagree with someone, you are most likely to:",
        answers: [
            { text: "Debate them confidently, using persuasion to win them over to my side.", code: "E" },
            { text: "Try to find a compromise and understand their point of view.", code: "S" },
            { text: "Present them with facts and logical arguments to prove your point.", code: "I" },
            { text: "Avoid conflict and stick to the established rules or guidelines.", code: "C" }
        ]
    },
    { //11
        question: "Which high school class sounds the most useful for your future?",
        answers: [
            { text: "Woodshop, auto mechanics, or a culinary arts class.", code: "R" },
            { text: "Psychology or a leadership development course.", code: "S" },
            { text: "Public speaking, debate, or a business management class.", code: "E" },
            { text: "Advanced chemistry or physics.", code: "I" }
        ]
    },
    { //12
        question: "You have to write a final paper. You choose a topic that:",
        answers: [
            { text: "Allows you to be creative and offer a unique, original perspective.", code: "A" },
            { text: "Requires you to analyze a lot of data and solve a complex problem.", code: "I" },
            { text: "Explores a social issue and how it impacts a community.", code: "S" },
            { text: "Is straightforward and allows you to organize known facts into a clear report.", code: "C" }
        ]
    },
    { //13
        question: "You're creating a music playlist for a road trip. What's your method?",
        answers: [
            { text: "I organize the songs neatly by genre and year of release.", code: "C" },
            { text: "I research artists I've never heard of to find hidden gems that fit the mood perfectly.", code: "I" },
            { text: "I focus on the vibe, making sure the songs flow together like a story", code: "A" },
            { text: "I make it a collaborative playlist and ask all my friends to add their favorite songs.", code: "S" }
        ]
    },
    { //14
        question: "If you were to create a documentary, what would it be about?",
        answers: [
            { text: "A deep dive into a complex scientific mystery or an unsolved crime.", code: "I" },
            { text: "The process of how something is built, following a master craftsperson at work.", code: "R" },
            { text: "The life story of an inspiring community leader or a humanitarian movement.", code: "S" },
            { text: "An experimental film about a musician's creative process, with a focus on visuals and sound.", code: "A" }
        ]
    },
    { //15
        question: "You're offered a weekend job. Which one sounds best?",
        answers: [
            { text: "Starting my own small service, like tutoring, dog walking, or tech help.", code: "E" },
            { text: "Working as a camp counselor or a cashier at a local shop where I can talk to people.", code: "S" },
            { text: "Helping a local landscaper or working in the kitchen of a busy restaurant.", code: "R" },
            { text: "An office assistant job that involves filing paperwork and organizing data.", code: "C" }
        ]
    },
    { //16
        question: "You're in an escape room with friends. What are you doing?",
        answers: [
            { text: "Physically searching the room, trying keys, and manipulating the physical objects.", code: "R" },
            { text: "Taking charge, directing the team, and making sure everyone is working on a task.", code: "E" },
            { text: "Stepping back to look for patterns in the symbols and trying to crack the logical codes.", code: "I" },
            { text: "Making sure everyone's ideas are being heard and keeping the team's morale high.", code: "S" }
        ]
    },
    { //17
        question: "How are the apps on your phone's home screen organized?",
        answers: [
            { text: "Arranged by color or icon design to create a visually pleasing aesthetic.", code: "A" },
            { text: "Sorted into clearly labeled folders by category (Finance, Games, News, etc.).", code: "C" },
            { text: "Only the most practical, frequently used utility apps are on the home screen for quick access.", code: "R" },
            { text: "Primarily news aggregators, research tools, and apps for learning new things.", code: "I" }
        ]
    },
    { //18
        question: "You're exploring a new city for the first time. What's your travel style?",
        answers: [
            { text: "I try to find the best deals, negotiate prices, and experience the city like a savvy local.", code: "E" },
            { text: "I follow a detailed itinerary I made beforehand, ensuring I see all the key landmarks on schedule.", code: "C" },
            { text: "I focus on activities—hiking the nearby trails, trying the local food, and walking everywhere.", code: "R" },
            { text: "I wander without a map, seeking out interesting street art, architecture, and photo opportunities.", code: "A" }
        ]
    },
    { //19
        question: "You inherit an old, run-down car. What is your plan for it?",
        answers: [
            { text: "I'll get a set of tools and a repair manual and try to restore it myself in my garage.", code: "R" },
            { text: "I'll calculate the cost of repairs versus its potential sale price to see if I can flip it for a profit.", code: "E" },
            { text: "I'll give it a custom paint job and modify its appearance to be completely unique.", code: "A" },
            { text: "I'll research the car's history, its original specifications, and what makes it a classic.", code: "I" }
        ]
    },
    { //20
        question: "You're asked to assemble a complex piece of IKEA furniture. You:",
        answers: [
            { text: "Read the entire instruction manual from front to back before touching any pieces.", code: "I" },
            { text: "Dump all the pieces out and start putting them together based on the pictures, only looking at the manual when stuck.", code: "R" },
            { text: "Carefully count and organize every screw and wooden peg, checking them against the parts list before starting.", code: "C" },
            { text: "Think about how I might customize it with a unique paint job or different hardware once it's built.", code: "A" }
        ]
    },
    { //21
        question: "You're choosing a new phone. What's the most important factor in your decision?",
        answers: [
            { text: "The brand's reputation and how the phone will help me be more productive and connected.", code: "E" },
            { text: "A detailed comparison of the technical specs, price, and long-term reliability.", code: "C" },
            { text: "The quality of the camera, the screen's color accuracy, and the overall design aesthetic.", code: "A" },
            { text: "The underlying processing power and the phones innovative new technology features.", code: "I" }
        ]
    },
    { //22
        question: "You've been asked to redesign your school's website homepage. You focus on:",
        answers: [
            { text: "Creating a new color scheme, a modern logo, and a gallery of impressive photos.", code: "A" },
            { text: "Adding bold headlines about the school's achievements to attract prospective students.", code: "E" },
            { text: "Ensuring the school calendar and daily announcements are organized and easy to find. ", code: "C" },
            { text: "A practical how-to section with tutorials for using the school's online resources.", code: "R" }
        ]
    },
    { //23
        question: "It's time to pick an after-school club. You're most likely to join:",
        answers: [
            { text: "The yearbook club, where you can help organize layouts and meet deadlines.", code: "C" },
            { text: "The robotics club, where you get to build, wire, and test a functional machine.", code: "R" },
            { text: "Student government, where you can pitch new ideas and take a leadership role.", code: "E" },
            { text: "The drama club or the literary magazine, where you can focus on creative expression.", code: "A" }
        ]
    },
    { //24
        question: "Which of these summer internships sounds the most appealing?",
        answers: [
            { text: "Working with the city's parks department to help build and maintain trails.", code: "R" },
            { text: "An administrative role at a law firm, helping to file documents and organize case files.", code: "C" },
            { text: "A marketing role at a new startup, helping them grow their customer base.", code: "E" },
            { text: "A commission-based sales job where my earnings are directly tied to my performance.", code: "E" }
        ]
    },
    { //25
        question: "You discover a fascinating new topic online. What is your immediate reaction?",
        answers: [
            { text: "I spend the next three hours falling down a research rabbit hole, reading everything I can find about it.", code: "I" },
            { text: "I start thinking about how I could express the topic's main ideas in a drawing, video, or story.", code: "A" },
            { text: "I think about how this new knowledge could be used to start a cool project or even a business.", code: "E" },
            { text: "I create an organized digital folder and start saving articles and links methodically for later.", code: "C" }
        ]
    }
];

// Number of answers:
// Realistic: 16
// Investigative: 16
// Artistic: 16
// Social: 15
// Enterprising: 16
// Conventional: 16
