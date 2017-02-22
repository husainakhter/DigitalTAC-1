// JavaScript Document
 $(function(){
	 
	$("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
 // Instantiate the Bootstrap carousel
     $('.multi-item-carousel, .resCarousel, #office365Carousel0, #office365Carousel1, #office365Carousel2, #office365Carousel3, 	a	#planCarouselEnterprise').carousel({
	  interval: false
	}); 
 
	$('.multi-item-carousel, .resCarousel, #office365Carousel0, #office365Carousel1, #office365Carousel2, #office365Carousel3').carousel({
	  interval: false
	});

/* Added By Chandan */
	if($(window).width()>= 768){
		$('#office365Carousel').removeClass('slide carousel');
		$('#office365Carousel').find('.item').css('display', 'block').removeClass('item');
		$('#office365Carousel .carousel-control').remove();
	}
	//Initial styling of FAQ accordion
	$('#productFAQAccordion .panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
	);
	$('#productFAQAccordion .panel-heading a.collapsed').parent().parent().css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
	);
	//dynamic styling of FAQ accordion
	$('#productFAQAccordion .panel').on('show.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
		);
	});
	$('#productFAQAccordion .panel').on('hide.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
		);
	});
	/*chandan*/
	//Initial styling of FAQ accordion
	$('#planDetailsFAQAccordion .panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
	);
	$('#planDetailsFAQAccordion .panel-heading a.collapsed').parent().parent().css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
	);
	
	//dynamic styling of FAQ accordion
	$('#planDetailsFAQAccordion .panel').on('show.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
		);
	});
	$('#planDetailsFAQAccordion .panel').on('hide.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
		);
	});
	
/*chandan*/

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.


// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.

if($(window).width()>767){
	$('.multi-item-carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  if (next.next().length>0) {
		next.next().children(':first-child').clone().appendTo($(this));
	  } else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	  }
	});
}


// Navigation Slide In
	$('body').on('click','.menu-top-mob',function() { 
		$('.menutopMobi').html($('.main-menu-cont').html());
		//console.log($('nav').html());
		//$('nav').addClass('slide-in');
		$('html').css("overflow", "hidden");
		$('#overlay').show();
		return false;
	});

	// Navigation Slide Out
	
	
	$('body').on('click touchstart','#overlay',function(e) { 
		if($(e.target).attr('id') === 'overlay'){ 
			$('#overlay').hide();return false;
		}
			
		
	});
	/*
	$(document).on('click',function(event) { 
		if(!$(event.target).closest('#MainMenu').length &&
		   !$(event.target).is('#MainMenu')) {
			if($('#MainMenu').is(":visible")) {
			   $('#overlay').hide();
			}
		}        
	});
	*/
	$('body').on('click','.isCollapse',function(){
		if($(this).find('i.glyphicon').hasClass('glyphicon-menu-down')){
			$(this).find('i.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');	
		}else{
			$(this).find('i.glyphicon-menu-up').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');	
		}
	});
	
	$('body').on('click','a.loginPopOver',function(){ 
		$(this).parent('li').addClass('nav-class-top-v1');	
			$('.login-box-top').show();
	});
	
	$('body').on('click','.close-box',function(){ 
		$('a.loginPopOver').parent('li').removeClass('nav-class-top-v1');	
		$('.login-box-top').hide();
	});
	/*
	var $sidebar   = $("#floatMenu"), 
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 15;
	$window.scroll(function() {
		if ($window.scrollTop() > offset.top) {
			$sidebar.stop().animate({
				marginTop: $window.scrollTop() - offset.top + topPadding
			});
		} else {
			$sidebar.stop().animate({
				marginTop: 0
			});
		}
	});
	*/
	
	
	
	/*  Added By Ramya On 9th June 2016 */
	
	if($(window).width()< 768){
		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	}

	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);

		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#businessPlanTable" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');

		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	});
	var i = 0;
	$('#planCarouselEnterprise').on('slide.bs.carousel', function () {
		var msg = ['4' , '1-3'];
		if(i==2){
			i=0;
		}
		$('.Select_an_office_page').html(msg[i] + ' <span class="of">of</span> 4');
		i++;
	});
	//Initial styling of FAQ accordion
	$('#accordion .panel-heading').css('background', 
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
	);
	$('#accordion .panel-heading a.collapsed').parent().parent().css('background', 
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
	);
	//dynamic styling of FAQ accordion
	$('#accordion .panel').on('show.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 98% 50%'
		);
	});
	$('#accordion .panel').on('hide.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 98% 50%'
		);
	}); 
 
 
 
 if($(window).width()> 767){
		$('#office365Carousel0').removeClass('slide carousel');
		$('#office365Carousel0').find('.item').removeClass('item');
		$('#office365Carousel1 .carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel0 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel1').removeClass('slide carousel');
		$('#office365Carousel1').find('.item').removeClass('item');
		$('#office365Carousel1 .carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel1 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel2').removeClass('slide carousel');
		$('#office365Carousel2').find('.item').removeClass('item');
		$('#office365Carousel1 .carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel2 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel3').removeClass('slide carousel');
		$('#office365Carousel3').find('.item').removeClass('item');
		$('#office365Carousel1 .carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel3 .carousel-control').remove();
	}

	if($(window).width()< 768){
		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	}

	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);

		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#businessPlanTable" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');

		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	});

