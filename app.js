var express = require('express');
var app = express();

app.set('view engine','jade');
app.set('views','www/html');
app.use(express.static('www'));

//Serves up the different views which have the packaged controllers
//and model information
app.get('/', function (req, res) {
    res.render('login');
});

app.get('/surveys',function(req,res){
	res.render('survey');
});

app.get('/menu',function(req,res){
	res.render('menu');
});

app.get('/results',function(req,res){
	res.render('results');
})

//Actual service layer -> would be moved into another server
//once the system was tested correctly at this level
//(separation of concerns)
app.get('/registerUser', function (req, res) {
    result = {
        success: true
    }
    res.send(result);
});
app.get('/loginUser', function (req, res) {
    result = {
        auth: 'HDKIOWJMNP',
        success: true
    }
    res.send(result);
});
app.get('/submitSurvey', function (req, res) {
    result = {
        success: true
    }
    res.send(result);
});
app.get('/getSurveyRewards', function (req, res) {
    result = {
        success: true,
        rewards: [11, 21, 22, 12, 44, 23, 56, 32, 29, 90, 88, 87],
        milestones: ['gold', 'silver', 'bronze']
    }
    res.send(result);
});
app.get('/viewSurveyResults', function (req, res) {
    result = {
        success: true,
        surveyResults: [{
			text: 'How many carrots do you buy a week?',
			options: ['0', '1', '2', '3+'],
			results: [4, 2, 3, 4]
		},{
			text: 'Which is your favorite type of carrot?',
			options:  ['Golden', 'Steamed', 'Raw', 'Nonexistent'],
			results: [4, 2, 4, 3]
		},{
			text: 'If you have to pick between a carrot and another vegetable what would you pick?',
			options: ['Carrot', 'Other'],
			results: [5, 8]
		}],
        surveys: [{
            name: 'test survey',
            id: 42
        }]
    }
    res.send(result);
});
app.get('/requestSurvey', function (req, res) {
    result = {
        success: true,
        surveys: {
            name: 'test survey',
            id: 42,
            questions: [{
                question: 'How many carrots do you buy a week?',
                type: 'NumberInput'
            }, {
                question: 'Which is your favorite type of carrot?',
                answers: ['Golden', 'Steamed', 'Raw', 'Nonexistent'],
                type: 'OptionsInput'
            }, {
                question: 'I buy fifty carrots a week?',
                type: 'CheckboxInput'
            },
			{
                question: 'A potato is a type of carrot?',
                type: 'CheckboxInput'
            },
			{
                question: 'If you could have as many carrots as you want, how many would you want?',
                type: 'NumberInput'
            },
			{
                question: 'If I have 3 carrots and I drop 2 of them how many are left?',
                type: 'NumberInput'
            },
			{
                question: 'If I was a carrot, how old would I be?',
                type: 'NumberInput'
            },
			{
                question: 'If you have to pick between a carrot and another vegetable what would you pick?',
                answers: ['Carrot', 'Carrot', 'Carrot', 'Carrot'],
                type: 'OptionsInput'
            },
			{
                question: 'If you have to pick between a carrot and another vegetable what would you pick?',
                answers: ['Carrot', 'Carrot', 'Carrot', 'Carrot'],
                type: 'OptionsInput'
            },
			{
                question: 'If you have to pick between a carrot and another vegetable what would you pick?',
                answers: ['Carrot', 'Carrot', 'Carrot', 'Carrot'],
                type: 'OptionsInput'
            },
			{
                question: 'If you have to pick between a carrot and another vegetable what would you pick?',
                answers: ['Carrot', 'Carrot', 'Carrot', 'Carrot'],
                type: 'OptionsInput'
            }]
        }
    }
    res.send(result);
});
app.get('/completeSurvey', function (req, res) {
    result = {
        success: true
    }
    res.send(result);
});
app.get('/verifySurvey', function (req, res) {
    result = {
        success: true
    }
    res.send(result);
});
app.listen(3000);