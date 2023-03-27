import React from 'react';
import { HelmetProvider,Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {TbLocationFilled} from "react-icons/tb";


export const SearchBar = ({setResults}) => {
    const [input,setInput] = useState("");

    const fetchData = (value) => {
        fetch("http://localhost:5000/state").then((response)=> response.json()).then(json => {
            const results =json.filter((statename)=> {
                return value && statename && statename.stateName && statename.stateName.toLowerCase().includes(value);
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return <>
        <HelmetProvider>
        <Helmet>
            <style>{`
            @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

.input-wrapper{
    background-color: #335333;
    color:#fff;
    width:100%;
    border-radius: 0.8vh;
    height: 2.8rem;
    padding: 0 15px;
    box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
} 

input{
    font-family: Helvetica, sans-serif;
    background-color: transparent;
    color:#fff;
    border: none;
    height:100%;
    font-size: 1.2rem;
    width: 100%;
    margin-left:5px;
    padding: 20px;
    outline: none;
}

input::placeholder{
    color: #b0b0b0;
  }

input:focus{
    outline:none;
}

#location-icon{
    color:#fff;
    height: 30px;
    width:30px;
}
            `}</style>
        </Helmet>
    <div className="input-wrapper">
        <TbLocationFilled id="location-icon" />
        <input placeholder="State here..." value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
    </HelmetProvider>
    </>
    
};