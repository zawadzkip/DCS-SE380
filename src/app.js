var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});
app.get('/registerUser', function(req, res){
	result = {
		success: true
	}
	res.send(result);
});
app.get('/loginUser', function(req, res){
	result = {
		auth: 'HDKIOWJMNP',
		success: true
	}
	res.send(result);
});
app.get('/submitSurvey', function(req, res){
	result = {
		success: true
	}
	res.send(result);
});
app.get('/getSurveyRewards', function(req, res){
	result = {
		success: true,
		rewards: [11, 21, 22, 12, 44, 23, 56, 32, 29, 90, 88, 87],
		milestones: ['gold', 'silver', 'bronze']
	}
	res.send(result);
});
app.get('/viewSurveyResults', function(req, res){
	result = {
		success: true,
		surveyResults: ['yes', 'no', 'maybe', 'agree'],
		survey: {
			name: 'test survey',
			id: 42
		}
	}
	res.send(result);
});
app.get('/requestSurvey', function(req, res){
	result = {
		success: true,
		surveys: {
			name: 'test survey',
			id: 42
		}
	}
	res.send(result);
});
app.get('/completeSurvey', function(req, res){
	result = {
		success: true
	}
	res.send(result);
});
app.get('/verifySurvey', function(req, res){
	result = {
		success: true
	}
	res.send(result);
});
app.listen(3000);