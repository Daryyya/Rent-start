const select = document.querySelector('.select')
const selectInfo = document.querySelector('.select-info')

export default () => {
	if (select) {
		select.addEventListener('click', (e) => {
			const infoElements = selectInfo.querySelectorAll('.select-info__item')
			const arrow = select.querySelector('.dynamic-arrow')
			selectInfo.classList.toggle('open')
			arrow.classList.toggle('rotated')

			infoElements.forEach((item) => {
				item.addEventListener('click', (e) => {
					const infoText = e.target.textContent
					const dynamicText = select.querySelector('.dynamic-text')
					infoElements.forEach((currentItem) => {
						currentItem.classList.remove('active')
					})
					dynamicText.textContent = infoText
					item.classList.add('active')
					selectInfo.classList.remove('open')
					arrow.classList.remove('rotated')
				})
			})
		})
	}
}
