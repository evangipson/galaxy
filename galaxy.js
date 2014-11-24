//menu
$(function(){
	// detect window size
	var windowsize = $(window).width();
	// get that shit on resize as well.
	$(window).resize(function() {
	  windowsize = $(window).width();
	});
	// what size are we?  set header accordingly
	if (windowsize < 800) {
		$('#header').data('size','small');
		$('#header').addClass('shadow-1');
		$('#header').addClass('abs');
		$('.main').css('padding-top','80px');
		$('#header').stop().animate({
			height:'100px'
		},0);
		$('#header').find('h2').stop().animate({
			fontSize: '1.5em',
			paddingTop: '30px'
		},0);
		$( "#title" ).replaceWith( "<h2 id='title'>GALAXY</h2>" );
	}
	// we are BIGGER than 800 pixies
	else {
		// now if ya scrolly i got somethin
		// for ya.
		$(window).scroll(function(){
			// THEN we'll worry about scrollies
			if($(document).scrollTop() > 120) {
				if($('#header').data('size') == 'big')
				{
					$('#header').data('size','small');
					$('#header').addClass('shadow-1');
					$('#header').addClass('abs');
					$('.main').css('padding-top','80px');
					$('#header').stop().animate({
						height:'100px'
					},0);
					$( "#title" ).replaceWith( "<h2 id='title'><div id='altMenu'><i class='fa fa-angle-right'></i></div> GALAXY</h2>" );
					$('#header').find('h2').stop().animate({
						fontSize: '1.5em',
						paddingTop: '30px'
					},0);
					
				}
			}
			else {
				// only make it big if we are
				// big enough horizontally to support that!
				if(windowsize>800) {
					if($('#header').data('size') == 'small')
					{
						$('#header').data('size','big');
						$('#header').removeClass('shadow-1');
						$('#header').removeClass('abs');
						$('.main').css('padding-top','0px');
						$('#header').stop().animate({
							height:'300px'
						},0);
						$('#header').find('h2').stop().animate({
								fontSize: '3em',
								paddingTop: '120px'
						},0);
						$( "#title" ).replaceWith( "<h2 id='title'>GALAXY</h2>" );
					}  
				}
			}
		});
	}
	// alternate menu
	$("#header").on('click', '#altMenu', function() {
		console.log('recieved the altMenu click event!');
		// replace the h2 tag!
		if ($(document).scrollTop() > 120) {
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 style='padding-top:30px;font-size:1.5em' id='title'><i id='backMenu' class='fa fa-angle-left'></i> <ul style='font-size:1.5em;'><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li></ul></h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
			$(this).css("padding-top","0px");
		}
		else {
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 id='title'><i id='backMenu' class='fa fa-angle-left'></i> <ul><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li></ul></h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
			$(this).css("padding-top","120px");
		}
	});
	// alternate menu
	$("#menu").click(function() {
		// replace the h2 tag!
		// big font
		console.log('recieved the menu click event!');
		if($("#title").text()=="GALAXY") {
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 id='title'><ul style='top:0'><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li><li><i class='fa fa-arrow-circle-up'></i></li></ul></h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
		}
		else {
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 id='title'>GALAXY</h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
		}
	});
	// back from alternate menu
	$("#header").on('click', '#backMenu', function() {
		// replace the h2 tag!
		if ($(document).scrollTop() > 120) {
			// small font
			console.log('recieved the backMenu click event, and the scroll is more than 120px!');
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 style='padding-top:30px;font-size:1.5em' id='title'><div id='altMenu'><i class='fa fa-angle-right'></i></div> GALAXY</h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
			$(this).css("padding-top","0px");
		}
		else {
			// big font
			console.log('recieved the backMenu click event, and your scroll is near the top!');
			$('#title').fadeOut("fast", function(){
				var div = $("<h2 id='title'>GALAXY</h2>").hide();
				$(this).replaceWith(div);
				$('#title').fadeIn("fast");
			});
		}
	});
	// hover shadows
	$( ".data" ).hover(function() {
		// only add a shadow for hover
		// if the card ISN'T showing.
		if($("#card").css("display") == "none" ) {
			$(this).addClass('shadow-3');
		}
	}, function () {
		$(this).removeClass('shadow-3');
	});
	// to show a card
	$( ".data" ).click(function() {
		// make sure to pull the shadow off of it
		// if there is one.
		$(this).removeClass('shadow-3');
		// make the card show up
		$("#card").fadeIn("fast", function() {
			$("#close").show("fast", function() {
				$( "#close" ).click( function() { 
					$("#card").fadeOut("fast");
				});
			});
		});
		// to prevent the page from scrolling
		// to top - we're stopping the default
		// browser behavior.
		return false;
	});
	var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
	//Function to convert hex format to a rgb color
	function rgb2hex(rgb) {
		if(rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
		else if(rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/)) {
			rgb = rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/);
			return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
	}
	function hex(x) {
		return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
	}
	// color array
	var colors = Array("#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#9E9E9E","#333333","#111111");
	
	// check colorblock
	$('.colorblock').click(function() {			
		// jquery pulls in color via RGB
		var primaryColor = $("#header").css("background-color");
		// convert to hex
		primaryColor = rgb2hex(primaryColor);
		// we need a new color
		var newColor = $(this).css("background-color");
		console.log('old color was '+primaryColor+' , new color is '+newColor);
		$('*').each(function() {
			console.log('checked an element!');
			if(rgb2hex($(this).css("background-color")) == primaryColor) {
				// do whatever you need to those elements here
				$(this).css("background-color",newColor);
			}
			if(rgb2hex($(this).css("color")) == primaryColor) {
				// do whatever you need to those elements here
				$(this).css("color",newColor);
			}
			if(rgb2hex($(this).css("background")) == primaryColor) {
				// do whatever you need to those elements here
				$(this).css("background",newColor);
			}
		});
		// gotta reset the colorblock array now
		// gah, jquery $.each is so silly! :-D
		var theVar=0;
		$('.colorblock').each(function() {
			$(this).css("background-color",colors[theVar]);
			theVar+=1;
		});
	});
	
	// hover
	/*$('#close').hover(function () {
		$(this).addClass('shadow-5');
	}, function () {
		$(this).removeClass('shadow-5');
	});/*
	/*if($("#card").is(":visible") ) {
			 create: function(event, ui) {
			  $("body").css({ overflow: 'hidden' })
			 },
			 beforeClose: function(event, ui) {
			  $("body").css({ overflow: 'inherit' })
			 }
		});
	}*/
});