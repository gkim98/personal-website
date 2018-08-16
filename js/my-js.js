// setTimeout(
//     function() {
//         let blocker = document.querySelector('#blocker');
//         blocker.parentNode.removeChild(blocker);
//     }, 3000
// );

// appends boxes to screen
let c = document.createDocumentFragment();
cards.forEach(function(card) {
    let e = document.createElement('div');
    e.className = 'box';

    // adds front and back to box element
    let front = e.appendChild(document.createElement('div'));
    front.className = 'box__side box__side--front';
    front.style.backgroundImage = `url(${card.img_url})`;
    front.style.backgroundSize = 'cover';

    let back = e.appendChild(document.createElement('div'));
    back.className = 'box__side box__side--back';

    // title of project
    let backTitle = back.appendChild(document.createElement('p'));
    backTitle.className = 'box__side--back--title';
    backTitle.textContent = card.title;

    // brief summary of project
    let backSummary = back.appendChild(document.createElement('p'));
    backSummary.className = 'box__side--back--summary';
    backSummary.innerHTML = card.summary;
    if(card.type != 'personal') {
        backMoreInfo = back.appendChild(document.createElement('p'));
        backMoreInfo.className = 'box__side--back--more-info';
        backMoreInfo.innerHTML = `<a href="#">Learn More</a> - <a href="#">View Project</a>`;
    }
    
    
    c.appendChild(e);
})
document.querySelector('.box-holder').appendChild(c);


