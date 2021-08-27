let countryData;

const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => showCountries(data))
    
}

const showCountries = countries => {
    // console.log(countries) 
    countryData = countries;
    console.log(countryData)
    displayCountries(countries);
}

// if (isdelete) {
//     for (let i = 0; i < countriesId.childElementCount; i++){
//         countriesId.removeChild(countriesId.childNodes[0])
//     }
// }

function displayCountries(countries) {
    const countriesId = document.getElementById('countries');

    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country', 'w-5/6', 'mx-auto','mb-8','p-2', 'rounded-lg', 'shadow-lg')
        div.innerHTML =
            `<img class="pb-5 rounded-lg" id="flag" width='100%' src="${country.flag}" alt="">
            <h3 class="text-3xl font-medium">${country.name}</h3>
            <p>Language: ${country.languages[0].name}</p>
            <p>Capital: ${country.capital}</p>
            <p>Total Population: ${country.population}</p>
            <p>Area: ${country.area}</p>
            <p>Currency: ${country.currencies[0].name}</p>`
        countriesId.appendChild(div);
    })
    
}

loadCountries()

function removeAllChild() {
    const countriesId = document.getElementById('countries');
    const count = countriesId.childElementCount;
    
    for (let i = 0; i < count; i++){
        countriesId.removeChild(countriesId.children[0])
    }
}

document.getElementById('search').addEventListener('keyup', function () {
    let text = document.getElementById('search').value;
    console.log(text);
    text = text.toLowerCase();
    const newCountries = countryData.filter(x => x.name.toLowerCase().startsWith(text));
    console.log(newCountries)
    
    removeAllChild()
    displayCountries(newCountries);
    
})



document.getElementById('population').addEventListener('click', function () {
    const allCountries = [...countryData];
    const sortedCountries = allCountries.sort(function (a, b) {
        return a.population - b.population;
    })
    const reverseCountries = sortedCountries.reverse();

    removeAllChild()
    displayCountries(reverseCountries)
})

document.getElementById('area').addEventListener('click', function () {
    const allCountries = [...countryData];
    const sortedCountries = allCountries.sort(function (a, b) {
        return a.area - b.area;
    })
    const reverseCountries = sortedCountries.reverse();

    removeAllChild()
    displayCountries(reverseCountries)
})

document.getElementById('density').addEventListener('click', function () {
    const allCountries = [...countryData];
    const sortedCountries = allCountries.sort(function (a, b) {
        return (a.population/a.area) - (b.population/b.area);
    })
    const reverseCountries = sortedCountries.reverse();

    removeAllChild()
    displayCountries(reverseCountries)
})

document.getElementById('name').addEventListener('click', function () {
    removeAllChild()
    console.log(countryData)
    displayCountries(countryData)
    
})



