var surveyId;

$(document).ready(function(){
	$('#submitSurveyBtn').hide();
	$('#submitSurveyBtn').click(function(){
		$.ajax({
			url:'/submitSurvey',
			success: function(resp){
				if(resp.success){
					$('#surveySubmittedAlert').show();
				}
			},
			error: function() {
				
				//TODO Create some kind of error handling here
			}
		});
	});
	$('#surveySubmittedAlert').hide();
	$('#failReqSurveyAlert').hide();
	$.ajax({
		url: '/requestSurvey',
		success: function(resp){
			if(resp.success){
				surveyId = resp.id;
				var i;
				
				//TODO Only supports one survey
				var surveyHtml = '';
				for(i=0; i<resp.surveys.questions.length; i+=1){
					console.log(resp.surveys.questions);
					switch(resp.surveys.questions[i].type){
						
						//TODO Wire up ids if you want
						case "NumberInput":
							surveyHtml+= "<div class='form-group'>";
							surveyHtml+= "<label>"+resp.surveys.questions[i].question+"</label>";
							surveyHtml+="<br>";
							surveyHtml+= "<input type='number',class='form-control,id='answer"+i+"'>";
							surveyHtml+= "</div>";
							break;
						case "OptionsInput":
							surveyHtml+= "<label>"+resp.surveys.questions[i].question+"</label>";
							surveyHtml+="<select class='form-control'>";
							var j;
							for(j = 0; j<resp.surveys.questions[i].answers.length;j+=1){
								surveyHtml+="<option>";
								surveyHtml+=resp.surveys.questions[i].answers[j];
								surveyHtml+="</option>";
							}
							surveyHtml+="</select>";
							break;
						case "CheckboxInput":
							surveyHtml+= "<div class='checkbox'>";
							surveyHtml+= "<label><strong><input type='checkbox'>"
							surveyHtml+=resp.surveys.questions[i].question;
							surveyHtml+="</strong></label>";
							surveyHtml+= "</div>";
							break;
					}
				}
				$('#surveyDiv').html(surveyHtml);
				$('#submitSurveyBtn').show();
			}
			else{
				$('#failReqSurveyAlert').show();
			}
		},
		error: function(){
			$('#failReqSurveyAlert').show();
		}
	});
});