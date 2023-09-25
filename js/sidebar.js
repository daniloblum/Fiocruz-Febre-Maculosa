// DESKTOP

// Ajustar a altura da página quando for menor que a sidebar

// $(document).ready( function () {

(function () {
	let sidebarHeight = document.getElementsByClassName('sidebar');
	let contentHeight = document.getElementsByClassName('content');
	let headerHeight = document.getElementsByTagName('header');
	let footerHeight = document.getElementsByTagName('footer');
	let sectionsToDiscount = headerHeight[0].offsetHeight + footerHeight[0].offsetHeight;
	// const sidebarHeight = $(".sidebar").height()
	// const contentHeight = $(".content").height()
	// const sectionsToDiscount = ($(".header").height() + 2 * $("footer").height())

	// console.log(sidebarHeight[0].offsetHeight)
	// console.log(contentHeight[0].offsetHeight)
	// console.log(sectionsToDiscount)

	if (sidebarHeight[0].offsetHeight > contentHeight[0].offsetHeight) {
		//

		let pageContent = document.getElementById('page-content');
		pageContent.style.minHeight = sidebarHeight[0].offsetHeight - sectionsToDiscount + 'px';
		//($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
	}
})();

// MOBILE

var sidebarBtn = document.getElementByID('sidebar-toggle');
var content = $('.content');
var sidebarMobile = $('.sidebar');
var btn = $('.btn');

function touchControl(event, obj) {
	if (event == true) {
		obj.style.touchAction = 'auto';
	}
}

sidebarBtn.on('click', function () {
	if (sidebarMobile.hasClass('sidebar--open')) {
		// closing
		sidebarMobile.removeClass('sidebar--open');
		sidebarMobile.addClass('sidebar--close');

		sidebarBtn.removeClass('sidebar-toggle--open');
		sidebarBtn.addClass('sidebar-toggle--close');
		// sidebarBtn.css('background-color', '#3c7d1b');

		btn.toggleClass('active');
		btn.toggleClass('not-active');

		content.removeClass('touch-disable');
		content.addClass('touch-enable');
	} else {
		// opening
		sidebarMobile.removeClass('sidebar--close');
		sidebarMobile.addClass('sidebar--open');

		sidebarBtn.removeClass('sidebar-toggle--close');
		sidebarBtn.addClass('sidebar-toggle--open');
		// sidebarBtn.css('background-color', '#917434');

		btn.toggleClass('active');
		btn.toggleClass('not-active');

		content.removeClass('touch-enable');
		content.addClass('touch-disable');
	}
});

// if ($(window).width() < 768) {
// }
