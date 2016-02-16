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
							text: 'Rainfall (mm)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
							text: 'Rainfall (mm)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
						text: 'Question 1'
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
							text: 'Rainfall (mm)'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
						pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
							'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
			});
		},
		error: function(err){
			
		}
	})
});