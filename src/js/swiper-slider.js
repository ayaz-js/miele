import Swiper, {
    Navigation,
    Pagination,
} from 'swiper';

var swiper = new Swiper(".header__swiper", {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});