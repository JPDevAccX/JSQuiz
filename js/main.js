// Type: Module (with side-effects)
import selectors from "./selectors.js" ;
import QuizDataManager from "./quizDataManager.js";
import QuizListUIManager from "./quizListUIManager.js";
import QuizRunManager from "./quizRunManager.js";
import QuizUIManager from "./quizUIManager.js";

// --- Create manager objects ---
const quizDataManager = new QuizDataManager('../quizzes') ; // (manages the quiz-list / current-quiz data)
const quizListUIManager = new QuizListUIManager(selectors) // (manages the quiz-list user-interface)
const quizRunManager = new QuizRunManager() ; // (manages the current quiz state)
const quizUIManager = new QuizUIManager(selectors, questionIndexChangeCallback, handleAnswerSelection) ; // (manages the user-interface for the current quiz)

doSetup() ;

// ---------------------------------------------------------------------------------------------------------------------------------

async function doSetup() {
	// Load the quiz list and create UI elements for it
	const quizList = await quizDataManager.loadList() ;
	quizListUIManager.createQuizSelectionOptions(quizList) ;

	// Load the data for the first quiz in the list and update the UI accordingly
	const quizData = await quizDataManager.loadQuizByIndex(0) ;
	quizUIManager.initForQuiz(quizList[0].title, quizData) ;
	quizUIManager.updateUI(-1) // question #-1 = title

	// Start a new run for this quiz
	quizRunManager.newRun(quizData) ;

	// Do the basic setup for the quiz-list bootstrap carousel
	const carouselEl = document.querySelector('#carousel')
	new bootstrap.Carousel(carouselEl, { interval: 2000, touch: false }) ;

	// Add an event listener to disable the start-quiz button during the carousel slide (to avoid race condition)
	carouselEl.addEventListener('slide.bs.carousel', () => {
		document.querySelector(selectors.quizStartButton).disabled = true ;
	}) ;

	// Add an event listener to handle the carousel selection having changed
	carouselEl.addEventListener('slid.bs.carousel', async event => {
		// Load the data for the newly selected quiz and update the UI accordingly
		const newQuizIndex = event.to ;
		const quizData = await quizDataManager.loadQuizByIndex(newQuizIndex) ;
		quizUIManager.initForQuiz(quizList[newQuizIndex].title, quizData) ;
		document.querySelector(selectors.quizStartButton).disabled = false ; // (re-enable start-quiz button)

		// Start a new run for this quiz
		quizRunManager.newRun(quizData) ;
	}) ;
}

function questionIndexChangeCallback(questionIndexDelta) {
	const [questionIndex, questionData, answerIndex] = quizRunManager.moveQuestionIndexBy(questionIndexDelta) ;
	const numAnswered = quizRunManager.getNumAnswered() ;
	const results = (questionIndex > -1 && !questionData) ? quizRunManager.calcResults() : null ;
	quizUIManager.updateUI(questionIndex, questionData, answerIndex, numAnswered, results, quizDataManager.getQuizMaxScore()) ;
}

function handleAnswerSelection(answerIndex) {
	return quizRunManager.setAnswer.bind(quizRunManager)(answerIndex) ;
}