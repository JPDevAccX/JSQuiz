// Type: Module

export default class quizListManager {
	constructor(quizzesPath) {
		this.quizzesPath = quizzesPath ;
		this.quizList = [] ;
		this.quizMaxScore = null ;
		this.quizIndex = null ;
	}

	async loadList() {
		this.quizList = (await import(this.quizzesPath + '/quizList.js')).default ;
		return deepClone(this.quizList) ;
	}

	async loadQuizByIndex(i) {
		this.quizIndex = i ;
		const quizName = this.quizList[i].name ;
		this.quizData = (await import(this.quizzesPath + '/' + quizName + '.js')).default ;
		if (this.quizData.settings.type === 'correctness') this.quizMaxScore = this.calcMaxScoreForGroup('score') ;
		return deepClone(this.quizData) ;
	}

	// Calculate the maximum achievable score for the current quiz
	// (used for scored 'correctness' type quizzes to determine final percentage)
	calcMaxScoreForGroup(groupId) {
		let maxScoreForQuiz = 0 ;
		for (const question of this.quizData.questions) {
			let maxScoreForQuestion = 0 ;
			for (const answer of question.answers) {
				maxScoreForQuestion = Math.max(maxScoreForQuestion, answer.weights[groupId] || 0) ;
			}
			maxScoreForQuiz += maxScoreForQuestion ;
		}
		return maxScoreForQuiz ;
	}

	getQuizMaxScore() {
		return this.quizMaxScore ;
	}

	getCurrentQuizIndex() {
		return this.quizIndex ;
	}

	getQuizList() {
		return deepClone(this.quizList) ;
	}

	getCurrentQuizData() {
		return deepClone(this.quizData) ;
	}
}