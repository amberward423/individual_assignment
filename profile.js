console.log('Profile page loaded');

let token = localStorage.getItem('token');

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

    let avatar = data.avatar;
    const avatarElement = document.getElementById('avatar-image');
    avatarElement.src = `https://media2.edu.metropolia.fi/restaurant/uploads/${avatar}`;

    document
      .getElementById('avatar')
      .addEventListener('change', function (event) {
        console.log(event.target.files[0]);

        const formData = new FormData();
        formData.append('avatar', event.target.files[0]);

        const uploadavatar = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };

        fetch(
          'https://media2.edu.metropolia.fi/restaurant/api/v1/users/avatar',
          uploadavatar
        ).then(function (response) {
          response.json().then(function (data) {
            console.log(data);
          });
        });
      });

    let new_email = document.getElementById('updated-email');
    new_email.value = email;

    document
      .getElementById('update-email-b')
      .addEventListener('click', function (event) {
        console.log(event.target.value);

        const Updateoptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: new_email.value,
          }),
        };

        fetch(
          'https://media2.edu.metropolia.fi/restaurant/api/v1/users',
          Updateoptions
        ).then(function (response) {
          response.json().then(function (data) {
            console.log(data);
          });
        });
      });
    let role = data.role;
    const roleElement = document.getElementById('role');
    roleElement.textContent = role;
    console.log(data.favouriteRestaurant);
  });
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
const logoutButton = document.getElementById('logout-button');
console.log(logoutButton);
logoutButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.removeItem('token');
  window.location.href = 'example.html';
});
