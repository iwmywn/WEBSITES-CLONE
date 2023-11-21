import bottomFooterContent from "../data/footer/bottom.js";

export default function renderBottomFooter() {
  let htmlBottomFooter = '';
  bottomFooterContent.forEach((footerItem) => {
    htmlBottomFooter += `
      <div>
        <img src="${footerItem.image.src}" alt="${footerItem.image.alt}">
      </div>
    `;
  });

  document.querySelector('.js-social-media')
    .innerHTML = htmlBottomFooter;
  
  document.querySelector('.js-other-options')
    .innerHTML = `
      <div>Privace Notice</div>
      <div>|</div>
      <div>Terms of Use</div>
      <div>|</div>
      <div>Do Not Share My Personal Information</div>
      <div>|</div>
      <div>CA Supply Chain Act</div>
      <div>|</div>
      <div>Cookie Preferences</div>
    `;

  document.querySelector('.js-copy-right')
    .innerHTML = '© 2023 Starbucks Coffee Company. All rights reserved.';
}