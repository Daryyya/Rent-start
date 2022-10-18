const filterItems = document.querySelectorAll('.filters__item')
const cards = document.querySelectorAll('.product')

export default () => {
	if (filterItems) {
		const filter = (category, products) => {
			products.forEach((product) => {
				const isItemFiltered = !product.classList.contains(category)
				const isShowAll = category.toLowerCase() === 'all'
				if (isItemFiltered && !isShowAll) {
					product.classList.add('hidden')
				} else {
					product.classList.remove('hidden')
				}
			})
		}

		filterItems.forEach((item) => {
			item.addEventListener('click', () => {
				filterItems.forEach((currentItem) => {
					currentItem.classList.remove('active-filter')
				})
				item.classList.add('active-filter')
				const currentCategory = item.dataset.filter
				filter(currentCategory, cards)
			})
		})
	}
}
