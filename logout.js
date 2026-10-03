const logoutButton = document.getElementById('logout-button');
console.log(logoutButton);
logoutButton.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.removeItem('token');
window.location.href = 'example.html';
});

