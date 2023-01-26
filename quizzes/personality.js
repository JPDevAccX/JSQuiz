// Type: Module

export default {
	settings: {
		type: 'categories',
		minAnswers: 6
	},
	introText: `There are three basic learning styles. These are visual, auditory, and kinesthetic.
		To learn, we depend on our senses to process the information around us.
		Most people	tend to use one of their senses more than the others.
		Read the questions below and select the answer that fits best, without thinking too much.
		Go with your first choice.`,
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
		},
			{
			question: 'When you read for fun, do you prefer...',
			answers: [
				{
					text: 'A travel book with a lot of pictures in it',
					imageSrc: 'https://images.unsplash.com/photo-1517037038155-0b2a18c1a69e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { a : 1 }
				},
				{
					text: 'A mystery book with a lot of conversation in it',
					imageSrc: 'https://images.unsplash.com/photo-1580920790557-43158492adb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'A book where you answer questions and solve problems',
					imageSrc: 'https://images.unsplash.com/photo-1587093336587-eeca6cb17cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvYmxlbSUyMHNvbHZpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
					weights: { c : 1 }
				}
			]
		},
		{
			question: 'To learn how a computer works, would you rather...',
			answers: [
				{
					text: 'Watch a movie about it',
					imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { a : 1 }
				},
				{
					text: 'Listen to someone explain it',
					imageSrc: 'https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Take the computer apart and try to figure it out for yourself',
					imageSrc: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		},
			{
			question: 'You have just entered a science museum, what will you do first?',
			answers: [
				{
					text: 'Look around and find a map showing the locations of the various exhibits',
					imageSrc: 'https://images.unsplash.com/photo-1601296200639-89349ce76a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { a : 1 }
				},
				{
					text: 'Talk to a museum guide and ask about exhibits',
					imageSrc: 'https://images.unsplash.com/photo-1530107973768-581951e62d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Go into the first exhibit that looks interesting, and read directions later',
					imageSrc: 'https://images.unsplash.com/photo-1632665745163-84b8342ee740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
					weights: { c : 1 }
				}
			]
		},
			{
			question: 'What kind of restaurant would you rather not go to?',
			answers: [
				{
					text: 'One with the lights too bright',
					imageSrc: 'https://images.unsplash.com/photo-1508349356983-7838c2b04eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
					weights: { a : 1 }
				},
				{
					text: 'One with the music too loud',
					imageSrc: 'https://images.unsplash.com/photo-1505682614136-0a12f9f7beea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
					weights: { b : 1 }
				},
				{
					text: 'One with uncomfortable chairs',
					imageSrc: 'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		},
		{
			question: 'Would you rather go to...',
			answers: [
				{
					text: 'An art class',
					imageSrc: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
					weights: { a : 1 }
				},
				{
					text: 'A music class',
					imageSrc: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { b : 1 }
				},
				{
					text: 'An exercise class',
					imageSrc: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		},
		{
			question: 'Which are you most likely to do when you are happy?',
			answers: [
				{
					text: 'Grin',
					imageSrc: 'https://images.unsplash.com/photo-1530649298728-6dbb4c3f5bc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80',
					weights: { a : 1 }
				},
				{
					text: 'Shout with joy',
					imageSrc: 'https://images.unsplash.com/photo-1521417170173-29cd2de82858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
					weights: { b : 1 }
				},
				{
					text: 'Jump for joy',
					imageSrc: 'https://images.unsplash.com/photo-1530750463537-af1c747d8d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
					weights: { c : 1 }
				}
			]
		},
		{
			question: 'If you were at a party, what would you be most likely to remember the next day?',
			answers: [
				{
					text: 'The faces of the people there, but not the names',
					imageSrc: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
					weights: { a : 1 }
				},
				{
					text: 'The names but not the faces',
					imageSrc: 'https://images.unsplash.com/photo-1508061538535-6effdf9eb6f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
					weights: { b : 1 }
				},
				{
					text: 'The things you did and said while you were there',
					imageSrc: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
					weights: { c : 1 }
				}
			]
		}
	],
	resultGroups: {
		a : {
			title: "Visual Learner",
			description: `
			[b]You learn by seeing and looking. Visual Learners...[/b]
			[ul]
				[li]take numerous detailed notes[/li]
				[li]tend to sit in the front[/li]
				[li]are usually neat and clean[/li]
				[li]often close their eyes to visualize or remember something[/li]
				[li]are attracted to written or spoken language rich in imagery[/li]
			[/ul]
			`
		},
		b : {
			title: "Auditory Learner",
			description: `
			[b]You learn by hearing and listening. Auditory Learners...[/b]
			[ul]
				[li]sit where they can hear but needn't pay attention to what is happening in front[/li]
				[li]may not coordinate colors or clothes, but can explain why they are wearing what they are wearing and why[/li]
				[li]hum or talk to themselves or others when bored[/li]
				[li]acquire knowledge by reading aloud[/li]
				[li]remember by verbalizing lessons to themselves[/li]
			[/ul]
			`
		},
		c : {
			title: "Kinesthetic Learner",
			description: `
			[b]You learn by touching and doing. Kinesthetic Learners...[/b]
			[ul]
				[li]need to be active and take frequent breaks[/li]
				[li]speak with their hands and with gestures[/li]
				[li]remember what was done, but have difficulty recalling what was said or seen[/li]
				[li]find reasons to tinker or move when bored[/li]
				[li]rely on what they can directly experience or perform[/li]
			[/ul]
			`
		}
	}
} ;