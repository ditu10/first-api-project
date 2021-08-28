window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.name}`)
        .then(res => res.json())
        .then(data => showDetails(data))
    
}


const showDetails = (data) => {
    let food = data.meals[0];
    document.getElementById('loading').style.display = "none";
    const food_details = document.getElementById('food-details')
    const divLeft = document.createElement('div')
    const divright = document.createElement('div')
    divLeft.classList.add('w-5/6', 'mx-auto' , 'py-5')
    divright.classList.add('w-5/6', 'mx-auto' , 'py-5')
    divLeft.innerHTML = `
    <h3 class="text-3xl py-4 text-center font-semibold text-yellow-600">${food.strMeal}</h3>
    <img src="${food.strMealThumb}">
    `
    divright.innerHTML = `
    <h2 class="pt-14 text-3xl underline text-yellow-900">How to Cook:</h2>
    <p class="pt-8 text-xl text-yellow-600">${food.strInstructions}</p>
    `
    food_details.appendChild(divLeft);
    food_details.appendChild(divright);
}