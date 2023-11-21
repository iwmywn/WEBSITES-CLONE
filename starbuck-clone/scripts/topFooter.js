import topFooterContent from "../data/footer/top.js";

export default function renderTopFooter() {
  let htmlTopFooter = '';
  topFooterContent.forEach((footerItem) => {
    htmlTopFooter += `
      <div class="js-section section">
        <div class="footer-title">${footerItem.title}</div>
        <div>${footerItem.sections[0]}</div>
        <div>${footerItem.sections[1]}</div>
        <div>${footerItem.sections[2]}</div>
        <div>${footerItem.sections[3]}</div>
        <div>${footerItem.sections[4]}</div>
        <div>${footerItem.sections[5]}</div>
        <div>${footerItem.sections[6]}</div>
        <img src="icons/arrow.svg" alt="arrow">
      </div>
    `;
  });

  document.querySelector('.js-top-footer')
    .innerHTML = htmlTopFooter;

  document.querySelectorAll('.js-section>div')
    .forEach((section) => {
      if (section.innerHTML === '')
        section.remove();
    });
}