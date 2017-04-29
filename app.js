var elButton = $('#start-button-handle');
var elStartButton = $('#start-button');
var elQuestionArea = $('.question-area');
var elSubmitButton = $('.submit');
var elBackButton = $('.back');
var toggle = $('.toggle');
var questionSet = 0;
var state = {
	isStarted: false,
	currentStep: 0,
	questions: [{
		text: "1. What size wheels are common on mountain bikes?",
		answer: [
			"24in, 26in, 27in",
			"26cm, 27.5cm, 29cm",
			"26in, 27.5in, 29in",
			"none of the above"
		],
		correctAnswer: [
			2,
			"26in, 27.5in, or 29in rim/wheel size are the most common sizes"],
	},
		{
		text: "2. What type of suspension design characterized dw-link?",
		answer: [
			"single pivot",
			"four bar",
			"double bar",
			"Santa Cruz Design"
		],
		correctAnswer: [
			1,
			"single-pivot design is a characteristic of dw-link"]
		}]
};

elButton.click( function(event) {
	startQuiz();
})
//calls function

function startQuiz() {
	elStartButton.addClass('hidden');
	elQuestionArea.removeClass('hidden');
	toggle.removeClass('hidden');
	state.isStarted = true;
	newQuestionAnswer();
}
//wrapping our logic for hidden classes

elBackButton.click( function(event) {
	if (questionSet != 0) {
		questionSet--;
	};
	newQuestionAnswer();
});

elSubmitButton.click( function(event) {
	if (questionSet != state.questions.length - 1) {
		questionSet++;
	};
	
	//	elSubmitButton
	//};
	console.log('questionSet');
	newQuestionAnswer();
});

function newQuestionAnswer() {
	$('.question-area').html(
		'<div id="question">' + state.questions[questionSet].text + '</div>' +
		'<ul class="answer-list">' + 
			'<li>' + '<input name="answer" type="radio" class="answer-1"/>' + '<span>' + state.questions[questionSet].answer[0] + '</span>' + '</li>' +
			'<li>' + '<input name="answer" type="radio" class="answer-2"/>' + '<span>' + state.questions[questionSet].answer[1] + '</span>' + '</li>' +
			'<li>' + '<input name="answer" type="radio" class="answer-3"/>' + '<span>' + state.questions[questionSet].answer[2] + '</span>' + '</li>' +
			'<li>' + '<input name="answer" type="radio" class="answer-4"/>' + '<span>' + state.questions[questionSet].answer[3] + '</span>' + '</li>' +
			'</ul>');
	if (validateAnswer(2, questionSet)) {
		$('.message-area').html(
			state.questions[questionSet].correctAnswer[1]
	)}
	else {
		$('.message-area').html(
			"incorrect answer"
		)};
};

function validateAnswer(answerIndex, questionIndex) {
	return state.questions[questionIndex].correctAnswer[0] == answerIndex;
};


console.log(validateAnswer(3,0));














