// Type: Module

export default class QuizListUIManager {
	constructor(selectors) {
		// Get elements / templates
		const keysToRetrieve = ['quizListContainer', 'quizListEntryTemplate'] ;
		this.els = getElementsBySelector(selectors, keysToRetrieve) ;

		// Note the selectors for accessing elements in newly created template clones
		this.selectors = selectors ;
	}

	createQuizSelectionOptions(quizList) {
		for (const quizEntry of quizList) {
			// Clone the template to create a new quiz entry element for the quiz list
			const quizListEntryEl = this.els.quizListEntryTemplate.content.firstElementChild.cloneNode(true);

			// Set all the content for this quiz entry element
			quizListEntryEl.querySelector(this.selectors.quizListEntryImg).src = quizEntry.imageSrc ;
			quizListEntryEl.querySelector(this.selectors.quizListEntryImg).alt = quizEntry.title + ' : ' + quizEntry.summary ;
			quizListEntryEl.querySelector(this.selectors.quizListEntryTitle).innerText = quizEntry.title ;
			quizListEntryEl.querySelector(this.selectors.quizListEntrySummary).innerText = quizEntry.summary ;
	
			// Add it to the list container element
			this.els.quizListContainer.appendChild(quizListEntryEl) ;
		}

		// Set the first one as active
		this.els.quizListContainer.firstElementChild.classList.add('active') ;
	}
}