import renderMenuHeader from "./shared/menuHeader.js";
import renderMenuFooter from "./shared/menuFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";
import renderMain from "./shared/mainPreFavo.js";
import favoritesContent from "../../data/menu/favorites.js";

renderMenuHeader();
getCurrentPageHeader('header', 'Favorites', 'header');
renderMain(favoritesContent);
renderMenuFooter();