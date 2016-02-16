$(document).ready(function(){
	$("#completeSurveyBtn").click(function(){
		window.location = "/surveys";
	});
	$("#viewSurveyResultsBtn").click(function(){
		window.location = "/results";
	});
	$("#submitSurveyBtn").click(function(){
		$.ajax({
			url:'/submitSurvey'
		});
	});
});