// JavaScript Document
(function() {

  'use strict';
		/*$('#zoneDetailsModal,#competencyDetailsModal').on('slid.bs.carousel', function () {
		var $btns = $(this).find('.carousel-indicators');
		var $active = $btns.find("li.active").attr('data-toggle');
		$(this).find('.title-popup').html($active);
	});*/

	 $(document).on('click touchstart','#carouselCompetency >  .carousel-control',function(e){
            
			var dataModal	=	$(this).data('modal');
			var slideValue	=	$(this).data()['slide'];
            $('#carouselCompetency').carousel(slideValue); e.preventDefault(); 
        });
})();