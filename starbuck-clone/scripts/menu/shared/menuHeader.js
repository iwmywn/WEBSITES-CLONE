import renderHeader from "../../shared/header.js";
import getCurrentPageHeader from "../../utils/currentPage.js";

export default function renderMenuHeader() {
  renderHeader();
  getCurrentPageHeader('left-section', 'Menu', 'page');
  document.querySelector('.js-header')
    .innerHTML = `
      <a href="menu.html">Menu</a>
      <a href="featured.html">Featured</a>
      <a href="previous.html">Previous</a>
      <a href="favorites.html">Favorites</a>
    `;
}