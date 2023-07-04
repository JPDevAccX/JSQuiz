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

// --- Load README for "Site Information" tab ---
// (as we're using fetch this won't work with local file access - however, this is the case already due to use of ES6 modules anyway)
fetch('README.md').
	then(response => response.text()).
	then(responseText => document.getElementById('tab_siteinfo').innerText = responseText).
	catch(() => document.getElementById('tab_siteinfo').innerText = 'Error loading README file') ;

// --- Tab-selection handling ---
document.getElementById('link_tab_quiz').addEventListener('click', (e) => setActivePage(e.target)) ;
document.getElementById('link_tab_siteinfo').addEventListener('click', (e) => setActivePage(e.target)) ;
function setActivePage(tabLinkEl) {
	document.querySelectorAll('.nav-link').forEach(el => {
		const tabContentsEl = document.getElementById(el.id.substring(5)) ; // (use the convention that the contents id is the same as the link id minus the 'link_')
		// Update state for all nav links and corresponding tab content elements
		if (el === tabLinkEl) {
			el.classList.add('active') ;
			el.setAttribute('aria-current', 'page') ;
			tabContentsEl.classList.remove('d-none') ;
			tabContentsEl.ariaHidden = "false"
		}
		else {
			el.classList.remove('active') ;
			el.removeAttribute('aria-current') ;
			tabContentsEl.classList.add('d-none') ;
			tabContentsEl.ariaHidden = "true"
		}
	}) ;
}

doQuizSetup() ;

// ---------------------------------------------------------------------------------------------------------------------------------

async function doQuizSetup() {
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

	// Add an event listener to disable the next-question button during the carousel slide (to avoid race condition)
	carouselEl.addEventListener('slide.bs.carousel', () => {
		document.querySelector(selectors.nextQuestionButton).disabled = true ;
	}) ;

	// Add an event listener to handle the carousel selection having changed
	carouselEl.addEventListener('slid.bs.carousel', async event => {
		// Load the data for the newly selected quiz and update the UI accordingly
		const newQuizIndex = event.to ;
		const quizData = await quizDataManager.loadQuizByIndex(newQuizIndex) ;
		quizUIManager.initForQuiz(quizList[newQuizIndex].title, quizData) ;
		document.querySelector(selectors.nextQuestionButton).disabled = false ; // (re-enable next-question button)

		// Start a new run for this quiz
		quizRunManager.newRun(quizData) ;
	}) ;

	// Show the body-content now setup is complete
	document.querySelector(selectors.quizBody).classList.remove('invisible') ;

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