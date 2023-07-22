
const container = document.querySelector('.article-template__content');
const headings = container.querySelectorAll('h1, h2, h3, h4');
let currentLevel = 0;
let toc = document.createElement('div');
toc.classList.add("container");
let title = document.createElement('p');
title.classList.add("title-toc");
toc.appendChild(title);
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

    (function () {
        async function fetchSetting() {
          const response = await fetch("/apps/testapp/setting/get/themeapp", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'ngrok-skip-browser-warning': 'true',
              Accept: "application/json",
            },
          });
      
          try {
            const res = await response.json();
            // console.log(res.toc);
            let titleTOC = document.querySelector(".title-toc");
            console.log(res.toc.title);
            titleTOC.innerText = res.toc.title;
          } catch (error) {
            console.log(error.message);
          }
      
          return response;
        }
      
        fetchSetting();
      })();


