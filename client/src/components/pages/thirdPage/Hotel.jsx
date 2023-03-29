import React from 'react'

const Hotel = (props) => {
  return (
    <div className={props.myClass}>
        <div className="desc">
        <h5>Hotel Name</h5>
        <p>hotel description</p></div>
    </div>
  )
}

export default Hotel