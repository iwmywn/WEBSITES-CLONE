import renderMenuHeader from "./shared/menuHeader.js";
import renderMenuFooter from "./shared/menuFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";

renderMenuHeader();
getCurrentPageHeader('header', 'Menu', 'header');
renderMenuFooter();