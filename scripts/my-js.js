/*
construction of a card:
    1) title at the top of the card
    2) info as another header below the title
    3) image associated with the project
    4) body of text describing the project (background + summary)
    5) github link
    6) tools used
*/
let createCards = function(type) {
    // fragment -> quicker DOM manipulation
    let cardsFragment = document.createDocumentFragment();
    cards.forEach(function(card) {
        // chooses projects of the specified type
        if(!card.type.includes(type)) { return; };

        let cardContainer = document.createElement('div');
        cardContainer.className = 'card';

        // holds the actual content of the card
        let cardContent = cardContainer.appendChild(document.createElement('div'));
        cardContent.className = 'card__content';

        // adds title and info to the card
        let title = cardContent.appendChild(document.createElement('h1'));
        title.className = 'card__title';
        title.textContent = card.title;
        let info = cardContent.appendChild(document.createElement('h2'));
        info.className = 'card__info';
        info.textContent = card.info;

        // adds image to the card
        let img = cardContent.appendChild(document.createElement('div'));
        img.className = 'card__img';
        img.style.backgroundImage = `url(${card.img_url})`;
        
        // adds text to the cards
        let cardText = cardContent.appendChild(document.createElement('div'));
        cardText.className = 'card__text';
        let background = cardText.appendChild(document.createElement('p'));
        background.className = 'card__background';
        background.innerHTML = card.background;
        let summary = cardText.appendChild(document.createElement('p'));
        summary.className = 'card__summary';
        summary.innerHTML = card.summary;

        // adds list of tools 
        let toolsString = card.tools.join(', ');
        let toolContainer = cardContent.appendChild(document.createElement('p'));
        toolContainer.className = 'card__tools';
        toolContainer.innerHTML = `<span>tools: </span>${toolsString}`; // span to separately style "tools"

        // adds github link
        let github = cardContent.appendChild(document.createElement('a'));
        github.href = card.github;
        github.target = '_blank'; // opens link in new tab
        let gitLogo = github.appendChild(document.createElement('img'));
        gitLogo.className = 'card__github';
        gitLogo.src = '../img/github-logo.png';
    
        // adds cards to temporary fragment
        cardsFragment.appendChild(cardContainer);
    });

    return cardsFragment;
}


/*
    handles work experience/projects filter
*/

// clears "seleced" class on type filter
let removeSelectedClass = function() {
    // thinking ahead to when there'll be more options
    let filterItems = document.getElementsByClassName('filter__option');
    for(let i = 0; i < filterItems.length; i++) {
        filterItems[i].classList.remove('selected');
    }
}

// the new selected type is given "selected" class
let updateFilter = function(t) {
    removeSelectedClass();
    t.classList.add('selected');
}

// makes cards fade
let disappearCards = function() {
    let cardHolder = document.querySelector('.card-holder');
    cardHolder.style.opacity = '0';
}

// adds cards of new type
let addCards = function(cards) {
    let cardHolder = document.querySelector('.card-holder');
    cardHolder.innerHTML = ""; // drops previous cards
    cardHolder.appendChild(cards);
    cardHolder.style.opacity = '1'; // cards fade in
}

// **overall function for handling card replacement
let replaceCards = function(t) {
    let selectedOption = t.textContent; // which type chosen
    let newCards = createCards(selectedOption);
    disappearCards();
    setTimeout(function() {
        addCards(newCards);
    }, 300); // let fade animation play
}

// change filter option -> change filter UI and cards
let filterOptionChosen = function(option) {
    let t = option.target;
    // only trigger if diff option chosen
    if(!t.classList.contains('selected')) {
        updateFilter(t);
        replaceCards(t);
    }
};

// adds on click listener to the filter options
let addFilterListeners = function() {
    let filterOptions = document.getElementsByClassName('filter__option');
    for(let i = 0; i < filterOptions.length; i++) {
        filterOptions[i].addEventListener('click', filterOptionChosen, false);
    }
}


/*
    runs javascript code
*/
let main = function() {
    // loads up initial cards
    let firstCards = createCards('web');
    addCards(firstCards);
    addFilterListeners();
}

main();