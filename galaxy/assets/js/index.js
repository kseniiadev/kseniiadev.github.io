$( document ).ready(function() {
	const trigger = $('.accordion__header')
	const accos = $('.accordion__item')
	const accosContent = $('.accordion__content')
	trigger.on('click', function(e) {
		const accoItem = $(this).closest('.accordion__item')
		const content = accoItem.find('.accordion__content')
		if(accoItem.hasClass('active')) {
			accoItem.removeClass('active')
			content.slideUp()
			return
		}
		accosContent.slideUp()
		accos.removeClass('active')
		accoItem.toggleClass('active')
		content.slideToggle()
	})
})