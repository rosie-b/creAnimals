import React from 'react'

export default function DisplayImage ({creAnimal, nextIndex, prevIndex}) {
    
	return (
		<div>
			<h2>{creAnimal.name}</h2>
			<div className = 'displayImg'>
				<div className = 'imgContainer'>
					<div className = 'imgHead'>
						<img className = 'imgH' src={creAnimal.img_url_head} />
					</div>
					<div className = 'imgBody'>
						<img className = 'imgB'src={creAnimal.img_url_body} />
					</div>
				</div>
			</div>
			<br/>
			<button onClick={prevIndex}>Back!</button>
			<button onClick={nextIndex}>Next!</button>
		</div>
	)
}