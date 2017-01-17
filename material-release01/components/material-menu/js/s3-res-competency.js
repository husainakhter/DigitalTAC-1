jQuery(document).ready(function ($) {

	var competencyTicketDataFromBackend = {
		'month-data': [1000, 30, 40, 50, 60, 10, 367, 15, 20],
		'yesterday-data': [10, 367, 15, 20, 25, 30, 40, 50, 60]
	};
	var competencyData = {
		labels: [ "AMS", "EUS", "IRM", "NSD-D", "NSD-V", "SARM", "SSO", "TBO", "Desk" ],
		customData: [ "xxx", "yyy", "zzz", "Blue", "Yellow" ],
		datasets: [{
			data: [],
			backgroundColor: [],
			hoverBackgroundColor: []
		}]
	};
	addMDColors(competencyData);
  
	//Updating total ticket count
	function updateCompetencyTotalTicketCount(competencyData) {
		var competencyTicketCount = 0;
		competencyData.datasets[0].data.forEach(function(count){
			competencyTicketCount += count;
		});
		$('.competency-ticket-count').html( competencyTicketCount );
	}
	var options = {
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
        
				text.push('<div class="col-xs-6 col-sm-4"><a class="legend-link" data-no="'+i+'" href="#"  data-id="resoCompetencyDetailsModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + '</span></span></a></div>' );

			}
			text.push('</div></div>');
			return text.join("");
		}
  };

	competencyData.datasets[0].data = competencyTicketDataFromBackend['month-data'];
	addMDColors(competencyData);
	
	var ctx = document.getElementById("competency-chart");
	var competencyChart = new Chart(ctx,{
		type: 'pie',
		data: competencyData,
		options: options
	});
	$('#competency-chart-legend').html( competencyChart.generateLegend() );
	updateCompetencyTotalTicketCount(competencyChart.data);
	$(".competencyTimeframe .dropdown-toggle span").text('Month-to-date');    
    
    
//    click event on chart;
    
  $('#legend-competencies').html( competencyChart.generateLegend() );
  
 
  $(document).on('click touchstart', ".legend-link", function(e){
    var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no'); 
    $('#'+carousalId).carousel(slideTo);
    $('#'+carousalId).modal('show');
	 $('.carousel').carousel('pause');
    e.preventDefault();
  });
  
  

   $(document).on('click touchstart', "#competency-chart", function(e){
		var activePoints = competencyChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = zoneChart.data.labels[firstPoint._index];
		var value = zoneChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = zoneChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index; 
		$('#carouselCompetency').carousel(indexVal);
		$('#resoCompetencyDetailsModal').modal('show');
		$('#carouselCompetency').carousel('pause');
	});
	
  //Handling change in Timeframe 
  $(document).on('click touchstart', ".competencyTimeframe .month-data, .competencyTimeframe .yesterday-data", function(e){

    if( $(e.target).hasClass('month-data') ) {
    
      competencyChart.data.datasets[0].data = competencyTicketDataFromBackend['month-data'];

    } else if( $(e.target).hasClass('yesterday-data') ) {

      competencyChart.data.datasets[0].data = competencyTicketDataFromBackend['yesterday-data'];

    }

    $(".competencyTimeframe  .dropdown-toggle span").text($(this).text());
    competencyChart.update();
    $('#competency-chart-legend').html( competencyChart.generateLegend() );
	updateCompetencyTotalTicketCount(competencyChart.data);

  });
    
});