// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

window.addEventListener('scroll', function(){
	headerFade();

});

function headerFade(){
	var header = $('header')
	var logo = $('.logo')
	var offSet = $(document).scrollTop(), opacity = 0;
	var scrollDist = $(document).scrollTop()
	var negScrollDist = scrollDist*-1;

	if(offSet >= $(window).height()){
		alpha = 1;
	}else if(offSet < $(window).height()){
		alpha = offSet / $(window).height();
	}

	header.css('box-shadow', '0px 2px 2px rgba(100, 100, 100, '+alpha+')');
	//header.css('opacity',alpha);
};










