var elButton = $('#start-button-handle');
var elStartButton = $('#start-button');
var elQuestionArea = $('.question-area');
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
	state.isStarted = true;
}
//wrapping our logic for hidden classes