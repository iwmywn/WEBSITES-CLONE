import articleContent from "../data/articleContent.js";
import { profile, htmlProfile } from "../data/profile.js";
import { oriAuthor, htmlOriAuthor } from "../data/oriAuthor.js";
import symbols from "../data/symbols.js";

export default function renderProfilePage() {
  let htmlContent = '';
  articleContent.forEach((articleInfo) => {
    let htmlCap = '';
    articleInfo.cap.forEach((content) => {
      htmlCap += `<span>${content}</span>`;
    });
    htmlContent += `
      <article>
        <div class="author">
          <div class="left-author">
            <div>
              <img src="${profile.avatar}" alt="avatar">
              <div class="js-more-info-${profile.id} more-info"></div>
            </div>
            <div class="name-datetime">
              <div>
                <span>${profile.name}</span>
                <div class="js-more-info-${profile.id} more-info"></div>
              </div>
              <div class="datetime">
                <div>
                  <span>${articleInfo.date[0]}</span>
                  <div class="datetime-details">
                    <span>${articleInfo.date[1]}</span>
                  </div>
                </div>
                <div>
                  <span>&#183;</span>
                </div>
                <div>
                  <img src="${symbols.earth}" alt="symbols">
                  <div class="display-mode">
                    <span>${articleInfo.mode}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-author">
            <img src="${symbols.more}" alt="symbols">
          </div>
        </div>
        <div class="pic-cap-post">
          <div class="pic-post">
            <img src="${articleInfo["pic-post"][0]}" alt="pic-post">
          </div>
          <div class="cap-post">
            <div class="ori-author">
              <div>
                <img src="${oriAuthor["avatar"]}" alt="ctcsn-avatar">
                <div class="js-more-info-${oriAuthor.id} more-info"></div>
              </div>
              <div class="name-datetime-ori-author">
                <div>
                  <span>${oriAuthor.name}</span>
                  <div class="js-more-info-${oriAuthor.id} more-info"></div>
                </div>
                <div class="datetime">
                  <div>
                    <span>${articleInfo["ori-date"][0]}</span>
                    <div class="datetime-details">
                      <span>${articleInfo["ori-date"][1]}</span>
                    </div>
                  </div>
                  <div>
                    <span>&#183;</span>
                  </div>
                  <div>
                    <img src="${symbols.earth}" alt="symbols">
                    <div class="display-mode">
                      <span>${articleInfo["ori-mode"]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cap">
              ${htmlCap}
            </div>
          </div>
        </div>
        <div class="num-interact">
          <img src="${symbols.heart}" alt="symbols">
          <span>${articleInfo["num-interact"]}</span>
        </div>
        <div class="interact">
          <div>
            <img src="/facebook-pics/like.png" alt="like">
            <span>Like</span>
          </div>
          <div>
            <img src="/facebook-pics/comment.png" alt="comment">
            <span>Comment</span>
          </div>
          <div>
            <img src="/facebook-pics/share.png" alt="share">
            <span>Share</span>
          </div>
        </div>
        <div class="limit-cmt">
          <div>
            <img src="${symbols.message}" alt="symbols">
          </div>
          <div>
            <span>${articleInfo["limit-cmt"]}</span>
          </div>
        </div>
      </article>
    `;
  });

  document.querySelector('.js-article-container')
    .innerHTML = htmlContent;

  document.querySelectorAll(`.js-more-info-${profile.id}`)
    .forEach((section) => {
      section.innerHTML = htmlProfile;
    });

  document.querySelectorAll(`.js-more-info-${oriAuthor.id}`)
    .forEach((section) => {
      section.innerHTML = htmlOriAuthor;
    });
}