// Type: Module

export default class quizListManager {
	constructor(quizzesPath) {
		this.quizzesPath = quizzesPath ;
		this.quizList = [] ;
		this.quizMaxScore = null ;
	}

	async loadList() {
		this.quizList = (await import(this.quizzesPath + '/quizList.js')).default ;
		return deepClone(this.quizList) ;
	}

	async loadQuizByIndex(i) {
		const quizName = this.quizList[i].name ;
		this.quizData = (await import(this.quizzesPath + '/' + quizName + '.js')).default ;
		if (this.quizData.settings.type === 'correctness') this.quizMaxScore = this.calcMaxScoreForGroup('score') ;
		return deepClone(this.quizData) ;
	}

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
}