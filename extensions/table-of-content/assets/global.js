const container = document.querySelector('.article-template__content');
const headings = container.querySelectorAll('h1, h2, h3, h4');
let currentLevel = 0;
let toc = document.createElement('div');
toc.classList.add("container")
container.prepend(toc);

headings.forEach(function(heading) {
    const level = parseInt(heading.tagName.charAt(1));
    
    while (level <= currentLevel) {
        toc = toc.parentNode.parentNode;
        currentLevel--;
    }
    
    if (level > currentLevel) {
        let newUl = document.createElement('ol');
        newUl.classList.add("item")
        let newLi = document.createElement('li');
        newLi = document.createElement('item-link')
        newLi.textContent = heading.innerText;
        toc.appendChild(newUl);
        newUl.appendChild(newLi);
        toc = newLi;
        currentLevel++;
    } else {
        let newLi = document.createElement('li');
        newLi.textContent = heading.innerText;
        toc.parentNode.appendChild(newLi);
        toc = newLi;
    }
});