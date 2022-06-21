export default function showTabContent(i, tabContent, tabs, tabsActiveClass) {
    tabContent[i].style.display = 'block';
    tabs[i].classList.add(tabsActiveClass);
}