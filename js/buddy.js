let myBuddy;

const getBuddy = () => {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => showMyBuddy(data))
    
}

const showMyBuddy = data => {
    myBuddy = data.results[0];
    const buddyId = document.getElementById('buddy')
    const buddyImageId = document.getElementById('buddy-img')
    console.log(myBuddy);
    
    buddyImageId.setAttribute('src', myBuddy.picture.large);
    
    document.getElementById('welcome').innerText = 'Hi, My name is';
    document.getElementById('value').innerText = `${myBuddy.name.first} ${myBuddy.name.last}`;
    
   
}


document.getElementById('name').addEventListener('mouseenter', function setName () {
    document.getElementById('welcome').innerText = 'Hi, My name is';
    document.getElementById('value').innerText = `${myBuddy.name.first} ${myBuddy.name.last}`;
})
document.getElementById('email').addEventListener('mouseenter', function () {
    document.getElementById('welcome').innerText = 'My email address is';
    document.getElementById('value').innerText = `${myBuddy.email}`;
    document.getElementById('value').style.wordWrap = 'break-word';

})

document.getElementById('dob').addEventListener('mouseenter', function () {
    let dob = myBuddy.dob.date;
    dob = dob.slice(0, 10)
    const date = dob.split('-');
    const birthdate = date[2] + '/' + date[1] + '/' + date[0];
    
    document.getElementById('welcome').innerText = 'My birthday is';
    document.getElementById('value').innerText = `${birthdate}`
})
document.getElementById('phone').addEventListener('mouseenter', function () {
    document.getElementById('welcome').innerText = 'My phone number is';
    document.getElementById('value').innerText =`${myBuddy.cell}`
})
document.getElementById('address').addEventListener('mouseenter', function () {
    document.getElementById('welcome').innerText = 'My address is';
    document.getElementById('value').innerText = `${myBuddy.location.street.number} ${myBuddy.location.state}, ${myBuddy.location.country}`;
})
document.getElementById('user').addEventListener('mouseenter', function () {
    document.getElementById('welcome').innerText = 'My username is';
    document.getElementById('value').innerText = `${myBuddy.login.username}`;
})

getBuddy()