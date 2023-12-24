import video from "../data/video.js";

export default function renderVideo() {
  let htmlVideo = "";
  const randomVideo = video.slice();

  for (let i = 0; i < randomVideo.length; i++) {
    const j = Math.floor(Math.random() * i);
    [randomVideo[i], randomVideo[j]] = [randomVideo[j], randomVideo[i]];
  }

  randomVideo.forEach((section) => {
    htmlVideo += `
      <div class="main__section">
        <a class="thumbnail" href="${section.videoUrl}">
          <img alt="" style="background-color: transparent;" src="${section.thumbnail}">
          <div class="thumbnail__time-status">${section.timeStatus}</div>
        </a>
        <div class="author">
          <a class="author__avatar" href="${section.channelUrl}">
            <img id="img" draggable="false" alt="" width="48" src="${section.profilePicture}">
          </a>
          <div class="author__content">
            <a class="author__content__title" href="${section.videoUrl}">${section.title}</a>
            <a class="author__content__name" href="${section.channelUrl}">
              <span>${section.channelName}</span>
            </a>
            <div class="author__content__view-postdate">
              <span>${section.views}</span>
              <span class="postdate">${section.postDate}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-main')
    .innerHTML = htmlVideo;
}