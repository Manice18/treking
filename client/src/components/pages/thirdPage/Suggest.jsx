import React from 'react'
import { useState } from 'react';

const Suggest = (props) => {
  // const [suggesData, setSuggesData] = useState([{}]);
  // axios.get('http://localhost:5000/sugges').then((res) => {setSuggesData(res.data)}).catch((err) => console.log(err));
  return (
    <div className="suggest">
        <div className="image-container">
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