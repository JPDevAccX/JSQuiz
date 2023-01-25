// Type: Module

export default class QuizRunManager {
	newRun(quizData) {
		this.quizData = quizData ;
		this.currentQuestionIndex = -1 ; // (this denotes the title as the first question has index 0)
		this.quizRunAnswerSelections = [] ;
	}

	setAnswer(answerIndex) {
		this.quizRunAnswerSelections[this.currentQuestionIndex] = answerIndex ;
	}

	moveQuestionIndexBy(i) {
		this.currentQuestionIndex += i ;
		return [
			this.currentQuestionIndex, 
			this.quizData.questions[this.currentQuestionIndex], // (-1 index is okay here! - and we just leave it as undefined for out of bounds)
			this.quizRunAnswerSelections[this.currentQuestionIndex] // (same here)
		]  ;
	}
}