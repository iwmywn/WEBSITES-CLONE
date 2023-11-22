import renderMenuHeader from "./shared/menuHeader.js";
import renderMenuFooter from "./shared/menuFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";
import renderPrimaryMenu from "./primaryMenu.js";

renderMenuHeader();
getCurrentPageHeader('header', 'Menu', 'header');
renderPrimaryMenu();
renderMenuFooter();