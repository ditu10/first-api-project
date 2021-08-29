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



const showRecipie = () => {
    if (document.getElementById('recipie').style.display == 'block')
        document.getElementById('recipie').style.display = "none"
    else 
        document.getElementById('recipie').style.display = "block"
}

const showDetails = (data) => {
    let food = data.meals[0];
    console.log(food)
    

    document.getElementById('loading').style.display = "none";
    const food_details = document.getElementById('food-details')
    const divLeft = document.createElement('div')
    
    divLeft.classList.add('lg:w-5/6', 'mx-auto')
   
    divLeft.innerHTML = `
    <h3 class="text-4xl pb-4 text-center font-semibold text-yellow-500">${food.strMeal}</h3>
    <img class="w-full pb-8" src="${food.strMealThumb}"> 
    <div>
        <button onclick="showRecipie()" class="px-3 font-semibold text-white hover:bg-gray-800 py-1 bg-yellow-400  text-xl rounded mr-8 mb-5">Show Recipie<button>
        <a class="px-3 py-1 font-semibold text-white hover:bg-gray-800 bg-yellow-400 text-xl rounded" href="${food.strYoutube}" target="_blank">Watch recipie</a>
    </div>
    <p id="recipie" class="hidden text-lg text-gray-500"><span class="text-2xl font-semibold text-yellow-500 block">How to Cook</span> ${food.strInstructions}</p>
    `
    
    
    food_details.appendChild(divLeft);
    

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
    
    for (let count = 1; count <= 20; count++){
        let ingradient = `strIngredient${count}`;
        if (food[ingradient] != '') {
            const package = document.createElement('div')
            package.classList.add('mx-auto','shadow-lg','py-4')
            
            const ingredQuantity = `strMeasure${count}`;
            const ingredName = food[ingradient];

           
            package.innerHTML = `
            <img src="https://www.themealdb.com/images/ingredients/${ingredName}.png">
            <p class = "text-xl text-center text-yellow-500">${ingredName} = ${food[ingredQuantity]}</p>
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