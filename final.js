//an array of Warren's photos for the gallery

var photos = [
	{
		index: 0,
		src: '3monkeys.jpg',
		alt: 'three dancers',
		title: 'three dancers',
		caption: 'Warren performing in Three Monkeys',
		photo_credit: 'Kapchur.us'
	},
	{
		index: 1,
		src: 'ariel1.jpg',
		alt: 'Warren leading Ariel',
		title: 'Warren leading Ariel',
		caption: 'Ariel at the start of an inside turn',
		photo_credit: 'Leo Zeus Photography'
	},
	{
		index: 2,
		src: 'barre.jpg',
		alt: 'Warren standing at the barre',
		title: 'Warren standing at the barre',
		caption: "This was taken at Exit Space School of Dance.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 3,
		src: 'chair.jpg',
		alt: 'Warren jumps over a chair',
		title: 'Warren jumps over a chair', 
		caption: "This was taken at Exit Space School of Dance.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 4,
		src: 'firehydrant.jpg',
		alt: 'tree pose on fire hydrant',
		title: 'tree pose on fire hydrant', 
		caption: 'Playing with tree pose on a fire hydrant',
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 5,
		src: 'focused.jpg',
		alt: 'dancing with Catherine Eisenhauer',
		title: 'dancing with Catherine Eisenhauer',
		caption: "Blues dancing with Catherine at Emerald City Blues Festival, 2009",
		photo_credit: 'Dennis Goetz'
	},
	{
		index: 6,
		src: 'fountain_leap.jpg',
		alt: 'leaping in front of the fountain at Seattle Center',
		title: 'leaping in front of the fountain at Seattle Center',
		caption: "Warren and Rachel leap for a Seattle Center photo shoot",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 7,
		src: 'hat.jpg',
		alt: 'Black and white photo of me in a fedora',
		title: 'Black and white photo of me in a fedora',
		caption: "Another photo from the Three Monkeys performance",
		photo_credit: 'Kapchur.us'
	},
	{
		index: 8,
		src: 'hawt.jpg',
		alt: 'Warren in a suit',
		title: 'Warren in a suit',
		caption: "Attempting to pose for the photographer",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 9,
		src: 'inverted.jpg',
		alt: 'Downward dog on a bike rack',
		title: 'Downward dog on a bike rack',
		caption: "Exploring ways to play with downward dog.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 10,
		src: 'inverted2.jpg',
		alt: 'Cobra pose with the same bike rack',
		title: 'Cobra pose with the same bike rack',
		caption: "Playing with cobra off the ground.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 11,
		src: 'juggling1.jpg',
		alt: 'Juggling clubs',
		title: 'Juggling clubs',
		caption: "The photographer was able to capture an amazing shadow in this one.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 12,
		src: 'juggling2.jpg',
		alt: 'Juggling clubs in a studio',
		title: 'Juggling clubs in a studio',
		caption: "The chair and mop in the background are prominently featured in other photos.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 13,
		src: 'juggling3.jpg',
		alt: 'Juggling in front of a mirror',
		title: 'Juggling in front of a mirror',
		caption: "The photographer caught a nice mirror angle in this one.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 14,
		src: 'jugglingpose.jpg',
		alt: 'Sitting with juggling clubs',
		title: 'Sitting with juggling clubs',
		caption: "Resting between photos of me juggling.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 15,
		src: 'mop.jpg',
		alt: 'Dancing with a dry mop',
		title: 'Dancing with a dry mop',
		caption: "Dancing before cleaning.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 16,
		src: 'serious.jpg',
		alt: 'Warren squatting',
		title: 'Warren squatting',
		caption: "The photographer did a good job editing the color of this one.",
		photo_credit: 'Danny Blanchard' 
	},
	{
		index: 17,
		src: 'shantel.jpg',
		alt: 'Dancing with Shantel',
		title: 'Dancing with Shantel',
		caption: "Dancing at Om Fusion with Shantel.",
		photo_credit: 'Josh Lieberman' 
	},
	{
		index: 18,
		src: 'shantel2.jpg',
		alt: 'Dipping Shantel',
		title: 'Dipping Shantel',
		caption: "Shantel looks like she's having fun.",
		photo_credit: 'Josh Lieberman'
	},
	{
		index: 19,
		src: 'shantel3.jpg',
		alt: 'Turning myself with Shantel',
		title: 'Turning myself with Shantel',
		caption: "Dancing with Shantel at a house party.",
		photo_credit: 'Sacha Healey'
	},
	{
		index: 20,
		src: 'warren_improv1.jpg',
		alt: 'Improvising at Exit Space',
		title: 'Improvising at Exit Space',
		caption: "Playing with space and lines.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 21,
		src: 'warren_improv2.jpg',
		alt: 'Kneeling and reaching upward',
		title: 'Kneeling and reaching upward',
		caption: "Expressing movement and reach.",
		photo_credit: 'Christopher Bachmann Photography, www.checkmate.net'
	},
	{
		index: 22,
		src: 'yogasidecrow.jpg',
		alt: 'Side crow pose',
		title: 'Side crow pose',
		caption: "Dressing up for a side crow.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 23,
		src: 'yogawarrior3.jpg',
		alt: 'Warrior 3 yoga pose',
		title: 'Warrior 3 yoga pose',
		caption: "Doing Warrior 3 on concrete.",
		photo_credit: 'Danny Blanchard'
	},
	{
		index: 24,
		src: 'yogawheel.jpg',
		alt: 'Wheel pose',
		title: 'Wheel pose',
		caption: "Nice use of perspective makes it look like the bike rack is under me.",
		photo_credit: 'Danny Blanchard' 
	}
]
