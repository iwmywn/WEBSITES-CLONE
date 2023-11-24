import renderHeader from "../shared/header.js";
import renderTopFooter from "../shared/topFooter.js";
import renderBottomFooter from "../shared/bottomFooter.js";
import getCurrentPageHeader from "../utils/currentPage.js";

renderHeader();
getCurrentPageHeader('left-section', 'Rewards', 'page');
renderTopFooter();
renderBottomFooter();