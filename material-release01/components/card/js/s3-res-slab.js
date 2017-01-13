jQuery(document).ready(function ($) {

	var slabTicketDataFromBackend = {
		'month-data': [1000, 500, 300, 100]
	};
	var slabData = {
		labels: [ "Within 2 hrs", "2 to 5 hrs", "6 hrs", "12 hrs" ],
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
			//text.push('<div class="container-fluid h6-responsive">');
			text.push('<div class="row">');
			for (var i=0; i<chart.data.datasets[0].data.length; i++) {

				text.push('<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6"><a class="legend-link" href="#" data-no="'+i+'" data-id="resoSlabsDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + '</span></span></a></div>' );
			}
			text.push('</div>');
			//text.push('</div>');
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


});