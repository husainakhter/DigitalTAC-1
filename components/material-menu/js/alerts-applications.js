jQuery(document).ready(function ($) {

	var applicationData = {
		labels: [ "ITSM_Exchange", "BSS_EAI", "RSS_CPOS", "AMDOCS", "CSAT", "EBPP", "Hercules_Surround", "ODS", "RSS_UPSS", "RA_MoneyMap" ],
		customData: [],
		datasets: [{
			label: 'Alerts',
			data: [14, 7, 4, 3, 1, 1, 1, 1, 14, 14],
			backgroundColor: [],
			hoverBackgroundColor: [],
			borderWidth: 1
		}]
	};
  applicationData.labels.forEach(function(label, index, labels){
    applicationData.customData.push(label);

    /*
    if(label.length > 4) {
      labels[index] = label.substr(0,4) + '...';
    }
    */
  });
  addMDColors(applicationData);

	var options = {
		responsive: true,
    maintainAspectRatio: false,
		legend: { display: false },
    elements: {
        arc: {
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,1)'
        }
    },

    scaleOverride: true, scaleStartValue: 0, scaleStepWidth: 50, scaleSteps: 3, scaleBeginAtZero: true,
    scales: {
        xAxes: [{
            display: false,
            ticks: {
                beginAtZero:true
            },
            gridLines: {
              display:false
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero:true
            },
            gridLines: {
              display:false
            }
        }]
    },
		legendCallback: legendGeneratingFunction
  };

  /*
  function legendGeneratingFunction (chart) {

		var text = [];
		text.push('<div class="container h6-responsive vodafone-lt-rg"><div class="row">');
		for (var i=0; i<chart.data.datasets[0].data.length; i++) {

			text.push('<div class="col-xs-6 col-sm-4"><a class="legend-link" href="#" data-no="'+i+'" data-id="alertDashboardApplicationModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.customData[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value vodafone-red vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.customData[i] + '</span></span></a></div>' );
		}
		text.push('</div></div>')
		return text.join("");
	}
	*/
  function legendGeneratingFunction (chart, legendValueColor) {
  	if(!legendValueColor) {
  		legendValueColor = 'vodafone-red';
  	}

		var text = [];
		text.push('<div class="container h6-responsive vodafone-lt-rg"><div class="row">');
		for (var i=0; i<chart.data.datasets[0].data.length; i++) {

			text.push('<div class="col-xs-6  col-sm-6 col-lg-4"><a class="legend-link collapsed" href="#" data-no="'+i+'" data-id="alertDashboardApplicationModal" data-data="' + chart.data.datasets[0].data[i] + '" data-label="' + chart.data.customData[i] + '"><span class="legend-circle"><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span></span><span class="legend-value ' +  legendValueColor + ' vodafone-bd">' + chart.data.datasets[0].data[i] + '</span><span class="legend-desc"><span class="tab-color legend-label">' + chart.data.customData[i] + '</span></span></a></div>' );
		}
		text.push('</div></div>')
		return text.join("");
	}

	var ctx = document.getElementById("application-chart");

	var applicationChart = new Chart(ctx,{
		type: 'bar',
		data: applicationData,
		options: options
	});
  $('#application-chart-legend').html( applicationChart.generateLegend() );

  $('.carousel').carousel('pause');
  $(document).on('click touchstart', "#application-chart-legend .legend-link", function(e){
    var carousalId		=	$(this).data('id');
    var slideTo		=	$(this).data('no');
    $('#'+carousalId).carousel(slideTo);
    $('#'+carousalId).modal('show');
    e.preventDefault();
  });

  $(document).on('click touchstart', "#application-chart", function(e){
		var activePoints = applicationChart.getElementsAtEvent(e);
		var firstPoint = activePoints[0];
		/*var label = zoneChart.data.labels[firstPoint._index];
		var value = zoneChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
		var customData = zoneChart.data.customData[firstPoint._index];*/
		var indexVal		=	firstPoint._index;
		$('#carouselApplication').carousel(indexVal);
		$('#alertDashboardApplicationModal').modal('show');
	});


	var extraLegends = {
		data: {
			labels: [],
			customData: [],
			datasets: [{
				data: [1,1,1,1,1,1,1,1,1,1],
				backgroundColor: [],
				hoverBackgroundColor: []
			}]
		}
	};
  extraLegends.data.datasets[0].data.forEach(function(){
    extraLegends.data.customData.push(String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65))+String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65))+String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65)));
    extraLegends.data.datasets[0].backgroundColor.push('#eee');
  });

  //Updating total ticket count
  var applicationTicketCount = 0;
  applicationData.datasets[0].data.forEach(function(count){
    applicationTicketCount += count;
  });

	// Added By husain
  extraLegends.data.datasets[0].data.forEach(function(count){
    applicationTicketCount += count;
  });
  $('.application-ticket-count').html( applicationTicketCount );

  document.getElementById("extra-legends").innerHTML = '<hr class="separator-hr"/>' + legendGeneratingFunction (extraLegends, 'tab-color');

	$('#view-more-apps-content').on('show.bs.collapse', function () {

		$('#applications-summary.active .card').css({ height: 'auto' });

	});

	$('#view-more-apps-content').on('shown.bs.collapse', function () {

		$('.extra-info-msg span').html('View less');

		$('html, body').animate({
			 scrollTop: $('#view-more-apps-content').offset().top
		}, 2000);
	});

	$('#view-more-apps-content').on('hidden.bs.collapse', function () {

		$('.extra-info-msg span').html('View more');
		$('#applications-summary.active .card').attr("style", "")
	});

	$(document).on('click', '#extra-legends a.legend-link', function(e){
		e.preventDefault();
	});
  
  /*
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    if(e.target.hash === "#applications-summary") {
      applicationChart.clear();
      applicationChart = new Chart(ctx,{
        type: 'bar',
        data: applicationData,
        options: options
      });
    }
  });
  */

});