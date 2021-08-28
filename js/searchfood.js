document.getElementById('search-btn').addEventListener('click', function () {
    const searchBox = document.getElementById('search-box');
    const searchText = searchBox.value;
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
    deleteChild();
    if (document.getElementById('noFood').childElementCount!=0) {
        const food_section = document.getElementById('noFood')
        food_section.removeChild(food_section.children[0])
    }
    if (foods.meals == null) {
        const food_section = document.getElementById('noFood')
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="text-center text-2xl text-red-400">No search item found!!</p>
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
        <h3 onclick="displayAllItems('${food.idMeal}')" class="text-xl text-center text-yellow-600 font-semibold">${food.strMeal}</h3>
        `
        food_section.appendChild(div)
    });
}

const deleteChild = () => {
    const food_section = document.getElementById('foods-section');

    const count = food_section.childElementCount;
    
    for (let i = 0; i < count; i++){
        food_section.removeChild(food_section.children[0])
    }
}

const displayAllItems = foodId => {
    // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    const code = foodId;
    const link = window.location.href.slice(0, window.location.href.length - 15);
    const url = `${link}foodDetails.html?name=` + encodeURIComponent(code);
    // window.location.href = url;
    window.open(url,'_blank');
    // showFoodDetails()  
    // document.getElementById('food-details').innerText = 'Hello foodies'
}

const showFoodDetails = () => {
    
}