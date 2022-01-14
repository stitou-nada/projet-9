


var  city = prompt()
var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0cd1e7d8ab7a578a5a4d28a57d45b`



fetch(url)
.then(function(reponse){
    return reponse.json()

})
.then(function(data){

    var city = ("City :   " +data.name)

    var wind = ( "Wind speed:  "+ data.wind.speed ) 
    var sky =('Weather:   ' + data.weather[0].description) 


    document.write(city + "<br>"+ sky+"<br>"+ wind)

console.log(data)

})