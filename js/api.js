function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUserName(json))
    
}

function displayUserName(data) {
    const users = document.getElementById('users')
    for (user of data) {
        const li = document.createElement('li')
        li.innerText = user.name;
        users.appendChild(li);

    }
}