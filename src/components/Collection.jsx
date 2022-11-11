import React from 'react'

export const Collection = ({name, images}) => {
  return (
    <div className='collection'>
      <img className='collection_big' src={images[0]} />
      <div className='collection_bottom'>
         <img className='collection_mini' src={images[1]}/>
         <img className='collection_mini' src={images[2]}/>
         <img className='collection_mini' src={images[3]}/>
      </div>
      <h4>{name}</h4>
    </div>
  )
}
