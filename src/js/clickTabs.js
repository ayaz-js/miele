import closeCategories from "./closeCategories";
import hideTabContent from "./hideTabContent";
import showTabContent from "./showTabContent";

export default function clickTabs(tabList, tabsItems, tabClassContains, tabContent, tabsActiveClass) {
    tabList.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabClassContains)) {
            tabsItems.forEach((item, i) => {
                if (target == item) {
                    hideTabContent(tabContent, tabsItems, tabsActiveClass);
                    showTabContent(i, tabContent, tabsItems, tabsActiveClass);
                    closeCategories();
                }
            });
        }
    });
}