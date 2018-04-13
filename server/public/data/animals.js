import React from 'react'

// farm animal images could be useful https://www.freepik.com/free-vector/farm-elements-design_965160.htm#term=farm&page=1&position=3
// zoo animal images could be useful https://www.freepik.com/free-vector/cute-zoo-animals_1585943.htm#term=cartoon%20animals%20free&page=1&position=0

const animals = [
	{id: 1,
	name: 'Cat',
	image_1: '/images/cat-head.png', // url path to png image of HEAD
	image_2: '/images/cat-body.png' // url path to png image of BODY
	},
	
	{id: 2,
		name: 'Dog',
		image_1: '/images/dog-head.png', // url path to png image of HEAD
		image_2: '/images/dog-body.png' // url path to png image of BODY
	},

	{id: 3,
		name: 'Sheep',
		image_1: '/images/sheep-head.png', // url path to png image of HEAD
	image_2: '/images/sheep-body.png' // url path to png image of BODY
		},

	{id: 4,
		name: 'Fox',
		image_1: '/images/fox-head.png', // url path to png image of HEAD
		image_2: '/images/fox-body.png' // url path to png image of BODY
		},
	
	{id: 5,
		name: 'Mouse',
		image_1: '/images/mouse-head.png', // url path to png image of HEAD
		image_2: '/images/mouse-body.png' // url path to png image of BODY
		}
]

export default animals