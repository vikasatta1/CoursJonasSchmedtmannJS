'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg)
    countriesContainer.style.opacity = 1
}
let renderCountry = function (data, className = '') {
    for (var key in data.currencies) {
        var value = data.currencies[key];
    }
    for (var key in data.languages) {
        var language = data.languages[key];
    }
    const html = `
           <article class="country ${className}">
                <img class="country__img" src='${data.flags.png}'/>
                    <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${value.name}</p>
                    </div>
           </article>`
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
///////////////////////////////////////
/*const getCountryData = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//послать запрос
    request.send()
    request.addEventListener('load', function () {
            const [data] = JSON.parse(this.responseText)
        console.log(data)
        for(var key in data.currencies) {
            var value = data.currencies[key];
        }
        for(var key in data.languages) {
            var language = data.languages[key];
        }
            console.log(data)
            const html = `
           <article class="country">
                <img class="country__img" src='${data.flags.png}'/>
                    <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${language}</p>
                <p class="country__row"><span>💰</span>${value.name}</p>
                    </div>
           </article>`
            countriesContainer.insertAdjacentHTML('beforeend', html);
            countriesContainer.style.opacity = 1;
        }
    )
}*/
/*getCountryData('portugal')
getCountryData('usa')*/


/*const getCountryAndNeighbour = function (country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//послать запрос
    request.send()
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        renderCountry(data)
        const [neighbour] = data.borders
        if (!neighbour) return
        const request2 = new XMLHttpRequest()
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
        request2.send()
        request2.addEventListener('load', function (){
            const [data2] = JSON.parse(this.responseText)
            console.log(data2)
            renderCountry(data2,'neighbour')
        })
    })
}
getCountryAndNeighbour('bel')*/
/*
request.onload = function() {
    alert(`Загружено: ${request.status} ${request.response}`);
};
request.onerror = function() { // происходит, только когда запрос совсем не получилось выполнить
    alert(`Ошибка соединения`);
};
request.onprogress = function(event) { // запускается периодически
                                   // event.loaded - количество загруженных байт
                                   // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
                                   // event.total - количество байт всего (только если lengthComputable равно true)
    alert(`Загружено ${event.loaded} из ${event.total}`);
};
*/


/*const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//послать запрос
request.send()*/


/*
let request =  fetch(`https://restcountries.com/v3.1/name/portugal`);
request.then(response => response.json())
    .then(res=> console.log(res ))
*/
let  getJSON = (url,errorMessage='Something went wrong') => {
  return   fetch(url)
        .then(res => {
            if (!res.ok)
                throw new Error(`${errorMessage} (${res.status})`)
            return res.json()
        })
}

const getCountryData = (country) => {
    getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]
            console.log(neighbour)
            if (!neighbour) throw new Error('No neighbour found')
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,'Country not found')
        })
        .then(data => {
            console.log(data)
            renderCountry(data[0], 'neighbour')
        })
        .catch(err => {
            console.log('error message', err)
            renderError(`Something went wrong ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })

}
btn.addEventListener('click', function () {
    getCountryData('germ ')
})

/*TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474*/



/*
const whereAmI = (lat, lng) => {
    const params = {latlng: lat,lng}
fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json',{params})
    .then(res=> {
        res.json()
        console.log(res)
    })
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
}
whereAmI( 52.508, 13.381)*/
/*
const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found (${res.status})`);

            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/
