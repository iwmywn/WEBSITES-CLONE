import renderMenuHeader from "./shared/menuHeader.js";
import renderMenuFooter from "./shared/menuFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";
import renderMain from "./shared/mainPreFavo.js";
import previousContent from "../../data/menu/previous.js";

renderMenuHeader();
getCurrentPageHeader('header', 'Previous', 'header');
renderMain(previousContent);
renderMenuFooter();