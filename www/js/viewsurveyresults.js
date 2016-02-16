$(document).ready(function(){
	$.ajax({
		url: '/viewSurveyResults',
		success: function(resp){
			$(function () {
				$('.question1').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Question 1'
					},
					subtitle: {
						text: resp.surveyResults[0].text
					},
					xAxis: {
						categories: resp.surveyResults[0].options,
						crosshair: true
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Responses'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					 series: [{
						 name: 'Responses',
						 data: resp.surveyResults[0].results
					}]
				});
				$('.question2').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Question 2'
					},
					subtitle: {
						text: resp.surveyResults[1].text
					},
					xAxis: {
						categories: resp.surveyResults[1].options,
						crosshair: true
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Responses'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					 series: [{
						 name: 'Responses',
						 data:resp.surveyResults[1].results
					}]
				});
				$('.question3').highcharts({
					chart: {
						type: 'column'
					},
					title: {
						text: 'Question 3'
					},
					subtitle: {
						text: resp.surveyResults[2].text
					},
					xAxis: {
						categories: resp.surveyResults[2].options,
						crosshair: true
					},
					yAxis: {
						min: 0,
						title: {
							text: 'Responses'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
						footerFormat: '</table>',
						shared: true,
						useHTML: true
					},
					plotOptions: {
						column: {
							pointPadding: 0.2,
							borderWidth: 0
						}
					},
					 series: [{
						 name: 'Responses',
						 data: resp.surveyResults[2].results
					}]
				});
				 $('.question4').highcharts({
					chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'Question 4'
					},
					subtitle: {
						text: resp.surveyResults[3].text
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
									color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
							}
						}
					},
					series: [{
						name: 'Responses',
						colorByPoint: true,
						data: [{
							name: resp.surveyResults[3].options[0],
							y: resp.surveyResults[3].results[0]
						},
						{
							name: resp.surveyResults[3].options[1],
							y: resp.surveyResults[3].results[1]
						}]
					}]
				});
			});
		},
		error: function(err){
			
		}
	})
});