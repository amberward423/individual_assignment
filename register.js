let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');

document
  .getElementById('register_button')
  .addEventListener('click', function (event) {
    console.log(email.value);
    console.log(username.value);
    console.log(password.value);
     const registerOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "email" : email.value,
                "username" : username.value, 
                "password" : password.value, 
              })
              }
             fetch(
              'https://media2.edu.metropolia.fi/restaurant/api/v1/users',
              registerOptions
            ).then(function (response) {
              response.json().then(function (data) {
                console.log(data);
              });
            });
            });
