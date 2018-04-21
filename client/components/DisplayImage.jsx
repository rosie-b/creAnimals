import React from 'react'

export default function DisplayImage ({creAnimal, nextIndex, prevIndex}) {
    
    return (
        <div className="displayImg">
            <h2>{creAnimal.name}</h2>
            <img src={creAnimal.img_url_head} />
            <br/>
            <button onClick={prevIndex}>Back!</button>
            <button onClick={nextIndex}>Next!</button>
        </div>
    )
}