//Initial styling of Additional Resources accordion0
	$('#accordion0 .panel-heading').css('background', 
		'#666 url(' + './_images/consumer/Order/Capture.PNG' + ')' + ' no-repeat 99% 50%'
	);
	$('#accordion0 .panel-heading a.collapsed').parent().parent().css('background', 
		'#d7d7d7 url(' + './_images/consumer/Order/Capture+.PNG' + ')' + ' no-repeat 99% 50%'
	);
	//dynamic styling of FAQ accordion0
	$('#accordion0 .panel').on('show.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#666 url(' + './_images/consumer/Order/Capture.PNG' + ')' + ' no-repeat 99% 50%'
		);
	});
	$('#accordion0 .panel').on('hide.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#d7d7d7 url(' + './_images/consumer/Order/Capture+.PNG' + ')' + ' no-repeat 99% 50%'
		);
	}); 


 
 /*  Added By Ramya On 24th June 2016 for review page*/
 


	if($(window).width()< 768){
		$('#reviewOrderTable td[colspan="4"]').attr('colspan',2);
	}
	if($(window).width()< 768){
		$('#reviewOrderTable1 td[colspan="4"]').attr('colspan',2);
	}
	
	if($(window).width()< 768){
	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);
		
		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#reviewOrderTable" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');
		
		$('#reviewOrderTable td[colspan="4"]').attr('colspan',2);
	});
	}
	if($(window).width()< 768){
	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);
		
		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#reviewOrderTable1" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');
		
		$('#reviewOrderTable1 td[colspan="4"]').attr('colspan',2);
	});
	}
	
	//Ramya	
	if($(window).width()< 768){
		$('#reviewOrderTable tbody tr').replaceWith(function(){
			return $('<div class="item">' +$(this).html() + '</div>');
		});
		$('#reviewOrderTable .item').detach().appendTo('#reviewCarousel .carousel-inner').first().addClass('active');
		$('#reviewCarousel').carousel({
			interval:false
		});
	}
	
	
	$('body').on('click','.list-group-item-success',function(){
		$('.menuItem').hide();
		$('.hasNotChild').hide();
		$('.backButton').show();
		$('.list-group-item-success').addClass('mainHeading');
		$('.list-group-item-success').siblings('.mainHeading').hide();
		$(this).show();
		if($($(this).attr('href')).hasClass('in')){
			$($(this).attr('href')).hide(); 
		}else{
			$($(this).attr('href')).show();
		}
		
	});
	
	$('body').on('click','.packagesLink',function(){
		$('.list-group-item-success').hide();
		$('#packages01').show();$('#plans01').hide();		
		$("#productMenu").hide();	$("#SupportMenu").hide();$('.backButton').hide();$('.backButton1').show();
		$("#productMenu").removeClass('in');	$("#SupportMenu").removeClass('in');
	});
	
	$('body').on('click','.plansLink',function(){
		$('.list-group-item-success').hide();
		$('#plans01').show();
		$("#productMenu").hide();	$("#SupportMenu").hide();$('.backButton').hide();$('.backButton1').show();
		$("#productMenu").removeClass('in');	$("#SupportMenu").removeClass('in');	
	});
	
	$('body').on('click','.googleAppLink',function(){
		$('.list-group-item-success').hide();
		$('#packages01').hide();$('#plans01').hide();	
		$('#googleApp').show();
		$('#internetPresenceDiv').hide();
		$('#securityDiv').hide();
		$("#productMenu").hide();	
		$("#SupportMenu").hide();
		$('.backButton').hide();
		$('.backButton1').show();
		$("#productMenu").removeClass('in');	
		$("#SupportMenu").removeClass('in');	
	});
	
	
	$('body').on('click','.internetPresenceLink',function(){
		$('.list-group-item-success').hide();
		$('#packages01').hide();$('#plans01').hide();	
		$('#internetPresenceDiv').show();
		$('#googleApp').hide();
		$('#securityDiv').hide();
		$("#productMenu").hide();	
		$("#SupportMenu").hide();
		$('.backButton').hide();
		$('.backButton1').show();
		$("#productMenu").removeClass('in');	
		$("#SupportMenu").removeClass('in');
	});
	
	$('body').on('click','.securityLink',function(){
		$('.list-group-item-success').hide();
		$('#packages01').hide();$('#plans01').hide();	
		$('#internetPresenceDiv').hide();
		$('#googleApp').hide();
		$('#securityDiv').show();
		$("#productMenu").hide();	
		$("#SupportMenu").hide();
		$('.backButton').hide();
		$('.backButton1').show();
		$("#productMenu").removeClass('in');	
		$("#SupportMenu").removeClass('in');	
	});
	
	$('body').on('click','.backButton1',function(){
		$('#packages01').hide();
		$('#plans01').hide();	
		$('#internetPresenceDiv').hide();
		$('#googleApp').hide();
		$('#securityDiv').hide();
		$("#productMenu").show();		
		$("#SupportMenu").hide();
		$('.backButton').show();	
		$('.list-group-item-success').show();
		$('.menuItem').hide();
		$("a[href$='#SupportMenu']").hide();
	});
	
	$('body').on('click','.backButton',function(){
		$('.list-group-item-success').siblings('.mainHeading').show();	
		$('.hasNotChild').show();
		$("#productMenu").hide();	$("#SupportMenu").hide();
		$("#productMenu").removeClass('in');	$("#SupportMenu").removeClass('in');
		$('.list-group-item-success').removeClass('mainHeading');
		$('.backButton').hide();	
	});
	

	if($(window).width()>= 768){
		$('#FAQCarousel').removeClass('slide carousel');
		$('#FAQCarousel').find('#FAQCarousel.item').css('display', 'block').removeClass('item');
		$('#FAQCarousel .carousel-control').remove();
	}
	
	
	$("body").on('click','.cancel-btn',function() { 
		$('#lean_overlay').hide();      
	});
	$('body').on('click','.isLogin',function(){
		$('#lean_overlay').show();
		$('.l-pop').hide();
	});
	$('body').on('click','.isMyaccount',function(){
		
		if($(this).hasClass('open')){
			$('.isMyaccount').removeClass('open');
			$('#myaccount_overlay').hide();
		}else{
			$('.isMyaccount').addClass('open');
			$('#myaccount_overlay').show();
		}
		//$('.l-pop').hide();
	});

	
	// Plugin options and our code
	$("body").on('click','.register-btn',function(){
	$('#myModal').modal('show');
	});

	$("body").on('click','.showSearchBox',function(){
		$('.navbar-form > .input-group input[type="text"]').show();
		$('.navbar-right li').addClass('activeBox');
		$('.navbar-right').addClass('navbar-right-100');
		$('.navbar-form > .input-group').addClass('navbar-right-100');
		$(this).removeClass('roundCor');
	});
	
	
	$('body').on('click','#myAccountList',function(){ 
		var $this = $(this);
		if($this.val()=="#ProductsList"){
			$(".ProductsList").show();
			$(".ProfileList").hide();
			$(".myOrdersList").hide();
			$(".TicketsList").hide();
		}else if($this.val()=="#ProfileList"){
			$(".ProfileList").show();
			$(".ProductsList").hide();
			$(".myOrdersList").hide();
			$(".TicketsList").hide();
		}else if($this.val()=="#myOrdersList"){
			$(".myOrdersList").show();
			$(".ProductsList").hide();
			$(".TicketsList").hide();
			$(".ProfileList").hide();
		}else if($this.val()=="#TicketsList"){
			$(".TicketsList").show();
			$(".ProductsList").hide();
			$(".myOrdersList").hide();
			$(".ProfileList").hide();
		}
	});	
	
	if($(window).width()< 992){
		$('div.top-menu-right:has(form)').addClass('loggedOnTop');
		if($('div.top-menu-right:has(form)')){
			$('.contact-no').addClass('loggedOnTop');
			$('.Contact_Sales').addClass('loggedOnTop');
		}
		
	}
	
	/* For Removing empty a tag from top navigation*/
	$('a.dropdown-toggle').filter(function() {
	  return $.trim($(this).text()) === '';
	}).remove();
	
	
	if($('div.top-menu-right').find('a').length <= 2){
		$('div.top-menu-right').addClass('notHavingClass');
	}
});


