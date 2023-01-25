// Type: Module (with side-effects)
import QuizDataManager from "./quizDataManager.js";
import QuizListUIManager from "./quizListUIManager.js";
import QuizRunManager from "./quizRunManager.js";
import QuizUIManager from "./quizUIManager.js";

// --- Create manager objects ---
const quizDataManager = new QuizDataManager('../quizzes') ; // (manages the quiz-list / current-quiz data)

const quizListUIManager = new QuizListUIManager( // (manages the quiz-list user-interface)
	'quiz_list_container', 
	'template_carousel_item',
	'carousel_item_img',
	'carousel_item_title',
	'carousel_item_summary'
) ;

const quizRunManager = new QuizRunManager() ; // (manages the current quiz state)

const quizUIManager = new QuizUIManager( // (manages the user-interface for the current quiz)
	'quiz_selector_container',
	'quiz_title',
	'quiz_intro_text',
	'question_container',
	'question',
	'answers',
	'template_answer_choice',
	'answer_choice_img',
	'answer_choice_text',
	'results_container',
	questionIndexChangeCallback,
	handleAnswerSelection
) ;

doSetup() ;

// ---------------------------------------------------------------------------------------------------------------------------------

async function doSetup() {
	// Load the quiz list and create UI elements for it
	const quizList = await quizDataManager.loadList() ;
	quizListUIManager.createQuizSelectionOptions(quizList) ;

	// Load the data for the first quiz in the list and update the UI accordingly
	const quizData = await quizDataManager.loadQuizByIndex(0) ;
	quizUIManager.setQuizTitleInfo(quizList[0].title, quizData) ;
	quizUIManager.updateUI(null, -1) ; // (no question, question #-1 = title)

	// Start a new run for this quiz
	quizRunManager.newRun(quizData) ;

	// Do the basic setup for the quiz-list bootstrap carousel
	const carouselEl = document.querySelector('#carousel')
	new bootstrap.Carousel(carouselEl, { interval: 2000, touch: false }) ;

	// Add an event listener to handle the carousel selection being changed
	carouselEl.addEventListener('slid.bs.carousel', async event => {
		// Load the data for the newly selected quiz and update the UI accordingly
		const newQuizIndex = event.to ;
		const quizData = await quizDataManager.loadQuizByIndex(newQuizIndex) ;
		quizUIManager.setQuizTitleInfo(quizList[newQuizIndex].title, quizData) ;

		// Start a new run for this quiz
		quizRunManager.newRun(quizData) ;
	})
}

function questionIndexChangeCallback(questionIndexDelta) {
	const [questionData, questionIndex] = quizRunManager.moveQuestionIndexBy(questionIndexDelta) ;
	quizUIManager.updateUI(questionData, questionIndex) ;
}

function handleAnswerSelection(answerIndex) {
	quizRunManager.setAnswer.bind(quizRunManager)(answerIndex) ;
}