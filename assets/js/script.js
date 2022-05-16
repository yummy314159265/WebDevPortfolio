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
        }, 500)
    }, true)

    const createBigCardEl = (card) => {
        
        if(bigCardColumn.firstChild) {
            bigCardColumn.removeChild(bigCardColumn.firstChild);
        }

        const cardDivEl = document.createElement('div');
        
        const imgEl = document.createElement('img');
        const figureEl = document.createElement('figure');
        const imgDivEl = document.createElement('div');
        
        const contentDivEl = document.createElement('div');
        const cardContentDivEl = document.createElement('div');
        
        cardDivEl.classList.add('card');
        figureEl.classList.add(['image', 'is-1by1']);
        imgDivEl.classList.add('card-image');
        contentDivEl.classList.add('content');
        cardContentDivEl.classList.add('card-content');

        imgEl.setAttribute('src', 'https://via.placeholder.com/700');
        imgEl.setAttribute('alt', 'placeholder'); // card title
        
        figureEl.appendChild(imgEl);
        imgDivEl.appendChild(figureEl);

        const projectDescription = document.createTextNode('description placeholder');
        contentDivEl.appendChild(projectDescription);
        cardContentDivEl.appendChild(contentDivEl);
        
        cardDivEl.appendChild(imgDivEl);
        cardDivEl.appendChild(cardContentDivEl);

        bigCardColumn.appendChild(cardDivEl);
    }
})