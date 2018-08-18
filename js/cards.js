/*
web:
    integrated language
    streamlines
    sound escape

mobile:
    fruit saver

data:
    data plus
    how to kickoff kickstarter

web and data:
    math visualization
    machine learning interface
*/
integratedLanguageLink = '<a href="https://chrome.google.com/webstore/detail/integrated-language/gecndgpfcacjllppgiffgfdhpdgibjan" target="_blank" class="card__link">Integrated Language</a>'
dataPlusLink = '<a href="https://bigdata.duke.edu/projects/complex-decisions-real-numbers-medical-decision-making" target="_blank" class="card__link">Data+</a>'

cards = [
    // integrated language
    {
        img_url: '../img/integrated-language.PNG',
        type: ['web'],
        title: 'integrated language',
        info: 'hackduke (oct 2017), cont. jan 2018',
        background: "Vocabulary can be the most boring part of learning a language, especially if your tool of choice is endless flashcards.",
        summary: `${integratedLanguageLink} is a chrome extension that incorporates foreign language into your everyday internet usage, allowing you to learn a language naturally and consistently.`,
        github: 'https://github.com/shavavo/IntegratedLanguage',
        tools: ['js']
    },
    // sound escape
    {
        img_url: '../img/sound-escape.png',
        type: ['web'],
        title: 'sound escape',
        info: 'packhacks (april 2018)',
        background: "3D audio-recording microphones can cost hundrends, even thousands, of dollars.",
        summary: "Sound Escape allows you to create 3D soundscapes cheaply and conveniently using any 2D audio clips. Simply position your sounds around the listener to create rich audio environments.",
        github: "https://github.com/gkim98/sound-escape",
        tools: ['js', 'react', 'howler.js']
    },
    // streamlines
    {
        img_url: '../img/streamlines.PNG',
        type: ['web'],
        title: 'streamlines',
        info: 'feb 2018',
        background: "One of the biggest sources of writer's block is doubt. It makes writers scrutinize every word they write.",
        summary: "Streamlines is a text editor that forces writers to move forward and stay in the present by literally making it impossible to look back.",
        github: "https://github.com/gkim98/streamlines",
        tools: ['js', 'react', 'firebase']
    },
    // data plus
    {
        img_url: '../img/data-plus.PNG',
        type: ['data'],
        title: 'complex decisions, real numbers',
        info: 'may 2018 - aug 2018',
        background: `With the support of Duke's ${dataPlusLink} program, I spent ten weeks working with fellow students to explore how physician-patient interaction affects medical decision-making.`,
        summary: 'Using classification models and topic modeling, we were able to extract which parts of conversation were associated with differences in treatment decision.',
        github: 'https://github.com/sjgarland8/DukeDataPlus-Summer18-Proj17',
        tools: ['numpy stack', 'scikit-learn', 'nltk', 'gensim', 'xgboost']
    },
    // math visualization
    {
        img_url: '../img/math-visualization.PNG',
        type: ['data'],
        title: 'math department dashboard',
        info: 'feb 2018 - may 2018',
        background: "Working with Duke's mathematics department, I created a visualization dashboard to better understand the trends concerning the composition of students taking courses in the department.",
        summary: '',
        github: 'https://github.com/gkim98/math-visualization',
        tools: ['js', 'react', 'victory.js']
    },
    // how to kickoff kickstarter
    {
        img_url: '../img/kickstarter.PNG',
        type: ['data'],
        title: 'how to kickoff kickstarter',
        info: 'jan 2018',
        background: "During Kickstarter campaigns, you set a fundraising goal, and if you reach it, you get the money. Otherwise, you get nothing. As a result, campaigns have a strategic component.",
        summary: "In my analysis, I explore the factors that contribute to success on Kickstarter for users to apply to their own campaigns.",
        github: 'https://github.com/gkim98/kickoff-kickstarter',
        tools: ['numpy stack', 'seaborn']
    }
]