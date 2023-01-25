// Type: Module (with side-effects)
import QuizDataManager from "./quizDataManager.js";
import QuizListUIManager from "./quizListUIManager.js";

// --- Create manager objects ---
const quizDataManager = new QuizDataManager('../quizzes') ; // (manages the quiz-list / current-quiz data)

const quizListUIManager = new QuizListUIManager( // (manages the quiz-list user-interface)
	'quiz_list_container', 
	'template_carousel_item',
	'carousel_item_img',
	'carousel_item_title',
	'carousel_item_summary'
) ;

doSetup() ;

// ---------------------------------------------------------------------------------------------------------------------------------

async function doSetup() {
	// Load the quiz list and create UI elements for it
	const quizList = await quizDataManager.loadList() ;
	quizListUIManager.createQuizSelectionOptions(quizList) ;

	console.log({quizList}) ;

	// Load the data for the first quiz in the list
	const quizData = await quizDataManager.loadQuizByIndex(0) ;

	console.log({quizData}) ;

	// Do the basic setup for the quiz-list bootstrap carousel
	const carouselEl = document.querySelector('#carousel')
	new bootstrap.Carousel(carouselEl, { interval: 2000, touch: false }) ;

	// Add an event listener to handle the carousel selection being changed
	carouselEl.addEventListener('slid.bs.carousel', async event => {
		// Load the data for the newly selected quiz and update the UI accordingly
		const newQuizIndex = event.to ;
		const quizData = await quizDataManager.loadQuizByIndex(newQuizIndex) ;

		console.log({newQuizIndex, quizData}) ;
	})
}