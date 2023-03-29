import React from 'react'
import { useState,useEffect } from 'react'

const Third = () => {
  const [newData, setnewData] = useState([{}])
  useEffect(()=>{
    fetch('http://localhost:4000/sugges').then(res=> res.json()).then(data=>setnewData(data));
  },[])
  return (
    <div></div>
  )
}

export default Third