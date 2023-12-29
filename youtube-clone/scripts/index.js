import renderVideo from "./renderVideo.js";

renderVideo();

const searchContainerEle = document.querySelector('.js-search-bar');
const searchBarEle = document.querySelector('.js-search-bar > input');

searchBarEle.addEventListener('focus', () => {
  searchContainerEle.classList.add('focus');
});

searchBarEle.addEventListener('blur', () => {
  searchContainerEle.classList.remove('focus');
});