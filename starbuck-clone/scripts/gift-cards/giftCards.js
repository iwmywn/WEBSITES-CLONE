import renderHeader from "../shared/header.js";
import renderTopFooter from "../shared/topFooter.js";
import renderBottomFooter from "../shared/bottomFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";
import renderPrimaryContent from "./primaryContent.js";

renderHeader();
getCurrentPageHeader('left-section', 'Gift cards', 'page');
renderPrimaryContent();
renderTopFooter();
renderBottomFooter();