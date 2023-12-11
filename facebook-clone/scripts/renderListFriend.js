import listFriend from "../data/listFriend.js";
import createMoreInfo from "./moreInfo.js";

export default function renderListFriend() {
  let htmlGridFriends = '';

  listFriend.forEach((friend) => {
    htmlGridFriends += `
      <div class="js-friend friend" data-id="${friend.id}">
        <img src="${friend.avatar}">
        <span>${friend.name}</span>
      </div>
    `;
  });

  document.querySelector('.js-grid-friends').innerHTML = htmlGridFriends;

  document.querySelectorAll('.js-friend')
    .forEach((section) => {
      section.appendChild(createMoreInfo(section.dataset.id));
    });
}