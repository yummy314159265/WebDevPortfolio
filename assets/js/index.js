import projects from './projectList.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', ()=> {
    const bottomCards = document.querySelector('#bottom-cards');
    const heroColumn = document.querySelector('#hero-column');
    const header = document.querySelector('#header');

    const setCardInfo = () => {
        bottomCards.querySelectorAll('.card').forEach(card => {
            const i = card.dataset.project;
            const projectName = document.createTextNode(projects[i].name);
            card.querySelector('.card-header-title').appendChild(projectName);
            card.querySelector('img').setAttribute('src', projects[i].img);
            card.querySelector('img').setAttribute('alt', projects[i].name);
        });
    }

    const slideCardLeft = (card) => {
        setTimeout(() => {
            heroColumn.classList.add('is-half');
            heroColumn.classList.remove('is-full');
            card.setAttribute('style', 'margin: 0');
        }, 300);
    }

    const slideCardUp = (card) => {
        card.setAttribute('style', 'transform: translateY(-1000px)');    
    }

    const createBigCardColumn = (card) => {
        const i = card.dataset.project;

        const bigCardColumnEl = createEl('div', ['column', 'level-item', 'is-half'], {'id':'big-card-column', 'style':'margin: 0 0 0 1000px'});
        const cardEl = createEl('div', ['card']);
        const cardImageEl = createEl('div', ['card-image']);
        const figureEl = createEl('figure', ['image', 'is-4by3']);
        const imgEl = createEl('img', [], {'src':projects[i].bigImg, 'alt':projects[i].name});
        const cardContentEl = createEl('div', ['card-content']);
        const contentEl = createEl('p', ['content']);
        const githubLinkEl = createEl('a', ['is-inline'], {'href': projects[i].github});
        const deploymentLinkEl = createEl('a', ['is-inline'], {'href': projects[i].deployment})
        const cardFooterEl = createEl('footer', ['card-footer']);

        figureEl.appendChild(imgEl);
        cardImageEl.appendChild(figureEl);
        cardEl.appendChild(cardImageEl);

        projects[i].skills.forEach(skill => {
            const skillEl = createEl('p', ['card-footer-item']);
            const projectSkill = document.createTextNode(skill);
            skillEl.appendChild(projectSkill);
            cardFooterEl.appendChild(skillEl);
        })

        const projectDescription = document.createTextNode(projects[i].description);
        const githubLink = document.createTextNode('github');
        const separator1 = document.createTextNode(' | ');
        const deploymentLink = document.createTextNode('deployment');
        const separator2 = document.createTextNode(' | ');
        
        githubLinkEl.appendChild(githubLink);
        deploymentLinkEl.appendChild(deploymentLink);
        contentEl.appendChild(projectDescription);
        contentEl.appendChild(separator1);
        contentEl.appendChild(githubLinkEl);
        contentEl.appendChild(separator2);
        contentEl.appendChild(deploymentLinkEl);
        cardContentEl.appendChild(contentEl);
        cardEl.appendChild(cardContentEl);
        cardEl.appendChild(cardFooterEl);

        bigCardColumnEl.appendChild(cardEl);
        
        return bigCardColumnEl;
    }

    const createEl = (element, classes = [], attributes = {}) => {
        const el = document.createElement(element);
        el.classList.add(...classes);
        
        for(const attr in attributes){
            el.setAttribute(attr, attributes[attr]);
        }

        return el;
    }
    
    const addSelected = (element) => {
        element.classList.add('selected');
    }
    
    const removeSelected = (element) => {
        element.classList.remove('selected');
    }

    const init = () => {
        setCardInfo();
    }

    bottomCards.addEventListener('click', event => {
        event.stopPropagation();
        const card = event.target.closest('.card');

        const currentBigCard = document.querySelector('#big-card-column');
        
        if(currentBigCard){
            slideCardUp(currentBigCard);
            setTimeout(()=>currentBigCard.remove(), 300);
        }

        if(card){
            const bigCard = createBigCardColumn(card);
            header.appendChild(bigCard);
            slideCardLeft(bigCard);

            bottomCards.querySelectorAll('.card').forEach(element => removeSelected(element));
            addSelected(card);
        }
    })

    init();
})