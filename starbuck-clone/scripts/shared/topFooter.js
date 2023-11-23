import topFooterContent from "../../data/footer/top.js";

export default function renderTopFooter() {
  let htmlTopFooter = '';
  topFooterContent.forEach((footerItem) => {
    let htmlTitle = '';
    footerItem.sections.forEach((title) => {
      htmlTitle += `<div>${title}</div>`;
    });
    htmlTopFooter += `
      <div class="js-section section">
        <div class="footer-title">${footerItem.title}</div>`
      + htmlTitle
      + `<img src="icons/arrow.svg" alt="arrow">
      </div>`
      ;
  });

  document.querySelector('.js-top-footer')
    .innerHTML = htmlTopFooter;
}