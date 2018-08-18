// card creation for project type
let createCards = function(type) {
    let c = document.createDocumentFragment();
    cards.forEach(function(card) {
        // skips projects for non-selected categories
        if(!card.type.includes(type)) { return; };

        let e = document.createElement('div');
        e.className = 'card';

        let content = e.appendChild(document.createElement('div'));
        content.className = 'card__content';

        //adds title and info to the card
        let title = content.appendChild(document.createElement('h1'));
        title.className = 'card__title';
        title.textContent = card.title;
        let info = content.appendChild(document.createElement('h2'));
        info.className = 'card__info';
        info.textContent = card.info;

        // adds image to the card
        let img = content.appendChild(document.createElement('div'));
        img.className = 'card__img';
        img.style.backgroundImage = `url(${card.img_url})`;
        
        // adds text to the cards
        let text = content.appendChild(document.createElement('div'));
        text.className = 'card__text';
        let background = text.appendChild(document.createElement('p'));
        background.className = 'card__background';
        background.innerHTML = card.background;
        let summary = text.appendChild(document.createElement('p'));
        summary.className = 'card__summary';
        summary.innerHTML = card.summary;

        // adds list of tools 
        let toolsString = card.tools.join(', ');
        let toolBox = content.appendChild(document.createElement('p'));
        toolBox.className = 'card__tool-box';
        let toolSpan = toolBox.appendChild(document.createElement('span'));
        toolSpan.textContent = 'tools: ';
        toolSpan.className = 'card__tool-span';
        let toolList = toolBox.appendChild(document.createElement('span'));
        toolList.textContent = toolsString;
        toolList.className = 'card__tool-list';

        // adds github link
        let github = content.appendChild(document.createElement('a'));
        github.href = card.github;
        github.target = '_blank';
        let gitLogo = github.appendChild(document.createElement('img'));
        gitLogo.className = 'card__github';
        gitLogo.src = '../img/github-logo.png';
    
        // adds cards to temporary fragment
        c.appendChild(e);
    });

    // returns the fragment 
    return c;
}

// removes selected class on click --> change selected
let removeSelectedClass = function() {
    let filterItems = document.getElementsByClassName('filter__option');
    for(let i = 0; i < filterItems.length; i++) {
        filterItems[i].classList.remove('selected');
    }
}

let updateFilter = function(t) {
    removeSelectedClass();
    t.classList.add('selected');
}

let disappearCards = function() {
    let currentCards = document.getElementsByClassName('card');
    let cardHolder = document.querySelector('.card-holder');
    cardHolder.style.opacity = '0';
}

let addCards = function(cards) {
    let cardHolder = document.querySelector('.card-holder');
    cardHolder.innerHTML = "";
    cardHolder.appendChild(cards);
    cardHolder.style.opacity = '1';
}

let replaceCards = function(t) {
    let selectedOption = t.textContent;
    let newCards = createCards(selectedOption);
    disappearCards();
    setTimeout(function() {
        addCards(newCards);
    }, 300);
}

// when item clicked --> replaces cards with new cards
let cardItemSelected = function(option) {
    let t = option.target;
    if(!t.classList.contains('selected')) {
        updateFilter(t);
        replaceCards(t);
    }
};

// adds on click listener to the filter options
let addFilterListeners = function() {
    let filterOptions = document.getElementsByClassName('filter__option');
    for(let i = 0; i < filterOptions.length; i++) {
        filterOptions[i].addEventListener('click', cardItemSelected, false);
    }
}


let main = function() {
    // loads up initial cards
    let firstCards = createCards('web');
    addCards(firstCards);
    addFilterListeners();
}

// runs the javascript for the page
main();