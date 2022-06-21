export default function hideTabContent(tabContent, tabs, tabsActiveClass) {

    tabContent.forEach(item => item.style.display = 'none');

    tabs.forEach(item => item.classList.remove(tabsActiveClass));
}