//parallax


(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	
	if(wScroll > 1000){
		concole.log('sip');
	}
})


//styling the text Judul
const nama = document.querySelector('#nama');
const huruf = [...nama.textContent].map ( (h) => {
	return `<span>${h}</span>`
	}).join('');

nama.innerHTML = huruf;
