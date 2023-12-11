import symbols from "./symbols.js";

export default function templateInfo(info) {
  let htmlInfo = '';
  for (const item in info) {
    let symbol;
    let htmlDetailInfo;
    
    if (item === "placeLived") {
      symbol = symbols.home;
      htmlDetailInfo = `Lives in <span>${info.placeLived}</span>`;
    } else if (item === "education") {
      symbol = symbols.education;
      htmlDetailInfo = `Studies at <span>${info.education}</span>`;
    } else if (item === "mutualFriends") {
      const amount = (Number)(info.mutualFriends.amount);
      const friends = info.mutualFriends.list;
      let htmlFriend = '';

      for (let i = 0; i < friends.length; i++) {
        if (i === 2)
          break;
        if (i === 0) {
          if (amount === 1) {
            htmlFriend += `${amount} mutual friend: `;
          }
          else if (amount === 2) {
            htmlFriend += `${amount} mutual friends: `;
          } else {
            htmlFriend += `${amount} mutual friends including `;
          }
        }
        if (i > 0) {
          htmlFriend += ' and ';
        }
        htmlFriend += `<span>${friends[i]}</span>`
      }
      symbol = symbols["mutual-friend"];
      htmlDetailInfo = htmlFriend;
    } else if (item === "work") {
      let htmlWork = '';
      const work = info.work;

      for (let i = 0; i < work.length; i++) {
        htmlWork += `<span>${work[i].position}</span> at <span>${work[i].company}</span>`;
        if (i === 0 && work.length > 1) {
          htmlWork += ', ';
        } else if (i > 0 && i < work.length - 1)
        htmlWork += ' and ';
      }
      symbol = symbols.work;
      htmlDetailInfo = htmlWork;
    } else if (item === "becameFriends") {
      const becameFriends = info.becameFriends;

      symbol = symbols["became-friends"];
      htmlDetailInfo = `
        Became friends with
        <span>${becameFriends[0]}</span> and
        <span>${becameFriends[1]}</span>
      `;
    }

    htmlInfo += `
      <div>
        <img style="width:2rem;height:2rem;" src="${symbol}" alt="">
        <div>${htmlDetailInfo}</div>
      </div>
    `;
  }

  return htmlInfo;
}