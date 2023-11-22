import primaryFeatured from "../../data/featured/primaryFeatured.js";
import setBColor from "../utils/setBackColor.js";
import color from "../../data/featured/color.js";

export default function renderPrimaryContent() {
  let htmlPrimaryFeatured = '';
  primaryFeatured.forEach((primaryItem) => {
    htmlPrimaryFeatured += `
      <div class="js-product-container product-container" data-id=${primaryItem.id}>
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

  setBColor('product-container', color);
}