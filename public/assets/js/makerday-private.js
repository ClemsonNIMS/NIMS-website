var makerdayContainer,
	demoListClone,
	demoListHeight;

window.addEventListener('load', function () {
	makerdayContainer = document.querySelector('.makerday-container');
	demoList = document.querySelector('.demo-list');
	demoListHeight = demoList.clientHeight;

	makerdayContainer.appendChild(demoList.cloneNode(true));
	scroll();
});

function scroll() {
	var start,
		end,
		delay;

	start = performance.now();

	makerdayContainer.scrollTop += 2;

	if (makerdayContainer.scrollTop >= demoListHeight) {
		makerdayContainer.scrollTop -= demoListHeight;

		makerdayContainer.removeChild(makerdayContainer.firstElementChild);
		makerdayContainer.appendChild(demoList.cloneNode(true));
	}

	end = performance.now();
	delay = Math.max(0, 60 - (end - start));
	setTimeout(scroll, delay);
}
