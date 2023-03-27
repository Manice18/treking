import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({results}) =>{
    return(<>
        <HelmetProvider>
        <Helmet>
            <style>{`
            .results-list{
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px #ddb;
    border-radius: 10px;
    margin-top: 1rem;
    max-height: 300px;
    overflow-y: scroll;
    font-family: Helvetica, sans-serif;
}`}
            </style>
        </Helmet>
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult result ={result} key={id}/>
                })
            }
        </div>
        </HelmetProvider>
        </>
    )
};