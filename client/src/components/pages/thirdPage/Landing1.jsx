import {FaHome} from 'react-icons/fa';
import React, {useEffect, useState} from 'react';
import { HelmetProvider,Helmet } from 'react-helmet-async';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hotel from './Hotel';
import Suggest from './Suggest';
import Weather from './Weather';



const Landing1 = () =>{
    const coordinates = () => {
        const success = (position)=>{
            console.log(position)
        }
        const error = ()=>{
            console.error(error);
        }
        navigator.geolocation.getCurrentPosition(success,error);
    }
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [suggesData, setSuggesData] = useState();
  const url = 'http://localhost:5000/stateD';
const anotherUrl = 'http://localhost:5000/sugges';
  useEffect(()=>{
    fetch(`${url}`).then(res=>res.json()).then(data => setData(data)).catch(err => console.error(err));
  },[])
    

  
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  const [isFlipped1, setIsFlipped1] = useState(false);
  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1)
  }
  const [isFlipped2, setIsFlipped2] = useState(false);
  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2)
  }

    return(
      <HelmetProvider>
      <Helmet>
      <title>Details</title>
        <style>
          {`
          *{
            font-family: Helventica;
          }
body {
    margin: 0;
    padding: 0;
    background: var(--primary-color);
    
}
:root{
    --primary-color: #335333;
  --secondary-color: #5f814c;
  --color-bar: #679bd9;
  --color-accent: #ffffff;
  --color-home-box: #1c362e;
}
.parent-grid-container{
    display: grid;
    position: relative;
    grid-template-columns: 2fr 400px;
    height: 450px;
    padding: 15px;
    background: var(--primary-color);
}

.accessory{
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    height: 400px;
}
.accessory-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background:var(--primary-color);
    justify-content: space-between;
    padding: 0 50px;
    flex-wrap: wrap;
    color: #ffffff;
    
}
.accessory-container .equipments{
    background-image: url(https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
    background-size: cover ;
    width: 16rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
}


.accessory-container .equipmentsList{
    background-color: white;
    color: black;
    width: 16rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll; 
    border-radius: 1vh;
}

.accessory-container .transportation{
    background-image: url(https://images.unsplash.com/photo-1654287163076-d8654c1b8a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80);
    background-size: cover ;
    width: 16rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
}

.accessory-container .Paragraph{
    background-image: url(https://images.unsplash.com/photo-1655593881985-eb42464018b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2811&q=80);
    background-size: cover ;
    width: 16rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
}

.accessory-container .Description{
    background-color: white;
    color: black;
    width: 16rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1vh;
}

.hotels-container div{
    height: 50%;
    width: 340px;
    margin: 20px;
    padding: 50px;
    border-radius: 20px;
   
}

.hotels-container .hotel1{
    background-image: url(https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
    background-size: cover ;
    width: 20rem;
    height: 65%;
    display: flex;
    justify-content:center;
}

.hotels-container .hotel1 .desc{
    color: antiquewhite;
    position: relative;
    display: block;
    align-items: center;
    top:100%;
}

.hotels-container .hotel2{
    background-image: url(https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
    background-size: cover ;
    width: 20rem;
    height: 65%;
    display: flex;
    justify-content:center;
}
.hotels-container .hotel2 .desc{
    color: antiquewhite;
    position: relative;
    display: block;
    align-items: center;
    top:100%;
}

.hotels-container .hotel3{
    background-image: url(https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
    background-size: cover ;
    width: 20rem;
    height: 65%;
    display: flex;
    justify-content:center;
}
.hotels-container .hotel3 .desc{
    color: antiquewhite;
    position: relative;
    display: block;
    align-items: center;
    top:100%;
}

.wheather{
    grid-row: 1 / 3;
    height: 100%;
}

.weather-container{
    display: flex;
    flex-direction: column;
    background:var(--secondary-color);
    border-radius: 20px;
    padding: 23px;
    
    
}

.upper-part-cont{
    height: 260px;
    background:var(--color-bar);
    border-radius: 10px;
    margin: 0 0 10px 0;
    color: var(--color-accent);
    font-weight: bold;
}

.upper-part-cont p{
    position: relative;
    top:8%;

}

.widget{
    display: flex;
    flex-direction: row;
    padding-left: 10%;
    padding-top: 10%;
}

.widget .right .city{
    display: flex;
    align-items: center;
    padding-left: 85%;
    padding-bottom: 10%;

}

.widget .right .degree{
    display: flex;
    align-items: center;
    padding-left: 50%;
    font-size: 3rem;
}

.widget .bottom{
    display: flex;
    flex-direction: column;
    padding-top: 40%;
    position: relative;
    right:37%;
    font-weight: 300;
    font-size: 0.8rem;

}


.lower-part-cont{
    height: 500px;
    border-radius: 10px;
    background:var(--color-accent);
}

.image-container {
    width: 100px;
    height: 100px;
    display: flex;
       justify-content: center;
    align-items: center;

  }

  .image-container img {
    width: 100%;
    height: 100%;
  }


.lower-part-cont p {
    padding: 0;
}
.lower-part-cont h5 {
    padding: 0;
}
.suggest {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 280px;
    height: 80px;
    background: var(--color-accent);
    margin: 20px 40px 20px 40px;
}
.suggest div {
    color: #ffffff;
    width: 120px;
    height: 80px;
  margin: 0 10px 0 10px;
  border-radius: 0.5rem;    
}
.suggest .description {
    color: #ffffff;
    text-align: start;
    top: 0;
    width: 220px;
    height: 80px;
    color: black;
    overflow: auto;
}

.hotels{
    grid-row: 2/ 3;
    grid-column: 1 / 2;
    padding: 10px 20px 20px 0;

}
.hotels-container{
    background:var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 30px;
}

.main-container{
    border-radius: 10px;
    height: 100%;
}

.grid-child{
    text-align: center;
}
.home {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 25px 0 0 25px;
    background: var(--color-home-box);
    border-radius: 0.5vh;
  }
   .Pressure{
    display: flex;
    justify-content: right;
    align-item: right;
    
  }
          `}
        </style>
      </Helmet>
      <div className="parent-grid-container">
        
        <div className="home" onClick={(e) => navigate('/')}>
        <FaHome style={{color: "white", height: "40px", width: "35px"}} />
        
        </div>
        <div className="grid-child accessory">
            <div className="main-container accessory-container">
                <div className={`${!isFlipped ? 'Paragraph':'Description'}`} onClick={handleClick} >
                    <p>{`${!isFlipped ? 'Whats there in '+data.stateNam+' ?' :data.state}`}</p>
                </div>
                <div className={`${!isFlipped1 ? 'equipments':'equipmentsList'}`} onClick={handleClick1}>
                <div ></div>
                    <p>{`${!isFlipped1 ? 'EQUIPMENTS': 'e'}`}</p>
                </div>
                <div className={`${!isFlipped2 ? 'transportation':'Description'}`} onClick={(e)=>{
                    coordinates()
                    handleClick2()
                }}>
                    <p>MAP</p>
                </div>
        
            </div>
        </div>
        <div className="grid-child wheather">
            <div className="weather-container">
                    <div className="upper-part-cont">
                         <p>WEATHER</p>
                         <div className="widget">
                            <div className="left">
                              <img src={data.imageUrl} className="icon"/>
                                <h5 className="weather-status">{data.description}</h5>
                            </div>
                            <div className="right">
                                <h5 className="city">{data.nameOfState}</h5>
                                <h5 className="degree">{data.temp}</h5>
                            </div>
                            <div className="bottom">
                                {/* <div className='Pressure'>
                                    Pressure <span>{data.pressure}</span>
                                </div>
                                <div className='humidity'>
                                    Humidity <span>{data.humidity}</span>
                                </div>
                                <div className='wind'>
                                    Wind Speed <span>{data.speed}</span>
                                </div> */}
                                <Weather weatherDetails='Pressure' detail='Pressure' setDetail={data.pressure} />
                                <Weather weatherDetails='humidity' detail='Humidity' setDetail={data.humidity} />
                                <Weather weatherDetails='wind' detail='Wind Speed' setDetail={data.speed} />
                            </div>
                        </div>
                    </div>
                    <div className="lower-part-cont">
                        <p>Your<br />ADVENTURE</p>
                         <Suggest heading="Kanchenjunga Base Camp Trek, Sikkim" description="Kanchenjunga’s dominating peak is so high that a trek to its base camp is itself a big-time adventure that keeps kicking the adrenaline rush" imageUrl="https://imgs.search.brave.com/_ecBdVW5zLAmGnJD6UY2Oko-TKapwfalvl7k84HslQM/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhyaWxsb3Bo/aWxpYS5jb20vaW1h/Z2UvdXBsb2FkL3Mt/LVRBN0JpT2VLLS0v/Y19maWxsLGZfYXV0/byxmbF9zdHJpcF9w/cm9maWxlLGhfODAw/LHFfYXV0byx3XzEz/MDAvdjEvaW1hZ2Vz/L3Bob3Rvcy8wMDAv/MTIzLzg4NC9vcmln/aW5hbC8xNTEzNDE5/NTM4X2sxLmpwZy5q/cGc_MTUxMzQxOTUz/Nw"/>
                        <Suggest heading="Kuari Pass Trek, Uttarakhand" description="Quite famous among trekking enthusiasts, Kuari Pass Trek offers stunning vistas of the snow-capped peaks of the Greater Himalayan Range." imageUrl="https://imgs.search.brave.com/bGsg4RBzLw4zISUTP1naaOTMs4tgzGCm37n3t9cOAsk/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhyaWxsb3Bo/aWxpYS5jb20vaW1h/Z2UvdXBsb2FkL3Mt/LUVHcHFDX1hpLS0v/Y19maWxsLGZfYXV0/byxmbF9zdHJpcF9w/cm9maWxlLGhfODAw/LHFfYXV0byx3XzEz/MDAvdjEvaW1hZ2Vz/L3Bob3Rvcy8wMDAv/MTIzLzc4OC9vcmln/aW5hbC8xNTEzNDA1/Mjc4X19rdWFyaS1w/YXNzLXRyZWstYmFu/bmVyLmpwZy5qcGc_/MTUxMzQwNTI2OQ"/>
                        <Suggest heading="Chadar Trek, Ladakh" description="One of the most stunning and exhilarating winter treks across the blue planet, the Chadar Trek is a thrilling expedition over the frozen Zanskar River." imageUrl="https://imgs.search.brave.com/P8WYq-Ce-ZG-oaGewui1029b6ijSnbqxIFdfuqCIRNo/rs:fit:1200:823:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS9waG90by83MzI2/NjkxNC9DaGFkYXIt/dHJlay5qcGc_d2lk/dGg9NzQ4JnJlc2l6/ZT00"/>
                        <Suggest heading="Hampta Pass Trek, Himachal Pradesh" description="A person who loves to be in the lap of nature it is the time to trek in the dreamland of unpredictable terrains of Hampta Pass." imageUrl="https://imgs.search.brave.com/2C6sK31S3okXxR9bg7SLJAXJE7k7ZyfRZg9lm7lZpLo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVj/dWx0dXJldHJpcC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMTAvaGFtcHRh/LXBhc3MuanBn"/>
                      </div>
            </div>
        </div>
        <div className="grid-child hotels">
            <div className="main-container hotels-container">
                <Hotel myClass='hotel1'/>
                <Hotel myClass='hotel2'/>
                <Hotel myClass='hotel3'/>
            </div>
        </div>
    </div>
    </HelmetProvider>
    )
}

export default Landing1;