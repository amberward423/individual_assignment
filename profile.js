console.log('Profile page loaded');

let token = localStorage.getItem('token');

console.log(token);

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
};
fetch(
  'https://media2.edu.metropolia.fi/restaurant/api/v1/users/token',
  options
).then(function (response) {
  response.json().then(function (data) {
    let username = data.username;
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = username;
    let email = data.email;
    const emailElement = document.getElementById('email');
    emailElement.textContent = email;
    let role = data.role;
    const roleElement = document.getElementById('role');
    roleElement.textContent = role;
    console.log(data.favouriteRestaurant);
  });
  fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants').then(
    function (response) {
      response.json().then(function (data) {
        console.log(data);
        for (const restaurant of data) {
          const useroption = document.createElement('option');
          useroption.textContent = restaurant.name;
          useroption.value = restaurant._id;
          const dropdown = document.getElementById('restaurant-select');
          dropdown.appendChild(useroption);
        }
        document
          .getElementById('restaurant-select')
          .addEventListener('change', function (event) {
            console.log(event.target.value);
            const putoptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                favouriteRestaurant: event.target.value,
              }),
            };
            fetch(
              'https://media2.edu.metropolia.fi/restaurant/api/v1/users',
              putoptions
            ).then(function (response) {
              response.json().then(function (data) {
                console.log(data);
              });
            });
          });
      });
    }
  );
});
