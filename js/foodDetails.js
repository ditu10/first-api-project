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
    console.log(food)
    document.getElementById('loading').style.display = "none";
    const food_details = document.getElementById('food-details')
    const divLeft = document.createElement('div')
    const divright = document.createElement('div')
    divLeft.classList.add('w-5/6', 'mx-auto')
    divright.classList.add('w-5/6', 'mx-auto' , 'py-5')
    divLeft.innerHTML = `
    <h3 class="text-4xl pb-4 text-center font-semibold text-yellow-500">${food.strMeal}</h3>
    <img class="w-full" src="${food.strMealThumb}">
    
    `
    // divright.classList.add('col-span-2')
    // divright.classList.add('overflow-y-auto');
    divright.innerHTML = `
        <h3 class="text-xl pt-5">Area: <span class="text-yellow-500 text-xl">${food.strArea}</span> </h3>
        <h3 class="text-xl pt-5">Category: <span class="text-yellow-500 text-xl">${food.strCategory}</span> </h3>
        <h3 class="text-2xl text-yellow-500 pt-8">Recipie details:</h3>
            
        <p class="text-xl overflow-y-auto h-80 pt-5">${food.strInstructions}</p>
    `
    food_details.appendChild(divLeft);
    // food_details.appendChild(divright);

    showIngradients(food)
}



const showIngradients = (food) => {
    console.log(food)
    const div = document.createElement('div');
    div.classList.add('col-span-1')
    const innerDiv = document.createElement('div');
    innerDiv.classList.add('grid','lg:grid-cols-3' ,'grid-cols-2','gap-8')

    
    const h3 = document.createElement('h3');
    h3.innerText = `Ingredients`;
    h3.classList.add('text-center', 'text-4xl', 'text-black-500','font-semibold','pb-8')
    
    for (let count = 1; count < 20; count++){
        let ingradient = `strIngredient${count}`;
        if (food[ingradient] != '') {
            const package = document.createElement('div')
            package.classList.add('mx-auto','shadow-lg','py-4')
            
            const ingredQuantity = `strMeasure${count}`;
            const ingredName = food[ingradient];

           
            package.innerHTML = `
            <img src="https://www.themealdb.com/images/ingredients/${ingredName}.png">
            <p class = "text-xl text-center text-yellow-500">${food[ingredQuantity]} ${ingredName}</p>
            `
            
            innerDiv.appendChild(package)
            
        }
    }
    // innerDiv.classList.add('my-4')
    div.appendChild(h3)
    div.appendChild(innerDiv)
    const food_details = document.getElementById('food-details');
    
    
    
    food_details.appendChild(div)
}