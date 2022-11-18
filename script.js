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



    document.getElementById('icon').src = getIconUrl(weather);

    switch (weather.weather[0].main) {
        case "Clear":
            document.getElementById('html').style.background = "linear-gradient(90deg, rgba(250,255,149,0.9654236694677871) 0%, rgba(246,224,85,0.9654236694677871) 35%, rgba(254,220,112,0.9514180672268907) 100%)"; break;
        case "Clouds":
            document.getElementById('html').style.background = "linear-gradient(to bottom, #aaa, #007)"; break;
        case "Mist":
            document.getElementById('html').style.background = "linear-gradient(to bottom, #6d8096 1%,#a0afbc 35%,#bfc4c9 67%,#ededed 100%);"; break;
        case "Thunderstorm":
            document.getElementById('html').style.background = "linear-gradient(180deg, rgba(118,147,168,1) 0%, rgba(144,142,126,1) 40%, rgba(83,88,99,0.9514180672268907) 100%)"; break;
        case "Drizzle":
            document.getElementById('html').style.background = "linear-gradient(180deg, rgba(155,197,228,1) 0%, rgba(212,210,196,1) 40%, rgba(115,125,144,0.9514180672268907) 100%)"; break;
        case "Rain":
            document.getElementById('html').style.background = "linear-gradient(180deg, rgba(122,163,194,1) 0%, rgba(167,165,152,1) 40%, rgba(70,81,103,0.9514180672268907) 100%)"; break;
        case "Snow":
        case "Haze":
        case "Dust":
        case "Fog":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
    }

    updateData(weather);

}

function getIconUrl(weather) {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

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
