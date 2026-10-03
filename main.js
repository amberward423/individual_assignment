// your code here
let new_restaurants = [];
const table = document.querySelector('table');

fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants').then(
  function (response) {
    response
      .json()
      .then(function (data) {
        new_restaurants = data;
        for (const restaurant of new_restaurants) {
          const tr = document.createElement('tr');
          const td_name = document.createElement('td');
          const td_address = document.createElement('td');
          console.log(restaurant.name, restaurant.address);
          tr.appendChild(td_name);
          tr.appendChild(td_address);
          table.appendChild(tr);

          td_name.innerText = restaurant.name;
          td_address.innerText = restaurant.address;

          tr.addEventListener('click', () => {
            console.log(restaurant._id);
            console.log('CLICKED');
            const dailyMenuUrl = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/fi`;
            const weeklyMenuUrl = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${restaurant._id}/fi`;

            console.log(dailyMenuUrl);
            fetch(dailyMenuUrl).then(function (response) {
              console.log(response);
              response.json().then(function (data) {
                const courses = data.courses;
                console.log(courses);
                console.log(courses[0]);
                const dailyMenu = document.getElementById('Daily-Menu');
                const dailyMenuTable = dailyMenu.querySelector('table');
                const dialog = document.querySelector('dialog');
                dialog.innerHTML = `
          Name: ${restaurant.name} <br>
          Address: ${restaurant.address} <br>
          Phone: ${restaurant.phone} <br>
          Company: ${restaurant.company} <br>
          City: ${restaurant.city} <br>
          Postal Code: ${restaurant.postalCode} <br>
          <table>
          <tr>
          <th>Course</th>
          <th>Price</th>         
          <th>Diets</th>
          </tr>
          </table>
        `;
                const dialogTable = dialog.querySelector('table');
                dialog.show();
                for (const course of courses) {
                  const tr = document.createElement('tr');
                  const td_course_name = document.createElement('td');
                  const td_price = document.createElement('td');
                  const td_diets = document.createElement('td');
                  tr.appendChild(td_course_name);
                  tr.appendChild(td_price);
                  tr.appendChild(td_diets);
                  td_course_name.innerHTML = course.name;
                  td_diets.innerHTML = course.diets;
                  td_price.innerHTML = course.price;
                  dialogTable.appendChild(tr);
                }
              });
            });
            fetch(weeklyMenuUrl).then(function (response) {
              response.json().then(function (data) {
                console.log(data);
                const days = data.days;
                for (const day of days) {
                  console.log(day);
                  const dailycourses = day.courses;
                  for (const course of dailycourses) {
                    console.log(course);
                  }
                }
                console.log(days[0]);
                const dailyMenu = document.getElementById('Daily-Menu');
                const dailyMenuTable = dailyMenu.querySelector('table');
              });
            });
            document
              .querySelectorAll('.highlight')
              .forEach((element) => element.classList.remove('highlight'));

            td_name.classList.add('highlight');
            td_address.classList.add('highlight');
          });
        }

        console.log(new_restaurants);
      })
      .catch(function (error) {
        console.error('Failed to fetch restaurants:', error);
      });
  }
);
