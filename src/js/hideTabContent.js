export default function hideTabContent(tabContent, tabs) {
    tabContent.forEach(item => {
        item.style.display = 'none';
    });

    tabs.forEach(item => {
        item.classList.remove('features__tab-item--active');
    });
}