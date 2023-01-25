// Type: Module (with side-effects)
import QuizDataManager from "./quizDataManager.js";

// --- Create manager objects ---
const quizDataManager = new QuizDataManager('/quizzes') ; // (manages the quiz-list / current-quiz data)

doSetup() ;

// ---------------------------------------------------------------------------------------------------------------------------------

async function doSetup() {
	// Load the quiz list
	const quizList = await quizDataManager.loadList() ;

	console.log({quizList}) ;

	// Load the data for the first quiz in the list
	const quizData = await quizDataManager.loadQuizByIndex(0) ;

	console.log({quizData}) ;
}