import clickTabs from "./clickTabs";
import hideTabContent from "./hideTabContent";
import showTabContent from "./showTabContent";

import {
    swiperButton,
    featuresContent,
    featuresTabsList,
    featuresTabsItem,
    featuresTabClass,
    featuresTabsActive,
    featuresTabsContent
} from "./constants";

swiperButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        hideTabContent(featuresTabsContent, featuresTabsItem, featuresTabsActive)
        showTabContent(i, featuresTabsContent, featuresTabsItem, featuresTabsActive)
        featuresContent.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
})

clickTabs(featuresTabsList, featuresTabsItem, featuresTabClass, featuresTabsContent, featuresTabsActive)
hideTabContent(featuresTabsContent, featuresTabsItem, featuresTabsActive)
showTabContent(0, featuresTabsContent, featuresTabsItem, featuresTabsActive)