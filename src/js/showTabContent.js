import {
    swiperButton,
    featuresContent,
    featuresTabsList,
    featuresTabsItem,
    featuresTabsContent
} from "./constants";

import hideTabContent from "./hideTabContent";

function showTabContent(i, tabContent, tabs) {
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('features__tab-item--active');
}

featuresTabsList.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('features__tab-item')) {
        featuresTabsItem.forEach((item, i) => {
            if (target == item) {
                hideTabContent(featuresTabsContent, featuresTabsItem);
                showTabContent(i, featuresTabsContent, featuresTabsItem);
            }
        });
    }
});

swiperButton.forEach((button, i) => {
    button.addEventListener('click', () => {
        hideTabContent(featuresTabsContent, featuresTabsItem)
        showTabContent(i, featuresTabsContent, featuresTabsItem)
        featuresContent.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
})

hideTabContent(featuresTabsContent, featuresTabsItem)
showTabContent(0, featuresTabsContent, featuresTabsItem)