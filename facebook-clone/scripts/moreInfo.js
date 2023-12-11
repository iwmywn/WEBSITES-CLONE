import listFriend from "../data/listFriend.js";
import templateInfo from "./templateInfo.js";
import profile from "../data/profile.js";

export default function createMoreInfo(id) {
  let infoSection;
  const info = document.createElement('div');
  const classButton = ["blue", "gray"];

  if (id === profile.id)
    infoSection = profile;
  else {
    classButton.reverse();
    for (const friend of listFriend) {
      if (friend.id === id) {
        infoSection = friend;
        break;
      }
    }
  }

  let size = [48, 0, 96];
  if (infoSection.story === "yes") {
    size = [40, 8, 80];
  }
  
  info.id = 'more-info';
  info.innerHTML = `
    <div class="top">
      <div class="avatar">
        <svg style="width:9.6rem;height:9.6rem;border-radius:999rem">
          <circle cx="48" cy="48" r="46" fill="transparent" stroke="var(--accent)" stroke-width="4"></circle>
          <defs>
            <clipPath id="${id}">
              <circle cx="48" cy="48" r="${size[0]}" />
            </clipPath>
          </defs>
          <image x="${size[1]}" y="${size[1]}"
            href="${infoSection.avatar}"
            width="${size[2]}" height="${size[2]}" clip-path="url(#${id})"></image>
        </svg>
      </div>
      <div class="info">
        <a href="#"><h2>${infoSection.name}</h2></a>
        ${templateInfo(infoSection.info)}
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__option--${classButton[0]}">
        <img style="width:1.6rem;height:1.6rem;filter:var(--filter-primary-icon)" src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/c9BbXR9AzI1.png" alt="">
        Friends
      </div>
      <div class="bottom__option--${classButton[1]}">
        <img style="width:1.6rem;height:1.6rem;filter:var(--filter-invert-100)" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1z-5F6qDswz.png" alt="">
        Message
      </div>
      <button class="bottom__option">
        <img src="svg/3dots.svg" alt="3dots-icon">
      </button>
    </div>
  `;

  return info;
}