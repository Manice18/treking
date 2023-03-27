import React from 'react'

const Suggest = (props) => {
  return (
    <div className="suggest">
        <div class="image-container">
                <img
                  src={props.imageUrl}
                  alt="Description of the image"
                />
              </div>
            <div className="description">
                <p>{props.heading}</p>
                <br></br>
                <p>{props.description}</p>
            </div>
    </div>
  )
}

export default Suggest