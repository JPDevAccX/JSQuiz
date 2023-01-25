// Type: Module

export default {
	introText: "This is an awesome personality quiz!",
	questions: [
		{
			question: 'When you study for a test, would you rather...',
			answers: [
				{
					text: 'Read notes, read headings in a book, and look at diagrams and illustrations',
					imageSrc: 'https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
					weights: { a : 1 }
				},
				{
					text: 'Have someone ask you questions, or repeat facts silently to yourself',
					imageSrc: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Write things out on index cards and make models or diagrams',
					imageSrc: 'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		},
		{
			question: 'Which of these do you do when you listen to music?',
			answers: [
				{
					text: 'Daydream (see things that go with the music)',
					imageSrc: 'https://images.unsplash.com/photo-1494894578460-6707508a7fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { a : 1 }
				},
				{
					text: 'Hum along',
					imageSrc: 'https://images.unsplash.com/photo-1575470072327-b3369f3ecd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Move with the music, tap your foot, etc',
					imageSrc: 'https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		}
	],
} ;
