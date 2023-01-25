// Type: Module

export default class QuizRunManager {
	newRun(quizData) {
		this.quizData = quizData ;
		this.currentQuestionIndex = -1 ; // (this denotes the title as the first question has index 0)
		this.quizRunAnswerSelections = [] ;
	}

	setAnswer(answerIndex) {
		console.log("set answer " + answerIndex + " for question " + this.currentQuestionIndex) ;
		this.quizRunAnswerSelections[this.currentQuestionIndex] = answerIndex ;
	}

	moveQuestionIndexBy(i) {
		this.currentQuestionIndex += i ;
		return [this.quizData.questions[this.currentQuestionIndex] || null, this.currentQuestionIndex]  ;
	}
}