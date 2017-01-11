jQuery(document).ready(function ($) {

	var slabTicketDataFromBackend = {
		'month-data': [1000, 500, 100, 50, 10],
		'yesterday-data': [20, 30, 40, 50, 100]
	};
	var slabData = {
		labels: [ "Within 2 hrs", "2 to 5 hrs", "5 to 8 hrs", "8 to 24 hrs", "Beyond SLA" ],
		customData: [ "xxx", "yyy", "zzz", "Blue", "Yellow" ],
		datasets: [{
			data: [],
			backgroundColor: [],
			hoverBackgroundColor: []
		}]
	};

	//Updating total ticket count
	function updateSlabTotalTicketCount(slabData) {
		var slabTicketCount = 0;
		slabData.datasets[0].data.forEach(function(count){
			slabTicketCount += count;
		});
		$('.slab-ticket-count').html( slabTicketCount );
	}

	var options = {

		showAllTooltips: true,
		responsive: true,
		legend: { display: false },
		elements: {
			arc: {
				borderWidth: 2,
				borderColor: 'rgba(255,255,255,1)'
			}
		},
		legendCallback: function(chart) {

			var text = [];
			text.push('<div class="container h6-responsive vodafone-lt-rg"><div class="row">');
			for (var i=0; i<chart.data.datasets[0].data.length; i++) {

				text.push('<div class="col-xs-6 col-sm-4"><a class="legend-link" href="#" data-no="'+i+'" data-id="resoSlabsDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + '</span></span></a></div>' );
			}
			text.push('</div></div>');
			return text.join("");
		}
	};

	slabData.datasets[0].data = slabTicketDataFromBackend['month-data'];
	addMDColors(slabData);
	
	var ctx = document.getElementById("slab-chart");
	var slabChart = new Chart(ctx,{
		type: 'pie',
		data: slabData,
		options: options
	});
	$('#slab-chart-legend').html( slabChart.generateLegend() );
	updateSlabTotalTicketCount(slabChart.data);






$(document).on('click touchstart', "#slab-chart-legend .legend-link", function(e){
     var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no');
    $('#'+carousalId).carousel(slideTo);
	 $('.carousel').carousel('pause');
    $('#'+carousalId).modal('show');

    e.preventDefault();
  });



     $(document).on('click touchstart', "#slab-chart", function(e){
		var activePoints = slabChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = zoneChart.data.labels[firstPoint._index];
		var value = zoneChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = zoneChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index;
		$('#carouselSlabs').carousel(indexVal);
		$('#resoSlabsDetailsModal').modal('show');
		 $('#carouselSlabs').carousel('pause');
	});

  $(document).on('click touchstart', "slab-chart-legend .legend-link", function(e){
     var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no');
    $('#'+carousalId).carousel(slideTo);
	$('.carousel').carousel('pause');
    $('#'+carousalId).modal('show');
    e.preventDefault();
  });

	//Handling change in Timeframe
	$(document).on('click touchstart', ".slabTimeframe .month-data, .slabTimeframe .yesterday-data", function(e){

		if( $(e.target).hasClass('month-data') ) {

			slabChart.data.datasets[0].data = slabTicketDataFromBackend['month-data'];

		} else if( $(e.target).hasClass('yesterday-data') ) {

			slabChart.data.datasets[0].data = slabTicketDataFromBackend['yesterday-data'];
		}

		$(".slabTimeframe .dropdown-toggle span").text($(this).text());
		slabChart.update();
		$('#slab-chart-legend').html( slabChart.generateLegend() );
		updateSlabTotalTicketCount(slabChart.data);

	});


});