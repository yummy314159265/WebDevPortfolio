document.addEventListener('DOMContentLoaded', ()=> {
    const bottomCards = document.querySelector("#bottom-cards");
    const heroColumn = document.querySelector('#hero-column');
    const bigCardColumn =document.querySelector('#big-card-column');
    
    bottomCards.addEventListener("click", event => {
        event.stopPropagation();
        if(event.target.closest('.card')){
            createBigCardEl(event.target.closest('.card'));
        }

        bigCardColumn.classList.add('is-half');

        setTimeout(()=>{
            heroColumn.classList.add('is-half');
            heroColumn.classList.remove('is-full');
            bigCardColumn.setAttribute('style', 'margin: 0');
        }, 300)
    }, true)

    const slideCardLeft = () => {
        
    }

    const createBigCardEl = (card) => {

        removePreviousElement();
        
        const bigCardDivEl = document.createElement('div');
        bigCardDivEl.classList.add('card');

        const cardImg = createCardImageEl(card);
        const cardContent = createCardContentEl(card);

        bigCardDivEl.appendChild(cardImg);
        bigCardDivEl.appendChild(cardContent);

        bigCardColumn.appendChild(bigCardDivEl);
    }

    const removePreviousElement = () => {
        if(bigCardColumn.firstChild) {
            bigCardColumn.removeChild(bigCardColumn.firstChild);
        }
    }

    const createCardImageEl = (card) => {
        const imgEl = document.createElement('img');
        const figureEl = document.createElement('figure');
        const imgDivEl = document.createElement('div');

        figureEl.classList.add(['image', 'is-4by3']);
        imgDivEl.classList.add('card-image');

        imgEl.setAttribute('src', 'https://via.placeholder.com/700x525');
        imgEl.setAttribute('alt', 'placeholder'); // card title

        figureEl.appendChild(imgEl);
        imgDivEl.appendChild(figureEl);

        return imgDivEl;
    }

    const createCardContentEl = (card) => {
        const contentDivEl = document.createElement('div');
        const cardContentDivEl = document.createElement('div');
        
        contentDivEl.classList.add('content');
        cardContentDivEl.classList.add('card-content');

        const projectDescription = document.createTextNode('description placeholder'); // from small card
        
        contentDivEl.appendChild(projectDescription);
        cardContentDivEl.appendChild(contentDivEl);

        return cardContentDivEl;
    }

})