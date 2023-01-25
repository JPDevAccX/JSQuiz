// Type: Module

export default class QuizListUIManager {
	constructor(
		quizListContainerDomId,
		quizListEntryTemplateDomId,
		quizListEntryImgClassName,
		quizListEntryTitleClassName,
		quizListEntrySummaryClassName
	) {
		// Get the list container element
		this.quizListContainerEl = document.getElementById(quizListContainerDomId) ;

		// Get the quiz-list-entry template element and note the class selectors for the elements within
		this.quizListEntryTemplateEl = document.getElementById(quizListEntryTemplateDomId) ;
		this.quizListEntryImgSelector = '.' + quizListEntryImgClassName ;
		this.quizListEntryTitleSelector = '.' + quizListEntryTitleClassName ;
		this.quizListEntrySummarySelector = '.' + quizListEntrySummaryClassName ;
	}

	createQuizSelectionOptions(quizList) {
		for (const quizEntry of quizList) {
			// Clone the template to create a new quiz entry element for the quiz list
			const quizListEntryEl = this.quizListEntryTemplateEl.content.firstElementChild.cloneNode(true);

			// Set all the content for this quiz entry element
			quizListEntryEl.querySelector(this.quizListEntryImgSelector).src = quizEntry.imageSrc ;
			quizListEntryEl.querySelector(this.quizListEntryImgSelector).alt = quizEntry.title + ' : ' + quizEntry.summary ;
			quizListEntryEl.querySelector(this.quizListEntryTitleSelector).innerText = quizEntry.title ;
			quizListEntryEl.querySelector(this.quizListEntrySummarySelector).innerText = quizEntry.summary ;
	
			// Add it to the list container element
			this.quizListContainerEl.appendChild(quizListEntryEl) ;
		}

		// Set the first one as active
		this.quizListContainerEl.firstElementChild.classList.add('active') ;
	}
}