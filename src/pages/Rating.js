import React from 'react'

const Rating = ({rating, onClick, style}) => {
  return (
    <div>
       {
       [...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i) } style={style}>
          {
            rating > i ? (<i className="fa fa-star" aria-hidden="true"></i>
            ) : (<i className="fa fa-star-o" aria-hidden="true"></i>)

          }
        </span>
       ))
      }
    </div>
  )
}

export default Rating
