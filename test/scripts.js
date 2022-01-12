const APIKEY = `0bd0cd1e7d8ab7a578a5a4d28a57d45b`;
var url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${APIKEY}`;
fetch(url)
.then(function(reponse){
    return reponse.json()

})
.then(function(data){
    console.log(data)
})