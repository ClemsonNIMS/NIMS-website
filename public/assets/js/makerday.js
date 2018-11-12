window.addEventListener('load', function () {
	var whosComing = document.querySelector('.whos-coming'),
		seeMoreLess = document.querySelector('.see-more-less');

	seeMoreLess.addEventListener('click', function () {
		if (seeMoreLess.innerText === 'See More') {
			whosComing.classList.toggle('more', true);
			seeMoreLess.innerText = 'See Less';
		} else {
			whosComing.classList.toggle('more', false);
			seeMoreLess.innerText = 'See More';
		}
	});
});
