export default function renderMain(array) {
  let htmlMainContent = '';
  array.forEach((item) => {
    htmlMainContent += `
      <section>
        <div class="title">${item.title}</div>
        <img src="${item.image.src}" alt="${item.image.alt}">
        <div class="cap">${item.cap}</div>
        <div class="content">${item.content}</div>
        <div>
          <button>${item.button[0]}</button>
          <button>${item.button[1]}</button>
        </div>
      </section>
    `;
  });
  document.querySelector('.js-container')
    .innerHTML = htmlMainContent;
}