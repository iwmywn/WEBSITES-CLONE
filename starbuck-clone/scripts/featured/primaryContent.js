import primaryContent from "../../data/featured/primary.js";

export default function renderPrimaryContent() {
  let htmlPrimaryFeatured = '';
  primaryContent.forEach((primaryItem) => {
    htmlPrimaryFeatured += `
      <div class="product-container" style="background-color: ${primaryItem.bColor}">
        <div class="top">
          <img alt="${primaryItem.image.alt}" class="block"
            src="${primaryItem.image.src}">
        </div>
        <div class="bottom">
          <p>${primaryItem.title}</p>
          <p>${primaryItem.des}</p>
          <div>${primaryItem["access-button"]}</div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-section')
    .innerHTML = htmlPrimaryFeatured;
}