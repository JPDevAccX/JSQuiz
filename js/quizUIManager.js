// Type: Module

export default class QuizUIManager {
	constructor(
		quizSelectorContainerDomId,
		quizTitleDomId,
		quizIntroTextDomId,
		quizQuestionContainerDomId,
		quizQuestionDomId,
		quizAnswersContainerDomId,
		quizAnswerTemplateDomId,
		quizAnswerImgClassName,
		quizAnswerTextClassName,
		quizResultsContainerDomId,
		questionIndexChangeCallback,
		questionAnswerSelectCallback,
	) {
		// Get the quiz title element
		this.quizTitleEl = document.getElementById(quizTitleDomId) ;

		// Get the quiz-selector container and child intro-text element
		this.quizSelectorContainerEl = document.getElementById(quizSelectorContainerDomId) ;
		this.quizIntroTextEl = document.getElementById(quizIntroTextDomId) ;

		// Add event listeners for all the buttons that go backwards / forwards through the title -> questions -> results
		document.getElementById('quiz_start').addEventListener('click', () => questionIndexChangeCallback(+1)) ; ///
		document.getElementById('prev_question').addEventListener('click', () => questionIndexChangeCallback(-1)) ; ///
		document.getElementById('next_question').addEventListener('click', () => questionIndexChangeCallback(+1)) ; ///
		document.getElementById('results_to_last_question').addEventListener('click', () => questionIndexChangeCallback(-1)) ; ///
		
		// Get the question container and the question child element
		this.quizQuestionContainerEl = document.getElementById(quizQuestionContainerDomId) ;
		this.quizQuestionEl = document.getElementById(quizQuestionDomId) ;

		// Get the answer-choices container element
		this.quizAnswersContainerEl = document.getElementById(quizAnswersContainerDomId) ;

		// Get the answer-choice template element and note the class selectors for the elements within
		this.quizAnswerTemplateEl = document.getElementById(quizAnswerTemplateDomId) ;
		this.quizAnswerImgSelector = '.' + quizAnswerImgClassName ;
		this.quizAnswerTextSelector = '.' + quizAnswerTextClassName ;

		// Get the results elements
		this.quizResultsContainerEl = document.getElementById(quizResultsContainerDomId) ;
		this.quizResultsEl = document.getElementById('results') ; ///

		// Note the callback for when an answer is selected
		this.questionAnswerSelectCallback = questionAnswerSelectCallback ;

		// Get the result-line template element
		this.quizResultLineTemplateEl = document.getElementById('template_result_line') ; ///
	}

	initForQuiz(quizTitle, quizData) {
		this.quizTitleEl.innerText = quizTitle ;
		this.quizIntroTextEl.innerText = quizData.introText ;
		this.quizData = quizData ;
		this.numQuestions = this.quizData.questions.length ;
	}

	updateUI(questionIndex, questionData = null, selectedAnswerIndex = null, numAnswered = null, results = null) {
		this.questionIndex = questionIndex ;

		if (questionIndex === -1) this.showTitleElements() ;
		else if (questionData) {
			this.showQuestion(questionData, selectedAnswerIndex) ;
			this.setNextQuestionEnabledState(numAnswered) ;
		}
		else this.showResults(results.allScores, results.topScores, numAnswered) ;
	}

	setNextQuestionEnabledState(numAnswered) {
		document.getElementById('next_question').disabled = (this.questionIndex === this.numQuestions - 1 && numAnswered < this.numQuestions) ; ///
	}

	showTitleElements() {
		this.setVisibilities(true, false, false) ;
	}

	showQuestion(questionData, selectedAnswerIndex) {
		this.setVisibilities(false, true, false) ;

		// Question
		this.quizQuestionEl.innerText = questionData.question ;

		// Answer choices
		this.quizAnswersContainerEl.innerHTML = '' ;
		for (const [i, answer] of questionData.answers.entries()) {
			// Clone the template to create a new answer-choice element for the answers list
			const quizAnswerEl = this.quizAnswerTemplateEl.content.firstElementChild.cloneNode(true);

			// Set all the content for this answer-choice element
			quizAnswerEl.querySelector(this.quizAnswerImgSelector).src = answer.imageSrc ;
			quizAnswerEl.querySelector(this.quizAnswerTextSelector).innerText = answer.text ;
	
			// Add it to the answer-choices container element
			this.quizAnswersContainerEl.appendChild(quizAnswerEl) ;

			// Add click event-listener for it
			quizAnswerEl.addEventListener('click', () => this.handleAnswerSelection(i)) ;
		}

		// Set as selected answer
		if (selectedAnswerIndex !== null) {
			this.quizAnswersContainerEl.childNodes[selectedAnswerIndex].classList.add('my-card-selected') ; ///
		}
	}

	changeSelectedAnswer(answerIndex) {
		for (const [i, el] of this.quizAnswersContainerEl.childNodes.entries()) {
			el.classList.toggle('my-card-selected', (i === answerIndex)) ; ///
		}
	}

	handleAnswerSelection(answerIndex) {
		this.changeSelectedAnswer(answerIndex) ;
		const numAnswered = this.questionAnswerSelectCallback(answerIndex) ;
		this.setNextQuestionEnabledState(numAnswered) ;
	}

	showResults(allScores, topScores, numAnswered) {
		this.setVisibilities(false, false, true) ;
		this.quizResultsEl.innerHTML = "" ;
		document.getElementById('result_info').innerHTML = "" ; ///
		for (const [resultGroupIndex, [resultGroupId, score]] of Object.entries(topScores).entries()) {
			const groupData = this.quizData.resultGroups[resultGroupId] ;

			// Clone the template to create a new result-line element and set its content
			const resultLineEl = this.quizResultLineTemplateEl.content.firstElementChild.cloneNode(true) ;
			resultLineEl.querySelector('.result_text').innerText = groupData.title + ' : ' + Math.round(score * 100 / numAnswered) + '%'; ///
			this.quizResultsEl.appendChild(resultLineEl) ;

			resultLineEl.addEventListener('click', () => this.selectResultGroup(resultGroupIndex, groupData)) ;
		}

		const isTie = Object.keys(topScores).length > 1 ;
		if (!isTie) this.selectResultGroup(0, this.quizData.resultGroups[Object.keys(topScores)[0]]) ;
		document.getElementById('tie_notification').classList.toggle('d-none', !isTie) ; ///
	}

	selectResultGroup(resultGroupIndex, groupData) {
		for (const [i, el] of this.quizResultsEl.childNodes.entries()) {
			el.classList.toggle('my-card-selected', (i === resultGroupIndex)) ; ///
		}
		document.getElementById('result_info').innerHTML = markupToHtml(groupData.description) ; ///
	}

	setVisibilities(quizTitleVisible, questionVisible, resultsVisible) {
		this.quizSelectorContainerEl.classList.toggle('d-none', !quizTitleVisible) ;
		this.quizQuestionContainerEl.classList.toggle('d-none', !questionVisible) ;
		this.quizResultsContainerEl.classList.toggle('d-none', !resultsVisible) ;
	}
}