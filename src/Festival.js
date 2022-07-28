import React from 'react'

function Festival({country, name, text, url, img}) {
  return (
    <div className='fest_container'>
      <h2>{name} - {country}</h2>
      <img src={img} alt={name}/>
      <p>{text}</p>
      <a href={url}>Visit festival site</a>
    </div>
  )
}

export default Festival
