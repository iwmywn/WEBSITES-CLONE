import getSymbol from "./getSymbol.js";

export default function getMoreInfo(profile) {
  function getInfo(name) {
    let htmlInfo = '';

    for (let i = 0; i < profile[name].length; i++) {
      const content = profile[name][i];
      if (i % 2 === 0) {
        htmlInfo += content === ',' ? content : (' ' + content);
      } else
        htmlInfo += ` <span>${content}</span>`;
      // "Live in",0
      // "Mentor",1
      // "at",2
      // "ERAW CLUB",3
      // ",",4
      // "Quý Quân Nữ sinh khởi nghiệp 2022",5
      // "at",6
      // "SheFuture",7
      // "and",8
      // "Top 4 Young Innovation 2022",9
      // "at",10
      // "Cuộc Thi Khởi Nghiệp Đổi Mới Sáng Tạo"11
      // -Live in-Mentor-at-ERAW CLUB,-Quý Quân Nữ sinh khởi nghiệp 2022-at-SheFuture-...
    }

    return htmlInfo;
  }

  let diffSymbol = getSymbol(profile.symbols[2]);
  diffSymbol = diffSymbol === '+'
    ? `<p>${diffSymbol}</p>`
    : `<img src="${diffSymbol}" alt="symbols">`;

  return `
  <div class="top-more-info">
    <div class="pro-pic">
      <img src="${profile.avatar}" alt="avatar">
    </div>
    <div class="account-info">
      <div>
        <span>${profile.name}</span>
      </div>
      <div>
        <img src="${getSymbol(profile.symbols[0])}" alt="symbols">
        <p>${getInfo('first-line')}</p>
      </div>
      <div>
        <img src="${getSymbol(profile.symbols[1])}" alt="symbols">
        <p>${getInfo('second-line')}</p>
      </div>
    </div>
  </div>
  <div class="bottom-more-info">
    <div>
      ${diffSymbol}
      <span>${profile.button["first-button"]}</span>
    </div>
    <div>
      <img src="${getSymbol(profile.symbols[3])}" alt="symbols">
      <span>${profile.button["second-button"]}</span>
    </div>
    <div>
      <img src="/facebook-icons/more.svg" alt="more">
    </div>
  </div>
  `;
}