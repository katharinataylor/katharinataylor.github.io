// Project gallery

var arrow1 = document.querySelector('.arrow-1');
var projDescription1 = document.getElementById('gallery-item-1');

arrow1.addEventListener('click', function() {

	if (arrow1.className !== 'clicked') {
		projDescription1.style.display = 'flex';
		arrow1.style.transform = 'rotate(-135deg)';
		arrow1.className = 'clicked';
	} else if (arrow1.className === 'clicked') {
		projDescription1.style.display = 'none';
		arrow1.style.transform = 'rotate(-315deg)';
		arrow1.className = 'unclicked';
	}
});

var arrow2 = document.querySelector('.arrow-2');
var projDescription2 = document.getElementById('gallery-item-2');

arrow2.addEventListener('click', function() {
	
	if (arrow2.className !== 'clicked') {
		projDescription2.style.display = 'flex';
		arrow2.style.transform = 'rotate(-135deg)';
		arrow2.className = 'clicked';
	} else if (arrow2.className === 'clicked') {
		projDescription2.style.display = 'none';
		arrow2.style.transform = 'rotate(-315deg)';
		arrow2.className = 'unclicked';
	}
});

var arrow3 = document.querySelector('.arrow-3');
var projDescription3 = document.getElementById('gallery-item-3');

arrow3.addEventListener('click', function() {
	
	if (arrow3.className !== 'clicked') {
		projDescription3.style.display = 'flex';
		arrow3.style.transform = 'rotate(-135deg)';
		arrow3.className = 'clicked';
	} else if (arrow3.className === 'clicked') {
		projDescription3.style.display = 'none';
		arrow3.style.transform = 'rotate(-315deg)';
		arrow3.className = 'unclicked';
	}
});

var arrow4 = document.querySelector('.arrow-4');
var projDescription4 = document.getElementById('gallery-item-4');

arrow4.addEventListener('click', function() {
	
	if (arrow4.className !== 'clicked') {
		projDescription4.style.display = 'flex';
		arrow4.style.transform = 'rotate(-135deg)';
		arrow4.className = 'clicked';
	} else if (arrow4.className === 'clicked') {
		projDescription4.style.display = 'none';
		arrow4.style.transform = 'rotate(-315deg)';
		arrow4.className = 'unclicked';
	}
});

var arrow5 = document.querySelector('.arrow-5');
var projDescription5 = document.getElementById('gallery-item-5');

arrow5.addEventListener('click', function() {
	
	if (arrow5.className !== 'clicked') {
		projDescription5.style.display = 'flex';
		arrow5.style.transform = 'rotate(-135deg)';
		arrow5.className = 'clicked';
	} else if (arrow5.className === 'clicked') {
		projDescription5.style.display = 'none';
		arrow5.style.transform = 'rotate(-315deg)';
		arrow5.className = 'unclicked';
	}
});

var arrow6 = document.querySelector('.arrow-6');
var projDescription6 = document.getElementById('gallery-item-6');

arrow6.addEventListener('click', function() {
	
	if (arrow6.className !== 'clicked') {
		projDescription6.style.display = 'flex';
		arrow6.style.transform = 'rotate(-135deg)';
		arrow6.className = 'clicked';
	} else if (arrow6.className === 'clicked') {
		projDescription6.style.display = 'none';
		arrow6.style.transform = 'rotate(-315deg)';
		arrow6.className = 'unclicked';
	}
});