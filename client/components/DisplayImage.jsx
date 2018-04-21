import React from 'react'

export default function DisplayImage ({creAnimal, nextIndex, prevIndex}) {
    
	return (
		<div>
			<h2>{creAnimal.name}</h2>
			<img src={creAnimal.img_url_head} />
			<img src={creAnimal.img_url_body} />
			<br/>
			<button onClick={prevIndex}>Back!</button>
			<button onClick={nextIndex}>Next!</button>
		</div>
	)
}