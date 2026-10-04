console.log('login JS is working');
const loginForm = document.getElementById('login-form');
console.log(loginForm);
const loginButton = document.getElementById('login-button');
console.log(loginButton);
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('form submitted');
  let username = document.getElementById('Username').value;
  let password = document.getElementById('Password').value;
  console.log(username);
  console.log(password);
  const loginData = {
    username: username,
    password: password,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  };
  fetch(
    'https://media2.edu.metropolia.fi/restaurant/api/v1/auth/login',
    options
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      console.log(data.token);
      let token = data.token;
      localStorage.setItem('token', token);
      window.location.href = 'example.html';
    });
  });
});

