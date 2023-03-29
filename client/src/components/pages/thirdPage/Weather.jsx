import React from 'react'

const Weather = (props) => {
  return (
    <div className={props.weatherDetails}>
        {props.detail} <span>{props.setDetail}</span>
    </div>
  )
}

export default Weather