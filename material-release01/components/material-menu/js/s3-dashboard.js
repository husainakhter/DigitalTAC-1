jQuery(document).ready(function ($) {
	//for 1st chart Zone
	var data = {
		labels: [ "Direct", "Growth", "Emerging" ],
		customData: [ "xxx", "yyy", "zzz", "Blue", "Yellow" ],
		datasets: [{
			data: [230, 102, 57],
			backgroundColor: [],
			hoverBackgroundColor: []
			/*backgroundColor: [ "#3F51B5", "#CDDC39", "#FFC107" ],
			hoverBackgroundColor: [ ]*/
		}]
	};
	
	addMDColors(data);
  
  //Updating total ticket count
  var zoneTicketCount = 0;
  data.datasets[0].data.forEach(function(count){
    zoneTicketCount += count;
  });
  $('.zone-ticket-count').html( zoneTicketCount );
  
	var options = {
		responsive: true,
		legend: { display: false },
    elements: {
        arc: {
            borderWidth: 2,
            borderColor: '#fff'
        }
    },
		legendCallback: function(chart) {
			var text = [];
			text.push('<div class="container h6-responsive vodafone-lt-rg"><div class="row margin-x-0">');
			for (var i=0; i<chart.data.datasets[0].data.length; i++) {
 
				/*text.push('<div class="col-xs-4 col-sm-3 col-md-4 col-lg-3 padding-x-0"><a class="legend-link" href="#" data-no="'+i+'" data-id="zoneDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-desc"><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-label tab-color">' + chart.data.labels[i] + '</span></span></a></div>' );*/
        
        text.push('<div class="col-xs-6 col-sm-4"><a class="legend-link" href="#" data-no="'+i+'" data-id="zoneDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + 
        '</span><i class="fa fa-info-circle" aria-hidden="true" data-toggle="popover" data-trigger="focus" data-placement="top" ></i></span></a></div>' );
        
        
        
 			}
			text.push('</div></div>');
			return text.join("");
		}
  };

	var ctx = document.getElementById("zone-chart");
	// For a pie chart
	var zoneChart = new Chart(ctx,{
		type: 'pie',
		data: data,
		options: options
	});
  $('#legend').html( zoneChart.generateLegend() );
  
  // for 2 nd chart
  
  var data= {
		labels: [ "AMS", "IRS", "EUM", "NSD-D", "NSD-V", "SARM", "SSO", "TBO", "DESK" ],
		customData: [ "xxx", "yyy", "zzz", "Blue", "Yellow" ],
		datasets: [{
			data: [45, 230, 04, 19, 19, 68, 151, 381, 108],
			/*backgroundColor: [ "#3F51B5", "#FF5722", "#FFC107", "#009688", "#9C27B0","#FFEB3B","#FFC107","#CDDC39","lightgreen" ],
			hoverBackgroundColor: [  ]*/
			backgroundColor: [],
			hoverBackgroundColor: []
		}]
	};
	addMDColors(data);
  
  //Updating total ticket count
  var competencyTicketCount = 0;
  data.datasets[0].data.forEach(function(count){
    competencyTicketCount += count;
  });
  $('.competency-ticket-count').html( competencyTicketCount );
  
	var options = {
		responsive: true,
		legend: { display: false },
    elements: {
        arc: {
            borderWidth: 2,
            borderColor: '#fff'
        }
    },
		legendCallback: function(chart) {
			var text = [];
			text.push('<div class="container h6-responsive vodafone-lt-rg"><div class="row margin-x-0">');
			for (var i=0; i<chart.data.datasets[0].data.length; i++) {
 
				/*text.push('<div class="col-xs-4 col-sm-3 col-md-4 col-lg-3 padding-x-0"><a class="legend-link" href="#" data-no="'+i+'" data-id="competencyDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-desc"><span class="legend-value vodafone-red  vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-label tab-color">' + chart.data.labels[i] + '</span></span></a></div>' );*/
        
        text.push('<div class="col-xs-6 col-sm-4"><a class="legend-link" href="#" data-no="'+i+'" data-id="competencyDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + '</span></span></a></div>' );
 
			}
			text.push('</div></div>');
			return text.join("");
		}
  };

	var ctx = document.getElementById("competencies-chart");
	// For a pie chart
	var competencyChart = new Chart(ctx,{
		type: 'pie',
		data: data,
		options: options
	});
 
  $('#legend-competencies').html( competencyChart.generateLegend() );
  
 
  $(document).on('click touchstart', ".legend-link", function(e){
    var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no'); 
    $('#'+carousalId).carousel(slideTo);
    $('.carousel').carousel('pause');
    $('#'+carousalId).modal('show');
    e.preventDefault();
  });
  
  //show circle information when user
  //taps on custom legend info icons 
  var vodafoneCircles = {
    'Direct': ['Chennai', 'Delhi', 'Gujarat', 'Kolkata', 'Mumbai', 'Rest of Bengal', 'Tamilnadu'],
    'Growth': ['Haryana', 'Karnataka', 'Kerala', 'Maharashtra & Goa', 'Rajasthan', 'UP(E)', 'UP(W)'],
    'Emerging': ['Andhra Pradesh', 'Assam', 'Bihar', 'Himachal Pradesh', 'Jammu Kashmir', 'Madhya Pradesh', 'North East', 'Odisha', 'Punjab']
   };
  $(document).on('click touchstart', ".zone-summary .legend-desc .fa", function(e){
    var zoneName = $($(e.target).parents('a')[0]).data('label');

    var circles = '<ul>';
    vodafoneCircles[zoneName].forEach(function(circle){
      circles += '<li>' + circle + '</li>';
    });
    circles += '</ul>';

    $(this).popover({
      container: 'body',
      viewport: { selector: '#slab-summary .container', padding: 0 },
      html: true,
      title: zoneName,
      content: circles
    }).popover('show');
    //So that touch/click does not reach parent anchor and trigger zone popup
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
  });
  //Closing bootstrap pop over
  $('body').on('click touchstart', function (e) {
      $('[data-toggle="popover"]').each(function () {
          //the 'is' for buttons that trigger popups
          //the 'has' for icons within a button that triggers a popup
          if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
              $(this).popover('hide');
          }
      });
  });
  
  
   $(document).on('click touchstart', "#competencies-chart", function(e){
		var activePoints = competencyChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = competencyChart.data.labels[firstPoint._index];
		var value = competencyChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = competencyChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index; 
		$('#carouselCompetency').carousel(indexVal);
		$('#carouselCompetency').carousel('pause');
		$('#competencyDetailsModal').modal('show');
	});
	
	$(document).on('click touchstart', "#zone-chart", function(e){
		var activePoints = zoneChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = zoneChart.data.labels[firstPoint._index];
		var value = zoneChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = zoneChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index; 
		$('#carouselZone').carousel(indexVal);
		$('#carouselZone').carousel('pause');
		$('#zoneDetailsModal').modal('show');
	});
  });