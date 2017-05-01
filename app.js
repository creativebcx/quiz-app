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
		text: "1/10. Which of the following is likely a measurement for the\
		waist size of a snowboard?",
		answer: [
			"100cm",
			"100mm", 
			"265mm",
			"265cm"
		],
		correctAnswer: [
			2,
			"265mm is, or 26.5cm is likely the waist width of a snowboard."],
	},
		{
		text: "2/10. What are the primary factors that should be considered\
		when choosing a board length?",
		answer: [
			"height, weight",
			"height, weight, type of rider, type of riding",
			"type of rider, type of riding",
			"weight, type of riding"
		],
		correctAnswer: [
			1,
			"Factors like rider height and weight should be considered in concert\
			with factors like rider ability, and the style of riding desired."]
		},
		{
		text: "3/10. What aspect of board control changes when you increase\
		the width of the board waist?",
		answer: [
			"board becomes 'slower'",
			"flex pattern changes", 
			"edge-to-edge control changes",
			"board becomes more stable"
		],
		correctAnswer: [
			2,
			"The wider the waist of a board, the longer it will take to move from\
			one edge to the other.  Therefore, a wider board causes edge to edge\
			speed to decrease."],
	},
	{
		text: "4/10. What type of shape design would be best for a beginner trying to\
		learn to ride on a variety of snow conditions?",
		answer: [
			"traditional camber board'",
			"rocker board", 
			"hybrid board",
			"s-rocker board"
		],
		correctAnswer: [
			2,
			"Hybrid boards are best for beginners.  Although hybrid refers to many different\
			types of designs, a hybrid board that is flat with early rise on the tip and tail,\
			or has camber under the feet and early rise tip and tail might work best for\
			learning to ride in a variety of conditions."],
	},
	{
		text: "5/10. What core materials will give dampness to the board?",
		answer: [
			"rubber & wood",
			"wood & carbon", 
			"wood & aluminum",
			"carbon & aluminum"
		],
		correctAnswer: [
			0,
			"Both rubber and wood have dampening characteristics.  Although they both add wight\
			to the board, they can provide a more stable ride in 'choppy' conditons."],
	},
	{
		text: "6/10.  'True Twin' refers to what characteristic?",
		answer: [
			"twin like flex pattern",
			"tip, tail, and side-cut is symetrical", 
			"tip & tail are symetrical",
			"none of the above"
		],
		correctAnswer: [
			1,
			"'True Twin,' refers to a snowbaord that is symetrical.  Great for riding switch."],
	},
	{
		text: "7/10. Why would you add lighter materials to a splitboard?",
		answer: [
			"it's the backcountry and lighter is always better",
			"to reduce dampening", 
			"to reduce weight because there is extra material involved in split-board design",
			"none of the above"
		],
		correctAnswer: [
			2,
			"It's beneficial to reduce weight to compensate for the extra material used in\
			split-board design."],
	},
	{
		text: "8/10. Why would you add lighter materials to a splitboard?",
		answer: [
			"it's the backcountry and lighter is always better",
			"to reduce dampening", 
			"to reduce weight because there is extra material involved in split-board design",
			"none of the above"
		],
		correctAnswer: [
			2,
			"It's beneficial to reduce weight to compensate for the extra material used in\
			split-board design."],
	},
	{
		text: "9/10. Why would you add lighter materials to a splitboard?",
		answer: [
			"it's the backcountry and lighter is always better",
			"to reduce dampening", 
			"to reduce weight because there is extra material involved in split-board design",
			"none of the above"
		],
		correctAnswer: [
			2,
			"It's beneficial to reduce weight to compensate for the extra material used in\
			split-board design."],
	},
	{
		text: "10/10. What is the best",
		answer: [
			"it's the backcountry and lighter is always better",
			"to reduce dampening", 
			"to reduce weight because there is extra material involved in split-board design",
			"none of the above"
		],
		correctAnswer: [
			2,
			"It's beneficial to reduce weight to compensate for the extra material used in\
			split-board design."],
	}
		]
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















