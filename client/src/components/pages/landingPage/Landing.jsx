import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Landing = () =>{
  const navigate = useNavigate();
    return(
      <>
      <HelmetProvider>
            <Helmet>
            <title>Destination</title>
                <style>{`@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  height: 100%;
  font-family: "Lato", sans-serif;
}
.parent {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.overlay {
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background-color: #000;
  opacity: 0.7;
}
.image {
  background-image: url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  object-fit: fill;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scaleX(-1);
}
.heading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-transform: uppercase;
  z-index: 3;
  color: #ffffff;
  font-weight: bold;
  font-size: 6rem;
}
.first,
.second {
  margin: 0 15px;
}
.first {
  opacity: 0.3;
}
.second {
  margin-top: 60px;
}
.side-container {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-size: 2.1rem;
  text-transform: uppercase;
  position: absolute;
  width: 50%;
  height: 35%;
  bottom: 0;
  z-index: 3;
  margin: 0 120px;
}
.nextmsg {
  margin: 20px 0;
  color: #ffffff;
  font-size: 1.2rem;
  font-family: "Lato", sans-serif;
  text-transform: none;
  opacity: 0.5;
}
.side-text {
  position: absolute;
  width: 100%;
  display: flex;
  writing-mode: vertical-lr;
  height: 80%;
  rotate: z 180deg;
  z-index: 2;
  font-family: "Lato", sans-serif;
  color: #ffffff;
  font-size: 4rem;
  font-weight: 200;
  text-transform: uppercase;
}

.vertical-bar {
  display: inline;
  background-color: #ffffff;
  height: 40%;
  margin-left: 60px;
  bottom: 0;
  width: 23px;
  position: absolute;
  z-index: 3;
  opacity: 0.5;
}
.click >button
{
  padding: 15px 30px;
  font-size: 1rem;
  color: #ffffff;
 
  background-color: #325047;
border-radius: .5rem;
position: absolute;
z-index: 3;
bottom: 0;
margin: 1.0rem 8rem;
}
button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}

@media only screen and (max-width:900px){
  .heading{
    font-size: 80px ;
  }
  .side-text {
    position: absolute;
    width: 100%;
    display: flex;
    writing-mode: vertical-lr;
    height: 80%;
    rotate: z 180deg;
    z-index: 2;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  .side-container {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    height: 35%;
    bottom: 0;
    z-index: 3;
    margin: 0 100px;
  }

  .vertical-bar {
    display: inline;
    background-color: #ffffff;
    height: 40%;
    margin-left: 60px;
    bottom: 0;
    width: 20px;
    position: absolute;
    z-index: 3;
    opacity: 0.5;
  }

  .nextmsg {
    margin: 20px 0;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    text-transform: none;
    opacity: 0.5;
  }

  .click >button
{
  padding: 13px 28px;
  font-size: 0.8rem;
  color: #ffffff;
 
  background-color: #325047;
  border-radius: .5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin: 1.5rem 6.5rem;
}
  button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}
}

@media only screen and (max-width:821px){
  .heading{
    font-size: 80px ;
  }
  .side-text {
    position: absolute;
    width: 100%;
    display: flex;
    writing-mode: vertical-lr;
    height: 80%;
    rotate: z 180deg;
    z-index: 2;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  .side-container {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    height: 35%;
    bottom: 0;
    z-index: 3;
    margin: 0 100px;
  }

  .vertical-bar {
    display: inline;
    background-color: #ffffff;
    height: 40%;
    margin-left: 60px;
    bottom: 0;
    width: 20px;
    position: absolute;
    z-index: 3;
    opacity: 0.5;
  }

  .nextmsg {
    margin: 20px 0;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    text-transform: none;
    opacity: 0.5;
  }

  .click >button
{
  padding: 13px 28px;
  font-size: 0.8rem;
  color: #ffffff;
 
  background-color: #325047;
  border-radius: .5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin: 1.5rem 6.5rem;
}
  button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}
}

@media only screen and (max-width:670px){
  .heading{
    font-size: 80px ;
  }
  .side-text {
    position: absolute;
    width: 100%;
    display: flex;
    writing-mode: vertical-lr;
    height: 80%;
    rotate: z 180deg;
    z-index: 2;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    font-size: 3.0rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  .side-container {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    height: 35%;
    bottom: 0;
    z-index: 3;
    margin: 0 75px;
  }

  .vertical-bar {
    display: inline;
    background-color: #ffffff;
    height: 40%;
    margin-left: 40px;
    bottom: 0;
    width: 20px;
    position: absolute;
    z-index: 3;
    opacity: 0.5;
    
  }

  .nextmsg {
    margin: 20px 0;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    text-transform: none;
    opacity: 0.5;
  }

  .click >button
{
  padding: 13px 28px;
  font-size: 0.8rem;
  color: #ffffff;
 
  background-color: #325047;
  border-radius: .5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin: 1.rem 6.5rem;
}
  button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}

}
  
  @media only screen and (max-width:580px){
  .heading{
    font-size: 80px ;
  }
  .side-text {
    position: absolute;
    width: 100%;
    display: flex;
    writing-mode: vertical-lr;
    height: 40%;
    rotate: z 180deg;
    z-index: 2;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  .side-container {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    font-size: 1.5rem;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    height: 35%;
    bottom: 0;
    z-index: 3;
    margin: 0 20px;
  }

  .vertical-bar {
    display: inline;
    background-color: #ffffff;
    height: 40%;
    margin-left: 40px;
    bottom: 0;
    width: 20px;
    position: absolute;
    z-index: 3;
    opacity: 0.5;
    visibility: collapse;
  }

  .nextmsg {
    margin: 20px 0;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    text-transform: none;
    opacity: 0.5;
  }

  .click >button
{
  padding: 13px 28px;
  font-size: 0.8rem;
  color: #ffffff;
 
  background-color: #325047;
  border-radius: .5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin: 1.rem 6.5rem;
}
  button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}

}

  @media only screen and (max-width:440px){
  .heading{
    font-size: 60px ;
  }
  .overlay {
    width: 50%;
    height: 100%;
    position: absolute;
    z-index: 3;
    background-color: #000;
    opacity: 0.7;
  }
  .side-text {
    position: absolute;
    width: 100%;
    display: flex;
    writing-mode: vertical-lr;
    height: 40%;
    rotate: z 180deg;
    z-index: 2;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    font-size: 2.2rem;
    font-weight: 200;
    text-transform: uppercase;
  }
  .side-container {
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    font-size: 1.2rem;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    height: 35%;
    bottom: 0;
    z-index: 3;
    margin: 0 20px;
  }

  .vertical-bar {
    display: inline;
    background-color: #ffffff;
    height: 40%;
    margin-left: 40px;
    bottom: 0;
    width: 20px;
    position: absolute;
    z-index: 3;
    opacity: 0.5;
    visibility: collapse;
  }

  .nextmsg {
    margin: 20px 0;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    text-transform: none;
    opacity: 0.5;
  }

  .click >button
{
  padding: 13px 28px;
  font-size: 0.8rem;
  color: #ffffff;
 
  background-color: #325047;
  border-radius: .5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  margin: 1rem 1.8rem;
}
  button:hover{
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
}
  }`}
                </style>
            </Helmet>
            <div className="parent">
    <div className="overlay">

    </div>
    <div className="vertical-bar">

    </div>
    <div className="side-text">
        <span>Adventure</span>
    </div>
    <div className="side-container">
        <span>Unleash Your</span>
        <span>Inner Adventure</span>
        
        <div className="nextmsg">

            <p>Embark on your next adventure</p>
            <p>with our trekking tracker!</p>
           
            
        </div>
      
       
        </div>
    <div className="image">
        
    </div>
   <div className="heading">
   <span className="first">Trek</span>
   <span className="second">King</span>
   </div>

   <div className="click">
       <button onClick={() => navigate("/destination")} >Get Started</button>
   </div>
    </div> 
    </HelmetProvider>
        </>
    
    )
}

export default Landing;