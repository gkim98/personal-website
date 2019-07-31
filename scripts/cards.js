/*
web:
    integrated language
    streamlines
    sound escape
data:
    data plus
    math visualization
    how to kickoff kickstarter
*/

/*
format of a card:
    img_url: path to the card's image
    type: type of project (in array because future may have multiple tags)
    title: name of the project
    info: stuff like dates
    background: motivation for the project
    summary: the project itself or what I did
    github: github link
    tools: what did I use to build the project
*/

// takes you to link on Google Chrome store
integratedLanguageLink = '<a href="https://chrome.google.com/webstore/detail/integrated-language/gecndgpfcacjllppgiffgfdhpdgibjan" target="_blank" class="card__link">Integrated Language</a>'
// takes you to Data+ website
dataPlusLink = '<a href="https://bigdata.duke.edu/projects/complex-decisions-real-numbers-medical-decision-making" target="_blank" class="card__link">Data+</a>'
weardukeLink = '<a href="https://wearduke.duke.edu/" target="_blank" class="card__link">WearDuke</a>'

cards = [
    // integrated language
    {
        img_url: '../img/benji.png',
        type: ['projects'],
        title: 'benji',
        info: 'capital one swe summit (jan 2019)',
        background: "Benji is the friendly ATM that helps children learn effective saving skills. The product has a kid-friendly interface with Tensorflow.js facial recognition for simple authentication and voice interaction for the non-readers.",
        summary: ``,
        github: 'https://github.com/vli1721/benji',
        tools: ['flask, react, js, css, firebase']
    },
    // foresite
    {
        img_url: '../img/foresite.png',
        type: ['projects'],
        title: 'foresite',
        info: 'pennapps (sept 2019)',
        background: "During times of disaster, the two most difficult obstacles are spreading awareness to those in the area and allowing first responders to easily assess the situation.",
        summary: `With both a mobile and web component, Foresite uses a crowd-sourcing approach to quickly spread information while simultaneously visualizing the affected area.`,
        github: 'https://github.com/gkim98/foresite-web',
        tools: ['react, redux, js, css']
    },
    // sound escape
    {
        img_url: '../img/sound-escape.PNG',
        type: ['projects'],
        title: 'sound escape',
        info: 'packhacks (april 2018)',
        background: "3D audio-recording microphones can cost hundreds, even thousands, of dollars.",
        summary: "Sound Escape allows you to create 3D soundscapes cheaply and conveniently using any 2D audio clips. Simply position your sounds around the listener to create rich audio environments.",
        github: "https://github.com/gkim98/sound-escape",
        tools: ['react', 'redux', 'js', 'css', 'howler']
    },
    // integrated language
    {
        img_url: '../img/integrated-language.PNG',
        type: ['projects'],
        title: 'integrated language',
        info: 'hackduke (oct 2017), cont. jan 2018',
        background: "Vocabulary can be the most boring part of learning a language, especially if your tool of choice is endless flashcards.",
        summary: `${integratedLanguageLink} is a chrome extension that incorporates foreign language into your everyday internet usage, allowing you to learn a language naturally and consistently.`,
        github: 'https://github.com/shavavo/IntegratedLanguage',
        tools: ['js']
    },
    // nvidia
    {
        img_url: '../img/nvidia.jpg',
        type: ['experience'],
        title: 'software engineering intern - nvidia',
        info: 'may 2019 - aug 2019',
        background: `Last summer, I interned at NVIDIA, as part of the autonomous vehicle team.`,
        summary: 'I contributed to their robust infrastructure by creating pipelines that automatically run performance evaluations on cluster and implementing new methods of ground truth generation for neural network training.',
        tools: ['c++, python, cmake']
    },
    // wearduke
    {
        img_url: '../img/wearduke.png',
        type: ['experience'],
        title: 'lead web developer - wearduke',
        info: 'oct 2018 - aug 2019',
        background: `${weardukeLink} is a new initiative at Duke that is promoting health and wellness through the use of wearable technology.`,
        summary: 'Using React and Gatsby, I created the website for all incoming participants. To ensure equal use, the site has been iterated to pass reviews for accessibility and cross-browser compatibility.',
        tools: ['react, gatsby, js, css']
    },

    // data plus
    {
        img_url: '../img/data-plus.PNG',
        type: ['experience'],
        title: 'data science intern - data+',
        info: 'may 2018 - aug 2018',
        background: `With the support of Duke's ${dataPlusLink} program, I spent ten weeks working with fellow students to explore how physician-patient interaction affects medical decision-making.`,
        summary: 'Using classification models and topic modeling, we were able to extract which parts of conversation were associated with differences in treatment decision.',
        github: 'https://github.com/sjgarland8/DukeDataPlus-Summer18-Proj17',
        tools: ['python', 'numpy stack', 'scikit-learn', 'nltk', 'gensim', 'xgboost']
    },
    // math visualization
    {
        img_url: '../img/math-visualization.PNG',
        type: ['experience'],
        title: 'research assistant - duke math department',
        info: 'feb 2018 - may 2018',
        background: "Working with Duke's mathematics department, I created a visualization dashboard to better help them understand the trends concerning the composition of students taking courses in the department.",
        summary: '',
        github: 'https://github.com/gkim98/math-visualization',
        tools: ['react', 'js', 'css']
    },
]