require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const axios = require('axios');
const https = require("https");

const app = express();

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

const PORT=5000;

/* fetching name of states from MONGO ATLAS */
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

const NameState = require('./models/statedesc');

app.get('/state', async (req,res)=>{
    const state = await NameState.find();
    res.json(state);
});

app.post('/state/new', (req, res) => {
	const newStateD = new NameState({
		stateName: req.body.stateName,
        desName: req.body.desName,
        desc: req.body.desc,
        // desName2: req.body.desName2,
        // desc2: req.body.desc2,
        // desName3: req.body.desName3,
        // desc3: req.body.desc3
	})

	newStateD.save();

	res.json(newStateD);
});

/*getting data from frontend */
var stateDesc = "";
var stateNa = "";
var nameOfState="";

app.get('/dsec',(req,res)=>{
    stateDesc = req.query.stateDe;
    stateNa = req.query.stateN;
    nameOfState = req.query.mainState;
    console.log(stateDesc);
});

app.get('/stateD',(req,res)=>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+nameOfState+"&appid=803c9517aca4d380e945ea874a1494cf&units=metric";
    https.get(url,function(response){
        response.on("data",function(data){
            const weather = JSON.parse(data);
            const temp = weather.main.temp;
            const speed = weather.wind.speed;
            const pressure = weather.main.pressure;
            const humidity = weather.main.humidity;
            const description = weather.weather[0].description;
            const icon = weather.weather[0].icon;
            const imageUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            var data ={
                weather: weather,
                temp: temp,
                speed: speed,
                humidity: humidity,
                pressure: pressure,
                description: description,
                imageUrl: imageUrl,
                state: stateDesc,
                stateNam: stateNa,
                nameOfState: nameOfState
            }
            res.json(data)
        })
    });
    
});

stateDesc = "";
stateNa = "";
nameOfState="";


/*open weather map api*/


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

