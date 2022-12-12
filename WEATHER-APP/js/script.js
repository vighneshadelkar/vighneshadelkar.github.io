const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '35646dbea5msh47cc576bae2f2c1p1c6c65jsn053d747717e2',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function weather(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response),
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            humidity.innerHTML = response.humidity
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
let btn = document.getElementById("btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let city = document.getElementById("search-input").value;
    weather(city);
    document.getElementById("your-city").innerHTML=city;
    document.getElementById("search-input").value="";
})

