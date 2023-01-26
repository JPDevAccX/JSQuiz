// Type: Module

export default {
	introText: `
		There are three basic learning styles. These are visual, auditory, and kinesthetic.
		To learn, we depend on our senses to process the information around us.
		Most people	tend to use one of their senses more than the others.
		Read the questions below and select the answer that fits best, without thinking too much.
		Go with your first choice.
	`,
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
		},
		{
			question: 'When you work at solving a problem do you...',
			answers: [
				{
					text: 'Make a list, organize the steps, and check them off as they are done',
					imageSrc: 'https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { a : 1 }
				},
				{
					text: 'Make a few phone calls and talk to friends or experts',
					imageSrc: 'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Make a model of the problem or walk through all the steps in your mind',
					imageSrc: 'https://images.unsplash.com/photo-1637729960394-1a1200764aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2049&q=80',
					weights: { c : 1 }
				}
			]
		}
	],
	resultGroups: {
		a : {
			title: "Visual Learner",
			description: `
			You learn by seeing and looking. Visual Learners...
			[ul]
				[li]<script>take numerous detailed notes[/li]
				[li]tend to sit in the front[/li]
				[li]are usually neat and clean[/li]
			[/ul]
			`
		},
			b : {
			title: "Auditory Learner",
			description: `
			You learn by hearing and listening. Auditory Learners...
			[ul]
				[li]sit where they can hear but needn't pay attention to what is happening in front[/li]
				[li]may not coordinate colors or clothes, but can explain why they are wearing what they are wearing and why[/li]
				[li]hum or talk to themselves or others when bored[/li]
			[/ul]
			`
		},
			c : {
			title: "Kinesthetic Learner",
			description: `
			You learn by touching and doing. Kinesthetic Learners...
			[ul]
				[li]need to be active and take frequent breaks[/li]
				[li]speak with their hands and with gestures[/li]
				[li]remember what was done, but have difficulty recalling what was said or seen[/li]
			[/ul]
			`
		}
	}
} ;