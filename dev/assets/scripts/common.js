window.onload = () => {
//mobileNav();
$(".testi").slick({
	adaptiveHeight: true,
});
$('.header__scroll-button, .header-menu__link').click(function(){
			var link = $(this).attr('href');
      $('html, body').animate({scrollTop:$(link).position().top}, 1000);
});
drawsvg();
};

//Mobile menu function
function mobileNav() {
	var menu 			= document.querySelector('.header__menu'),
		mobilemenu 		= document.querySelector('.mobile-nav__menu'),
		JSinit 			= document.querySelector('.js_mobile-nav'),
		burger 			= document.querySelectorAll('.burger'),
		activeClass 	= 'open';
	function toggle() {
		JSinit.classList.toggle(activeClass);
	}
	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;

	/* for (var i = 0; i < burger.length; i++) {
			burger[i].addEventListener('click', toggle);
		} */
	for (var i = 0; i < burger.length; i++) {
		burger[i].onclick = toggle;
		};
}
function drawsvg() {
	var icons = document.querySelectorAll('.work__icon');
	console.log(icons);
	icons.forEach(function(icon, i){
		setTimeout( () => {	
			var myvivus = new Vivus(icon, {
				type: 'delayed',
				duration: 100,
				animTimingFunction: Vivus.EASE
			}, function doDone(obj) {
    			obj.el.classList.add('finished');
				});
		},600*i);
	});
}
