import primaryContent from "../data/home/primaryContent.js";
import noteContent from "../data/home/noteContent.js";
import colorContent from "../data/home/colorContent.js";
import renderTopFooter from "./topFooter.js";
import renderBottomFooter from "./bottomFooter.js";

let htmlPrimaryContent = '';
primaryContent.forEach((primaryItem) => {
  htmlPrimaryContent += `
    <section class="js-section" data-id="${primaryItem.id}" data-reverse="${primaryItem.reverse}">
      <div class="left">
        <img
          alt="${primaryItem.image.alt}"
          class="block" src="${primaryItem.image.src}">
      </div>
      <div class="right">
        <div class="js-size-title" data-id="${primaryItem.id}">${primaryItem.title}</div>
        <div class="js-size-content" data-id="${primaryItem.id}">${primaryItem.content}</div>
        <div class="access-button">${primaryItem['access-button']}</div>
      </div>
    </section>
  `;
});

htmlPrimaryContent += noteContent;

document.getElementById('main')
  .innerHTML = htmlPrimaryContent;

setBColor();
setSize('title');
setSize('content');

function setBColor() {
  document.querySelectorAll('.js-section')
    .forEach((sectionItem) => {
      const { id } = sectionItem.dataset;
      colorContent.forEach((colorItem) => {
        if (id === colorItem.id)
          sectionItem.style.backgroundColor = colorItem.bColor;
      });
    });
}

function setSize(name) {
  document.querySelectorAll(`.js-size-${name}`)
    .forEach((item) => {
      const { id } = item.dataset;
      primaryContent.forEach((primaryItem) => {
        if (id === primaryItem.id) {
          const sizeClass = primaryItem.size === 'small' ? `small-${name}` : `big-${name}`;
          item.classList.add(sizeClass);
        }
      });
    });
}

reverse();

function reverse() {
  document.querySelectorAll('.js-section')
    .forEach((sectionItem) => {
      const { reverse } = sectionItem.dataset;
      if (reverse === 'yes')
        sectionItem.classList.add('row-reverse');
    });
}

renderTopFooter();
renderBottomFooter();