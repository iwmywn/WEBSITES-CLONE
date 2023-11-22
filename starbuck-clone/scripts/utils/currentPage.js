export default function getCurrentPageHeader(selector, namePage, name) {
  document.querySelectorAll(`.js-${selector}>a`)
    .forEach((page) => {
      if (page.innerHTML === namePage && !page.classList.contains(`current-${name}`))
        page.classList.add(`current-${name}`);
    })
}