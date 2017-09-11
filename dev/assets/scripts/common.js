window.onload = function() {
//mobileNav();
$(".testi").slick({
	adaptiveHeight: true,
});
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
