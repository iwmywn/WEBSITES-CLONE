import symbols from "./symbols.js";

const profile = {
  id: "me",
  avatar: "/facebook-pics/avatar.png",
  name: "Hoàng Anh Tuấn",
  education: [
    "Studies at",
    "UEF - Đại học Kinh tế Tài chính TP.HCM"
  ],
  address: [
    "Lives in",
    "Ho Chi Minh City, Vietnam"
  ],
  button: {
    "first-button": [
      "+",
      "Add to story"
    ],
    "second-button": "Edit profile"
  },
};

const htmlProfile = `
<div class="top-more-info">
  <div class="pro-pic">
    <img src="${profile.avatar}" alt="avatar">
  </div>
  <div class="account-info">
    <div>
      <span>${profile.name}</span>
    </div>
    <div>
      <img src="${symbols.education}" alt="symbols">
      <p>${profile.education[0]}
        <span>${profile.education[1]}</span>
      </p>
    </div>
    <div>
      <img src="${symbols.home}" alt="symbols">
      <p>${profile.address[0]}
        <span>${profile.address[1]}</span>
      </p>
    </div>
  </div>
</div>
<div class="bottom-more-info">
  <div>
    <p>${profile.button["first-button"][0]}</p>
    <span>${profile.button["first-button"][1]}</span>
  </div>
  <div>
    <img src="${symbols.pen}" alt="symbols">
    <span>${profile.button["second-button"]}</span>
  </div>
  <div>
    <img src="${symbols.more}" alt="symbols">
  </div>
</div>
`;

export { profile, htmlProfile };