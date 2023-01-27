Project brief: "Create a category-based quiz (e.g. personality quiz) that will ask a series of questions and produce a result on completion"

Project scope: Single HTML page with external CSS stylesheet, and use of JavaScript for dynamic layout / content / styling

Main objectives:
1. Three quiz sections - 'intro', 'current question', 'result' - with only one visible at any time
2. Adhere to the usual best-practices for navigation / accessibility

Secondary objectives:
1. Well-factored / abstracted code with a focus on reusability

Content and functionality:
I chose to create a quiz system that supports multiple quizzes, selectable from a single HTML page.
The quiz content itself is specified in ES6 module "data" files (exported objects), providing a lot of flexibility (although JSON could certainly have been used instead).
JavaScript is used to toggle a Bootstrap class for each section which hides container elements as needed, thereby meeting the main requirement for dynamic content.

Notes:
All images are currently fetched from external resources - all these images are available as of writing (2023-01-27)
I have deviated slightly from the brief with the personality quiz as it is not necessary to answer all the questions (but this can easily be changed in the quiz data-file).
All questions must be answered in the 'knowledge' quiz however in order to proceed to the results section.