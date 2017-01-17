jQuery(document).ready(function ($) {

	var priorityData = {
		labels: [ "P1 (115 Tkts)", "P2 (412 Tkts)", "P3 (333 Tkts)" ],
		customData: [ "xxx", "yyy", "zzz" ],
		datasets: [{
			data: [14, 16, 20],
      backgroundColor: [],
      hoverBackgroundColor: []
      /*,
			backgroundColor: [ "#FF6384", "#36A2EB", "#FFCE56", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: [ "red", "green", "blue", "#36A2EB", "#FFCE56" ]
      */
		}]
	};
  addMDColors(priorityData);

  //Updating total ticket count
  var priorityTicketCount = 0;
  priorityData.datasets[0].data.forEach(function(count){
    priorityTicketCount += count;
  });
  $('.priority-ticket-count').html( priorityTicketCount );

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

				text.push('<div class="col-xs-6 col-sm-6 col-lg-4"><a class="legend-link" href="#" data-no="'+i+'" data-id="alertDashboardPriorityModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.labels[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.labels[i] + '</span></span></a></div>' );
			}
			text.push('</div></div>');
			return text.join("");
		}
  };

	var ctx = document.getElementById("priority-chart");

	var priorityChart = new Chart(ctx,{
		type: 'pie',
		data: priorityData,
		options: options
	});
  $('#priority-chart-legend').html( priorityChart.generateLegend() );
  $('.carousel').carousel('pause');

  $(document).on('click touchstart', "#priority-chart-legend .legend-link", function(e){
    var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no');
    $('#'+carousalId).carousel(slideTo);
    $('#'+carousalId).modal('show');
    e.preventDefault();
  });

  $(document).on('click touchstart', "#priority-chart", function(e){
		var activePoints = priorityChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = zoneChart.data.labels[firstPoint._index];
		var value = zoneChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = zoneChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index;
		$('#carouselPriority').carousel(indexVal);
		$('#alertDashboardPriorityModal').modal('show');
	});
	
  /*
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if(e.target.hash === "#priority-summary") {
      priorityChart.clear();
      priorityChart = new Chart(ctx,{
        type: 'pie',
        data: priorityData,
        options: options
      });
    }
  });
  */

});