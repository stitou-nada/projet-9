var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374')

        .then(response => response.json())
        .then(data => console.log(data))
        //    {var nameValue = data['name'];
        //     var tempValue = data['main']['temps'];
        //     var descValue = data['weather'][0]['description'];

        //     na.innerHTML=nameValue;
        //     temp.innerHTML=tempValue;
        //     desc.innerHTML=descValue;}
        
        

 .catch(err => alert("wrong city name!"))
})