import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper';

var swiper = new Swiper(".header__swiper", {
    modules: [Navigation, Pagination, Autoplay],
    pagination: {
        el: ".swiper-pagination",
    },
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});