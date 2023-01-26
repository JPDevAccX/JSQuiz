// Type: Module

export default {
	settings: {
		type: 'correctness',
	},
	introText: "This is an awesome space-themed knowledge quiz!",
	questions: [
		{
			question: 'Is this a question?',
			answers: [
				{
					text: 'Yes',
					imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
					weights: { score : 1 }
				},
				{
					text: 'No',
					imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
					weights: { score : 0 }
				}
			]
		},
		{
		question: 'Was that last question stupid?',
			answers: [
				{
					text: 'Yes',
					imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
					weights: { score : 1 }
				},
				{
					text: 'No',
					imageSrc: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
					weights: { score : 0 }
				}
			]
		}
	],
	resultGroups: {
		0: "Plenty of space somewhere!",
		25: "Achieving orbit is looking unlikely!",
		50: "You might get as far as the moon!",
		75: "Three out of four stars!",
		100: "Galactic perfection!"
	}
} ;