import productsOverview from "../../data/menu/productsOverview.js";

export default function renderPrimaryMenu() {
  let htmlPrimaryMenuLeft = '';
  let htmlPrimaryMenuRight = '';
  productsOverview.forEach((productItem) => {
    let htmlProductName = '';
    for (let i = 0; i < productItem.sections.length; i++) {
      const product = productItem.sections[i];
      htmlProductName += `<span>${product.name}</span>`;
    }
    htmlPrimaryMenuLeft += (`
      <div class="category">
        <span class="title">${productItem.title}</span>`
        + htmlProductName
        + '</div>'
    );

    let htmlProductInfo = '';
    for (let i = 0; i < productItem.sections.length; i++) {
      const product = productItem.sections[i];
      htmlProductInfo += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          ${product.name}
        </div>
      `;
    }
    htmlPrimaryMenuRight += (`
      <div class="title">${productItem.title}</div>
      <div class="product-container">`
      + htmlProductInfo
      + '</div>'
    );
  });

  document.querySelector('.js-left-section-main')
    .innerHTML = htmlPrimaryMenuLeft;
  
  document.querySelector('.js-category')
    .innerHTML = htmlPrimaryMenuRight;
}