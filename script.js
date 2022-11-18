// key = a2dd9b02ab4631b036e5241ab1440e4e
// url = https://api.openweathermap.org/data/2.5/weather

const appId = "a2dd9b02ab4631b036e5241ab1440e4e";
const appUrl = "https://api.openweathermap.org/data/2.5/weather";

function getData(city) {
    url = appUrl + `?q=${city}&appid=${appId}&units=metric`;
    request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send(null)
    return JSON.parse(request.responseText)
}

function onSubmit() {
    var text = document.getElementById('input').value
    weather = getData(text)
    console.log(weather)



    switch (weather.weather[0].main) {
        case "Clear":
            document.getElementById('html').style.background = "linear-gradient(to bottom, #00f, #007)"; break;
        case "Clouds":
            document.getElementById('html').style.background = "linear-gradient(to bottom, #aaa, #007)";
            document.getElementById('clouds').style.display = "block"; break;
        case "Mist":
            document.getElementById('html').style.background = "linear-gradient(to bottom, #6d8096 1%,#a0afbc 35%,#bfc4c9 67%,#ededed 100%);"; break;
    }

    updateData(weather);

}

function updateData(data) {
    document.getElementById('city').textContent = weather.name + ":";
    document.getElementById('temp').textContent = `Temperature: ${Math.round(weather.main.temp)} °C`;
}

document.getElementById('btn').onclick = onSubmit;
document.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        onSubmit();
    }
});
