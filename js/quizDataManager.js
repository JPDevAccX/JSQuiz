// Type: Module

export default class quizListManager {
	constructor(quizzesPath) {
		this.quizzesPath = quizzesPath ;
		this.quizList = [] ;
	}

	async loadList() {
		this.quizList = (await import(this.quizzesPath + '/quizList.js')).default ;
		return deepClone(this.quizList) ;
	}

	async loadQuizByIndex(i) {
		const quizName = this.quizList[i].name ;
		this.quizData = (await import(this.quizzesPath + '/' + quizName + '.js')).default ;
		return deepClone(this.quizData) ;
	}
}