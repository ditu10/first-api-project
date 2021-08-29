document.getElementById('search-btn').addEventListener('click', function () {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
    document.getElementById('foods-section').textContent = '';
    document.getElementById('noFood').textContent = '';
    document.getElementById('loading').style.display = 'block';
    loadFood(searchText);

    searchBox.value = '';
})

const loadFood = (food) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data))
    
}

const displayFoods = foods => {
    // console.log(foods.meals)
    document.getElementById('loading').style.display = 'none';
    
    document.getElementById('noFood').textContent = '';

    if (foods.meals == null) {
        const food_section = document.getElementById('noFood')
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="text-center text-xl text-red-600">No search item found!!</p>
        `;
        
        food_section.appendChild(div);
        return
    }
    
    foods.meals.forEach(food => {
        console.log(food)
        const food_section = document.getElementById('foods-section');
        const div = document.createElement('div');
        div.classList.add('w-5/6', 'mx-auto' , 'py-5')
        div.innerHTML = `
        <img onclick="displayAllItems('${food.idMeal}')" src="${food.strMealThumb}">
        <h3 onclick="displayAllItems('${food.idMeal}')" class="text-xl text-center text-yellow-500 font-semibold">${food.strMeal}</h3>
        `
        food_section.appendChild(div)
    });
}


const displayAllItems = foodId => {
    
    const code = foodId;
    const link = window.location.href.slice(0, window.location.href.length - 15);
    const url = `${link}foodDetails.html?name=` + encodeURIComponent(code);
    
    window.open(url,'_blank');
    
}

const showFoodDetails = () => {
    
}