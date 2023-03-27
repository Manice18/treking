import { HelmetData, Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SearchResult = ({result}) => {
    const navigate = useNavigate();
    return (<>
    <HelmetProvider>
    <Helmet>
        <style>{`
        .searchResult{
    padding: 10px 20px;
    font-family: Helvetica, sans-serif;
}

.searchResult:hover{
    background-color: #efefef;
}
        `}
        </style>
    </Helmet>
    <div className="searchResult" onClick={(e)=> {const options = {
        method: 'GET',
        url:'http://localhost:5000/dsec',
        params: {stateDe: result.desc[0],stateN: result.desName[0],mainState: result.stateName},
    }
    axios.request(options).then((response)=>{
        console.log(response.data)
    }).catch((error)=>{
        console.error(error)
    })
    navigate("/des")
    }}>{result.desName[0]}</div>
    <div className="searchResult" onClick={(e)=> {const options = {
        method: 'GET',
        url:'http://localhost:5000/dsec',
        params: {stateDe: result.desc[1],stateN: result.desName[1],mainState: result.stateName},
    }
    axios.request(options).then((response)=>{
        console.log(response.data)
    }).catch((error)=>{
        console.error(error)
    })
    navigate("/des")
    }}>{result.desName[1]}</div>
    <div className="searchResult" onClick={(e)=> {const options = {
        method: 'GET',
        url:'http://localhost:5000/dsec',
        params: {stateDe: result.desc[2], stateN: result.desName[2],mainState: result.stateName},
    }
    axios.request(options).then((response)=>{
        console.log(response.data)
    }).catch((error)=>{
        console.error(error)
    })
    navigate("/des")
    }}>{result.desName[2]}</div>
    </HelmetProvider>
    </>
    )
}