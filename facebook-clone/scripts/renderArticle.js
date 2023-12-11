import listArticle from "../data/listArticle.js";
import profile from "../data/profile.js";

export default function renderArticle() {
  let htmlArticle = '';
  
  listArticle.forEach((article) => {
  let htmlCap = '';
  for (const content of article["ori-cap"]) {
    htmlCap += `<span>${content}</span>`;
  }
    htmlArticle += `
      <div class="article">
        <div class="article__date">
          <div class="article-info">
            <div class="article-info__avatar">
              <img src="${profile.avatar}" alt="avatar">
            </div>
            <div class="article-info__name-datetime">
              <div class="name">${profile.name}</div>
              <div class="datetime">
                <div class="datetime__date">${article.date}</div>
                &#183;
                <div class="datetime__view-mode">
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png" alt="Public" height="12" width="12">
                </div>
              </div>
            </div>
          </div>
          <div class="option">
            <img src="svg/3dots.svg" alt="3dots">
          </div>
        </div>
        <div class="article__picture">
          <div class="picture">
            <img src="${article["ori-pic"]}" alt="">
          </div>
          <div class="article-info">
            <div class="article-info__avatar">
              <img style="width: 32px; height: 32px" src="${article["ori-avatar"]}" alt="avatar">
            </div>
            <div class="article-info__name-datetime">
              <div class="name">${article["ori-name"]}</div>
              <div class="datetime">
                <div class="datetime__date">${article["ori-date"]}</div>
                &#183;
                <div class="datetime__view-mode">
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png" alt="Public" height="12" width="12">
                </div>
              </div>
            </div>
          </div>
          <div class="cap">
            ${htmlCap}
          </div>
        </div>
        <div class="article__reaction">
          <div class="amount">
            <img height="18" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" width="18">
            <span>${article["amount-react"]}</span>
          </div>
          <span>${article.share}</span>
        </div>
        <div class="article__interact">
          <div>
            <i style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png');background-position:0 -796px;background-size:26px 1522px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
            Like
          </div>
          <div>
            <i style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png');background-position:0 -576px;background-size:26px 1522px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
            Comment
          </div>
          <div>
            <i style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png');background-position:0 -950px;background-size:26px 1522px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
            Share
          </div>
        </div>
        <div class="article__limit-cmt">
          <div>
            <i style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/AtAZExa3o5I.png');background-position:0 -140px;background-size:26px 582px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
          </div>
          You're allowing profiles and Pages you mention to comment on this post.
        </div>
        <div class="article__write-cmt">
          <div class="avatar">
            <img src="${profile.avatar}" alt="avatar">
            <img src="svg/down-thin.svg" alt="down-thin">
          </div>
          <div class="type">
            Write a comment...
            <div class="options">
              <div class="option">
                <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png&quot;); background-position: 0px -1152px; background-size: 26px 1522px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
              </div>
              <div class="option">
                <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png&quot;); background-position: 0px -1260px; background-size: 26px 1522px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
              </div>
              <div class="option">
                <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png&quot;); background-position: 0px -1188px; background-size: 26px 1522px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
              </div>
              <div class="option">
                <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png&quot;); background-position: 0px -1296px; background-size: 26px 1522px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
              </div>
              <div class="option">
                <i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/DSZjPNtc4_p.png&quot;); background-position: 0px -1404px; background-size: 26px 1522px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById('article').innerHTML = htmlArticle;
}