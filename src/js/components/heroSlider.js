import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
const heroSliderElement = document.querySelector('.hero__slider')

const heroSlider = new Swiper(heroSliderElement, {
	modules: [Navigation, Pagination, Autoplay, EffectFade],
	loop: true,
	effect: 'fade',
	autoplay: {
		delay: 3500,
		disableOnInteraction: false
	},

	slidesPerView: 1,
	navigation: {
		nextEl: '.arrow-next',
		prevEl: '.arrow-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})

export default heroSlider
