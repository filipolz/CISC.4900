const MAJORS_DATA = [
    // Investigative (I)
    { 
        name: "Computer Science", 
        required: ["I", "R", "C"],
        description: "Study of computers and computational systems. It involves the theory, design, development, and application of software and systems.",
        resources: [
            { title: "CS50: Intro to Computer Science (Harvard)", url: "https://pll.harvard.edu/course/cs50-introduction-computer-science" },
            { title: "Career Outlook: Software Developers", url: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm" },
            { title: "Day in the Life of a Software Engineer (YouTube)", url: "https://www.youtube.com/results?search_query=day+in+the+life+software+engineer" }
        ]
    },
    { 
        name: "Biology", 
        required: ["I", "R"],
        description: "The study of living organisms, divided into many specialized fields that cover their morphology, physiology, anatomy, behavior, origin, and distribution.",
        resources: [
            { title: "Crash Course: Biology (YouTube)", url: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF" },
            { title: "Khan Academy: Biology Library", url: "https://www.khanacademy.org/science/biology" },
            { title: "Careers in Biology (AIBS)", url: "https://www.aibs.org/careers/" }
        ]
    },
    { 
        name: "Psychology", 
        required: ["I", "S", "A"],
        description: "The scientific study of the mind and behavior. Psychologists are actively involved in studying and understanding mental processes, brain functions, and behavior.",
        resources: [
            { title: "American Psychological Association (APA)", url: "https://www.apa.org/education-career/guide" },
            { title: "Psychology Career Overview", url: "https://www.learnhowtobecome.org/psychologist/" },
            { title: "Introduction to Psychology (Coursera)", url: "https://www.coursera.org/learn/introduction-psych" }
        ]
    },
    { 
        name: "Engineering", 
        required: ["I", "R"],
        description: "The application of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings.",
        resources: [
            { title: "TryEngineering: Discover Engineering", url: "https://tryengineering.org/" },
            { title: "National Society of Professional Engineers", url: "https://www.nspe.org/resources/students" },
            { title: "Engineering Careers (BLS)", url: "https://www.bls.gov/ooh/architecture-and-engineering/home.htm" }
        ]
    },
    { 
        name: "Architecture", 
        required: ["I", "R", "C"],
        description: "The art and science of designing and constructing buildings. It involves a blend of artistic creativity and engineering precision.",
        resources: [
            { title: "Becoming an Architect (NCARB)", url: "https://www.ncarb.org/become-architect" },
            { title: "ArchDaily: Projects & News", url: "https://www.archdaily.com/" },
            { title: "Architecture Career Guide", url: "https://www.thebalancecareers.com/architect-career-profile-525986" }
        ]
    },
    { 
        name: "Economics", 
        required: ["I", "C", "E"],
        description: "A social science that studies how individuals, governments, firms, and nations make choices on allocating scarce resources.",
        resources: [
            { title: "American Economic Association: Students", url: "https://www.aeaweb.org/resources/students" },
            { title: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO" },
            { title: "Investopedia: Economics Basics", url: "https://www.investopedia.com/terms/e/economics.asp" }
        ]
    },
    { 
        name: "Mathematics and Statistics", 
        required: ["I", "C"],
        description: "The abstract science of number, quantity, and space. Statistics focuses on the collection, organization, analysis, interpretation, and presentation of data.",
        resources: [
            { title: "Math Careers (SIAM)", url: "https://www.siam.org/students-education/programs-initiatives/thinking-of-a-career-in-applied-mathematics" },
            { title: "Numberphile (YouTube Channel)", url: "https://www.youtube.com/user/numberphile" },
            { title: "American Statistical Association", url: "https://www.amstat.org/education/career-resources" }
        ]
    },
    { 
        name: "Social Sciences", 
        required: ["I", "S"],
        description: "A branch of science that deals with the institutions and functioning of human society and with the interpersonal relationships of individuals as members of society.",
        resources: [
            { title: "What can I do with a Sociology degree?", url: "https://www.prospects.ac.uk/careers-advice/what-can-i-do-with-my-degree/sociology" },
            { title: "American Anthropological Association", url: "https://www.americananthro.org/AdvanceYourCareer" },
            { title: "Social Science Research Council", url: "https://www.ssrc.org/" }
        ]
    },

    // Artistic (A)
    { 
        name: "Visual and Performing Arts", 
        required: ["A"],
        description: "Creative arts that are intended to be appreciated by sight or performance, including painting, sculpture, dance, theatre, and film.",
        resources: [
            { title: "Careers in Art and Design", url: "https://www.theartcareerproject.com/" },
            { title: "Juilliard: Dance, Drama, Music", url: "https://www.juilliard.edu/" },
            { title: "Day in the Life of a Fine Artist", url: "https://www.youtube.com/results?search_query=day+in+the+life+fine+artist" }
        ]
    },
    { 
        name: "English Language and Literature", 
        required: ["A", "S", "I"],
        description: "The study of literature and language, focusing on analysis, critique, and the history of written works.",
        resources: [
            { title: "Modern Language Association (MLA)", url: "https://www.mla.org/" },
            { title: "Jobs for English Majors", url: "https://www.thebalancecareers.com/best-jobs-for-english-majors-2059643" },
            { title: "Project Gutenberg (Free Books)", url: "https://www.gutenberg.org/" }
        ]
    },
    { 
        name: "Journalism", 
        required: ["A", "S"],
        description: "The activity or profession of writing for newspapers, magazines, or news websites or preparing news to be broadcast.",
        resources: [
            { title: "Poynter Institute for Media Studies", url: "https://www.poynter.org/" },
            { title: "Columbia Journalism Review", url: "https://www.cjr.org/" },
            { title: "Society of Professional Journalists", url: "https://www.spj.org/" }
        ]
    },
    { 
        name: "Graphic Design", 
        required: ["A", "R"],
        description: "The art or skill of combining text and pictures in advertisements, magazines, or books.",
        resources: [
            { title: "AIGA: The Professional Association for Design", url: "https://www.aiga.org/guide-career-guide" },
            { title: "Behance (Design Portfolios)", url: "https://www.behance.net/" },
            { title: "The Futur (Design Education)", url: "https://www.youtube.com/user/TheSkoolRocks" }
        ]
    },
    { 
        name: "Art History", 
        required: ["A", "I"],
        description: "The study of objects of art in their historical development and stylistic contexts.",
        resources: [
            { title: "Smarthistory (Khan Academy)", url: "https://smarthistory.org/" },
            { title: "The Art Story: Modern Art Insight", url: "https://www.theartstory.org/" },
            { title: "Museum Curators (Career Outlook)", url: "https://www.bls.gov/ooh/education-training-and-library/curators-museum-technicians-and-conservators.htm" }
        ]
    },

    // Social (S)
    { 
        name: "Nursing", 
        required: ["S", "I", "R"],
        description: "A profession focused on the care of individuals, families, and communities so they may attain, maintain, or recover optimal health.",
        resources: [
            { title: "American Nurses Association", url: "https://www.nursingworld.org/" },
            { title: "AACN: Nursing Essentials", url: "https://www.aacnnursing.org/Essentials" },
            { title: "Registered Nurse Career Overview", url: "https://www.bls.gov/ooh/healthcare/registered-nurses.htm" }
        ]
    },
    { 
        name: "Education", 
        required: ["S", "A"],
        description: "The process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.",
        resources: [
            { title: "Teach.org: Explore Teaching", url: "https://www.teach.org/" },
            { title: "Edutopia", url: "https://www.edutopia.org/" },
            { title: "National Education Association", url: "https://www.nea.org/" }
        ]
    },
    { 
        name: "Health Sciences", 
        required: ["S", "I"],
        description: "A multidisciplinary field that focuses on health, disease, and healthcare delivery.",
        resources: [
            { title: "ExploreHealthCareers.org", url: "https://explorehealthcareers.org/" },
            { title: "World Health Organization (WHO)", url: "https://www.who.int/" },
            { title: "Public Health Jobs", url: "https://publichealthjobs.org/" }
        ]
    },
    { 
        name: "Criminal Justice", 
        required: ["S", "E", "R"],
        description: "The system of law enforcement, involving police, lawyers, courts, and corrections used for all stages of criminal proceedings.",
        resources: [
            { title: "National Criminal Justice Reference Service", url: "https://www.ojp.gov/ncjrs/new-ojp-resources" },
            { title: "The Innocence Project", url: "https://innocenceproject.org/" },
            { title: "Careers in Criminal Justice", url: "https://www.criminaljustice.com/careers/" }
        ]
    },
    { 
        name: "Communications", 
        required: ["S", "A", "E"],
        description: "The study of how humans communicate. It covers a vast range of topics including media, public speaking, and digital communication.",
        resources: [
            { title: "National Communication Association", url: "https://www.natcom.org/" },
            { title: "Public Relations Society of America", url: "https://www.prsa.org/" },
            { title: "Ted Talks: Communication", url: "https://www.ted.com/topics/communication" }
        ]
    },
    { 
        name: "Political Science", 
        required: ["S", "E", "I"],
        description: "The scientific study of politics. It is a social science dealing with systems of governance and power, and the analysis of political activities.",
        resources: [
            { title: "American Political Science Association", url: "https://www.apsanet.org/CAREERS/Careers-for-Political-Science-Majors" },
            { title: "Politico: News & Analysis", url: "https://www.politico.com/" },
            { title: "Council on Foreign Relations", url: "https://www.cfr.org/" }
        ]
    },

    // Enterprising (E)
    { 
        name: "Business Administration", 
        required: ["E", "C", "S"],
        description: "The administration of a commercial enterprise. It includes all aspects of overseeing and supervising business operations.",
        resources: [
            { title: "Harvard Business Review", url: "https://hbr.org/" },
            { title: "SBA: Small Business Administration", url: "https://www.sba.gov/" },
            { title: "Business Career Guide (Indeed)", url: "https://www.indeed.com/career-advice/career-development/business-careers" }
        ]
    },
    { 
        name: "Finance", 
        required: ["E", "C", "I"],
        description: "The study and management of money, currency, and capital assets.",
        resources: [
            { title: "Investopedia: Finance", url: "https://www.investopedia.com/" },
            { title: "Bloomberg: Market News", url: "https://www.bloomberg.com/" },
            { title: "CFA Institute (Investment Pros)", url: "https://www.cfainstitute.org/" }
        ]
    },
    { 
        name: "Marketing", 
        required: ["E", "A", "S"],
        description: "The action or business of promoting and selling products or services, including market research and advertising.",
        resources: [
            { title: "HubSpot Marketing Blog", url: "https://blog.hubspot.com/marketing" },
            { title: "American Marketing Association", url: "https://www.ama.org/" },
            { title: "AdWeek", url: "https://www.adweek.com/" }
        ]
    },
    { 
        name: "Entrepreneurship", 
        required: ["E", "C"],
        description: "The activity of setting up a business or businesses, taking on financial risks in the hope of profit.",
        resources: [
            { title: "Y Combinator Startup School", url: "https://www.startupschool.org/" },
            { title: "Entrepreneur Magazine", url: "https://www.entrepreneur.com/" },
            { title: "Stanford eCorner", url: "https://ecorner.stanford.edu/" }
        ]
    },
    { 
        name: "Hospitality Management", 
        required: ["E", "S"],
        description: "The study of the hospitality industry, covering hotels, restaurants, cruise ships, amusement parks, and tourism.",
        resources: [
            { title: "Cornell School of Hotel Administration", url: "https://sha.cornell.edu/" },
            { title: "Hospitality Net", url: "https://www.hospitalitynet.org/" },
            { title: "American Hotel & Lodging Association", url: "https://www.ahla.com/" }
        ]
    },

    // Realistic (R)
    { 
        name: "Mechanical Engineering", 
        required: ["R", "I"],
        description: "The branch of engineering dealing with the design, construction, and use of machines.",
        resources: [
            { title: "ASME (American Society of Mechanical Engineers)", url: "https://www.asme.org/" },
            { title: "Interesting Engineering", url: "https://interestingengineering.com/" },
            { title: "Mechanical Engineering Overview (Youtube)", url: "https://www.youtube.com/results?search_query=mechanical+engineering+overview" }
        ]
    },
    { 
        name: "Civil Engineering", 
        required: ["R", "I"],
        description: "A professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment.",
        resources: [
            { title: "ASCE (American Society of Civil Engineers)", url: "https://www.asce.org/" },
            { title: "Civil Engineering Magazine", url: "https://www.cenews.com/" },
            { title: "Practical Engineering (YouTube)", url: "https://www.youtube.com/user/gradyhillhouse" }
        ]
    },
    { 
        name: "Environmental Science", 
        required: ["R", "I"],
        description: "An interdisciplinary academic field that integrates physical, biological and information sciences to the study of the environment.",
        resources: [
            { title: "National Geographic: Environment", url: "https://www.nationalgeographic.com/environment/" },
            { title: "EPA: Careers", url: "https://www.epa.gov/careers" },
            { title: "Environmental Science.org", url: "https://www.environmentalscience.org/" }
        ]
    },
    { 
        name: "Agriculture", 
        required: ["R", "I"],
        description: "The science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food and wool.",
        resources: [
            { title: "Future Farmers of America (FFA)", url: "https://www.ffa.org/" },
            { title: "USDA New Farmers", url: "https://newfarmers.usda.gov/" },
            { title: "Agriculture.com", url: "https://www.agriculture.com/" }
        ]
    },
    { 
        name: "Forestry", 
        required: ["R", "I"],
        description: "The science and craft of creating, managing, using, conserving, and repairing forests and associated resources.",
        resources: [
            { title: "Society of American Foresters", url: "https://www.eforester.org/" },
            { title: "US Forest Service Careers", url: "https://www.fs.usda.gov/working-with-us/jobs" },
            { title: "Forestry Careers Guide", url: "https://www.forestryusa.com/careers.html" }
        ]
    },
    { 
        name: "Construction Management", 
        required: ["R", "E"],
        description: "A professional service that uses specialized, project management techniques to oversee the planning, design, and construction of a project.",
        resources: [
            { title: "Construction Management Association", url: "https://www.cmaanet.org/" },
            { title: "Construction Dive", url: "https://www.constructiondive.com/" },
            { title: "Careers in Construction", url: "https://www.byf.org/" }
        ]
    },
    { 
        name: "Automotive Technology", 
        required: ["R", "C"],
        description: "The study of inspection, maintenance, and repair of cars and light trucks.",
        resources: [
            { title: "ASE (Automotive Service Excellence)", url: "https://www.ase.com/" },
            { title: "MotorTrend", url: "https://www.motortrend.com/" },
            { title: "Universal Technical Institute", url: "https://www.uti.edu/" }
        ]
    },

    // Conventional (C)
    { 
        name: "Accounting", 
        required: ["C", "E", "I"],
        description: "The measurement, processing, and communication of financial and non-financial information about economic entities.",
        resources: [
            { title: "AICPA: Student Resources", url: "https://www.thiswaytocpa.com/" },
            { title: "AccountingCoach", url: "https://www.accountingcoach.com/" },
            { title: "Journal of Accountancy", url: "https://www.journalofaccountancy.com/" }
        ]
    },
    { 
        name: "Data Science", 
        required: ["C", "I"],
        description: "An interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data.",
        resources: [
            { title: "Kaggle (Data Science Community)", url: "https://www.kaggle.com/" },
            { title: "DataCamp", url: "https://www.datacamp.com/" },
            { title: "Towards Data Science (Medium)", url: "https://towardsdatascience.com/" }
        ]
    },
    { 
        name: "Information Systems", 
        required: ["C", "I"],
        description: "An integrated set of components for collecting, storing, and processing data and for providing information, knowledge, and digital products.",
        resources: [
            { title: "Association for Information Systems", url: "https://aisnet.org/" },
            { title: "CIO Magazine", url: "https://www.cio.com/" },
            { title: "Information Systems Career Path", url: "https://www.roberthalf.com/blog/salaries-and-skills/the-career-path-of-an-information-systems-manager" }
        ]
    }
];