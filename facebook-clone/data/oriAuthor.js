import symbols from "./symbols.js";

const oriAuthor = {
  id: "page",
  "avatar": "/facebook-pics/ctcsn-avatar.jpg",
  "avatar-se": "/facebook-pics/ctcsn-avatar-2.jpg",
  "name": "Chúng Ta Của Sau Này",
  "first-line": [
    "Page",
    "Media/news company"
  ],
  "second-line": "Trang giải trí, tin tức và tình yêu cho Gen Z LH quảng cáo: 0973115790 | kscgroup.sales@gmail.com",
  "third-line": "097 311 57 90",
  "fourth-line": "3.8M Followers",
  button: {
    "first-button": "Message",
    "second-button": "Liked"
  }
};

const htmlOriAuthor = `
<div class="top-more-info">
  <div class="pro-pic">
    <img src="${oriAuthor["avatar-se"]}" alt="ctcsn-avatar">
  </div>
  <div class="account-info">
    <div>
      <span>${oriAuthor["name"]}</span>
    </div>
    <div>
      <img src="${symbols.about}" alt="symbols">
      <p>
        <span>${oriAuthor["first-line"][0]}</span> &#183;
        ${oriAuthor["first-line"][1]}
      </p>
    </div>
    <div>
      <img src="${symbols.friend}" alt="symbols">
      <p>
        ${oriAuthor["second-line"]}
      </p>
    </div>
    <div>
      <img src="${symbols.phone}" alt="symbols">
      <p>
        ${oriAuthor["third-line"]}
      </p>
    </div>
    <div>
      <img src="${symbols.tick}" alt="symbols">
      <span>${oriAuthor["fourth-line"]}</span>
    </div>
  </div>
</div>
<div class="bottom-more-info">
  <div>
    <img src="${symbols["message-2"]}" alt="symbols">
    <span>${oriAuthor.button["first-button"]}</span>
  </div>
  <div>
    <img src="${symbols.liked}" alt="symbols">
    <span>${oriAuthor.button["second-button"]}</span>
  </div>
  <div>
    <img src="${symbols.more}" alt="symbols">
  </div>
</div>
`;

export { oriAuthor, htmlOriAuthor };