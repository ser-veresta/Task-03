//creating the request instance
let countryReq = new XMLHttpRequest();
//initiating a connection or create a connnection
countryReq.open("GET","https://restcountries.eu/rest/v2/all",true);

//sending the request
countryReq.send();

//load the function
//this function will only be triggered when the data has been received successfully
countryReq.onload = function(){
    let data = JSON.parse(this.response);
    //to print the names of the countries in the response
    data.forEach((item) => {
        try{
            if(!item.latlng.length) throw new Error("latitude longitude not available");
            printWeather(item.name,...item.latlng);
        }
        catch(e){
            console.log(`${item.name}: ${e.message}`);
        }
    });
}

//function to print the temp of countries by lat lon
function printWeather(name,lat,lon){
    //updating the url for each country by lat lan
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=015dc506bacd5af5c9281f26d046b222`;
    //call the weather api for each country
    let weatherReq = new XMLHttpRequest();
    weatherReq.open("GET",url,true);
    weatherReq.send();
    //printing the temprature of the country
    weatherReq.onload = function(){
        let data = JSON.parse(this.response);
        console.log(`${name}: ${data.main.temp}`);
    }

    //alternate fetch method to get the response from api
    //let response = fetch(url).then(res=>res.json()).then(d=>console.log(`${name}: ${data.main.temp}`));
}
