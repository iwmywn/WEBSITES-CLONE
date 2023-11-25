import primaryContent from "../../data/gift-cards/primary.js";
import htmlOther from "../../data/gift-cards/other.js";

export default function renderPrimaryContent() {
  let htmlPrimary = '';
  let cardAmount = primaryContent.length;
  let i = 0;
  primaryContent.forEach((cardItem, index) => {
    if (index !== 1 && index < (cardAmount - 2)) {
      let htmlCard = '';
      cardItem.image.forEach((imageItem) => {
        htmlCard += `
          <div class="card">
            <img src="${imageItem.src}"
              alt="${imageItem.alt}">
          </div>
        `;
      });
      htmlPrimary += `
        <section>
          <div class="title">${cardItem.title}</div>
          <div class="card-section">`
        + htmlCard
        + `</div>
        </section>
      `;
    } else {
      htmlPrimary += htmlOther[i++];
    }
  });
  document.querySelector('.js-main')
    .innerHTML = htmlPrimary;
}