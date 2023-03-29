import { HelmetProvider, Helmet } from "react-helmet-async";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import {motion} from 'framer-motion';


const Second = () =>{
  const [results, setResults] = useState([]);

    return(
        <>
        <HelmetProvider>
        <Helmet>
        <style>Search</style>
          <style>{`
          .Second{
  background-image: url("https://images.unsplash.com/photo-1611154046036-cd91e50978be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  height:  100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.search-bar-container {
  padding-top: 30vh;
  width:35%;
  margin:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;

}
          `}</style>
        </Helmet>
        <div className="Second">
        <div className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <SearchResultsList results={results}/>
        </div>
      </div>
      </HelmetProvider>
        </>
    )
}

export default Second;
