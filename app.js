var elButton = $('#start-button-handle');
var elStartButton = $('#start-button');
var elQuestionArea = $('.question-area');
var elSubmitButton = $('.submit');
var elBackButton = $('.back');
var elMoveForwardButton = $('.forward');
var toggle = $('.toggle');
var questionSet = 0;
var newValue = 0;
var correctA = 0;
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
			0,
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
	attachRadioHandler();
}
//wrapping our logic for hidden classes & changing "state"

elMoveForwardButton.click( function(event) {
	if (questionSet != state.questions.length - 1) {
		questionSet++;
		newQuestionAnswer();
		attachRadioHandler();
	}
	else {
		finalScore();
	};
	$('.message-area').html(
			" "
		);
});

elBackButton.click( function(event) {
	if (questionSet != 0) {
		questionSet--;
	};
	newQuestionAnswer();
});

elSubmitButton.click( function(event) {
	check();
	attachRadioHandler();
});

function newQuestionAnswer() {
	$('.question-area').html(
		'<div id="question">' + state.questions[questionSet].text + '</div>' +
		'<ul class="answer-list">' + 
			'<li>' + '<input value="0" name="answer" type="radio"/>' + '<span>' + 
				state.questions[questionSet].answer[0] + '</span>' + '</li>' +
			'<li>' + '<input value="1" name="answer" type="radio"/>' + '<span>' + 
				state.questions[questionSet].answer[1] + '</span>' + '</li>' +
			'<li>' + '<input value="2" name="answer" type="radio"/>' + '<span>' + 
				state.questions[questionSet].answer[2] + '</span>' + '</li>' +
			'<li>' + '<input value="3"name="answer" type="radio"/>' + '<span>' + 
				state.questions[questionSet].answer[3] + '</span>' + '</li>' +
			'</ul>');
};
function attachRadioHandler(event) {
		$('input[name="answer"]').change(function () {
			newValue = this.value;
		});
};	


function check() {
	if (validateAnswer()) {
		$('.message-area').html(
			"Correct Answer! : " + state.questions[questionSet].correctAnswer[1]
	)}
	else {
		$('.message-area').html(
			"incorrect answer"
		)
	};
	
};
	function validateAnswer() {
	console.log(questionSet)
	if (newValue == state.questions[questionSet].correctAnswer[0]) {
		correctA++;
		return true;
	}
	else {
		return false;
	}
};

function finalScore () {
	$('.question-area').html(
		"Your final score is " + correctA + " out of 10!"
		);
};















