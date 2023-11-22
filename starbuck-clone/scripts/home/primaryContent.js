import primaryContent from "../../data/home/primary.js";
import noteContent from "../../data/home/note.js";

export default function renderPrimaryContent() {
  let htmlPrimaryContent = '';
  primaryContent.forEach((primaryItem) => {
    htmlPrimaryContent += `
      <section class="js-section" data-reverse="${primaryItem.reverse}" style="background-color: ${primaryItem.bColor}">
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
  
  setSize('title');
  setSize('content');
  reverse();
  
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
  
  function reverse() {
    document.querySelectorAll('.js-section')
      .forEach((sectionItem) => {
        const { reverse } = sectionItem.dataset;
        if (reverse === 'yes')
          sectionItem.classList.add('row-reverse');
      });
  }
}