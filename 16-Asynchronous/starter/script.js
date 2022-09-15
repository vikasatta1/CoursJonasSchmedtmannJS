'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
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

let renderCountry =  function (data,className=''){
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

const getCountryAndNeighbour = function (country) {
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
getCountryAndNeighbour('bel')
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


const whereAmI = (lat, lng) => {

}