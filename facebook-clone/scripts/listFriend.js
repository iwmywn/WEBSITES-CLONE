import { listFriend } from "../data/friends.js";
import getMoreInfo from "../utils/getMoreInfo.js";

export default function renderListFriend() {
  let htmlListFriend = '';

  listFriend.forEach((friend) => {
    htmlListFriend += `
      <div class="js-account" data-row="${friend.row}">
        <img src="${friend.avatar}" alt="avatar">
        <span>${friend.name}</span>
        <div class="more-info">${getMoreInfo(friend)}</div>
      </div>
    `;
  });

  const listFriendElement = document.querySelector('.js-list-friend');
  listFriendElement.innerHTML = htmlListFriend;

  for (let i = 0; i < 3; i++) {
    const friendRowElement = document.createElement('div');
    friendRowElement.classList.add('_friends');
    document.querySelectorAll('.js-account')
      .forEach((section) => {
        const { row } = section.dataset;

        if (row === `${i}`)
          friendRowElement.appendChild(section);
        else
          return;
      });

    document.querySelector('.js-friends').appendChild(friendRowElement);
  }

  listFriendElement.innerHTML = '';
}