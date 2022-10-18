export function isWebp() {
	function testWebp(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
	}

	testWebp(function (support) {
		let className = support === true ? 'webp' : 'no-webp'
		document.documentElement.classList.add(className)
	})
}

export const YandexMaps = () => {
	const mapElem = document.querySelector('.map')

	if (mapElem) {
		ymaps = window.ymaps

		function init() {
			let map = new ymaps.Map('map', {
				center: [61.06771306262594, 42.10699299999997],
				zoom: 17
			})
		}

		ymaps.ready(init)
	}
}
