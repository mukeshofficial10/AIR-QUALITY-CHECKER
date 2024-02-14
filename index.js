const form = document.getElementById("form");
const Latitudeinput = document.getElementById("latitude");
const Longitudeinput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiresult=document.getElementById("aqi");
const coresult=document.getElementById("co");
const no2result=document.getElementById("no2");
const o3result=document.getElementById("o3");
const pm2result=document.getElementById("pm2");
const pm10result=document.getElementById("pm10");
const so2result=document.getElementById("so2");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude=Latitudeinput.value;
    const longitude=Longitudeinput.value;
    const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e65e8e8516msh55c6501776e2009p19daccjsnc75f6c37e0fe',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };
   
    fetch(url,options)
         .then(response=>response.json())
         .then(result=>{
            let readings = result.data[0];
            console.log(readings);
            aqiresult.textContent=readings.aqi;
            coresult.textContent=readings.co;
            no2result.textContent=readings.no2;
            pm2result.textContent=readings.pm2;
            o3result.textContent=readings.o3;
            pm10result.textContent=readings.pm10;
            so2result.textContent=readings.so2;
            resultContainer.style.display = 'flex';
        })
});