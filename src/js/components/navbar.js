const menu = document.querySelector('.menu')
const menuBurger = document.querySelector('.menu__burger')

export default () => {
	if (menu) {
		menuBurger.addEventListener('click', () => {
			document.body.classList.toggle('lock-scroll')
			menu.classList.toggle('active')
			menuBurger.classList.toggle('active')
		})
	}
}
