// const API='';
// const cityName='London';
// const Link='https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+API;

// const getWeather= async() =>{
//     fetch(Link)
//     .then(data =>{
//         console.log(data);
//         return data.json();

//     })
//     .then(parsedData =>{
//         console.log(parsedData.data);
//     })
//     .catch(err =>{
//         console.log("Error");
//         console.log(err);
//     })
// }
  
const city = document.getElementById('city');
const weather = document.getElementById('Weather');

function createli(name){
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}

const getWeatherData = async(searchText)=>{

    $('ul li').remove();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ searchText + '&units=metric&appid=49e0941e8b90bf53d221b60aa0c6ccfc';
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    const li = document.createElement('li');
    
    weather.appendChild(createli(searchText + ',' + data.sys.country));
    weather.appendChild(createli(new Date().toDateString()));
    weather.appendChild(createli(data.main.temp + '°C'));
    weather.appendChild(createli(data.weather[0].main));
    
}
$('input[type="text"]').keypress((e) => {
    if(clear==1){
        weather.remove();
        clear = 0;
    }
    if (e.which == 13) {
        e.preventDefault();
        const searchText=city.value;
        getWeatherData(searchText);
        city.value="";
        var clear =1;
        }
        
})
