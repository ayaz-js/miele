import clickTabs from "./clickTabs";
import hideTabContent from "./hideTabContent";
import showTabContent from "./showTabContent";

import {
    categoriesTabsContainer,
    categoriesTabsItem,
    categoriesTabClass,
    categoriesTabActive,
    productsContainer
} from "./constants";

clickTabs(categoriesTabsContainer, categoriesTabsItem, categoriesTabClass, productsContainer, categoriesTabActive)
hideTabContent(productsContainer, categoriesTabsItem, categoriesTabActive)
showTabContent(0, productsContainer, categoriesTabsItem, categoriesTabActive)