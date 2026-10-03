console.log('Weekly menu JS is working');
const restaurant_select = document.getElementById('restaurant-select');
let restaurantId;
fetch('https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants').then(
  function (response) {
    response.json().then(function (data) {
      console.log(data);
      for (const restaurant of data) {
        const option = document.createElement('option');
        option.textContent = restaurant.name;
        option.value = restaurant._id;
        restaurant_select.appendChild(option);
      }
    });
    document
      .getElementById('restaurant-select')
      .addEventListener('change', function () {
        restaurantId = restaurant_select.value;
        console.log(restaurantId);

        if (!restaurantId) {
          return;
        }
        let weeklyMenuUrl = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${restaurantId}/fi`;
        fetch(weeklyMenuUrl).then(function (response) {
          response.json().then(function (data) {
            console.log(data);
            const days = data.days;
            const weeklyMenu = document.getElementById('Weekly-Menu');
            const weeklyMenuTable = weeklyMenu.querySelector('table');
            const removal = weeklyMenuTable.querySelectorAll(
              'tr:not(:first-child)'
            );
            for (const row of removal) {
              weeklyMenuTable.removeChild(row);
            }
            const message = document.getElementById('weekly-message');
            if (message) {
              weeklyMenu.removeChild(message);
            }
            if (days.length === 0) {
              const message = document.createElement('p');
              message.id = 'weekly-message';
              message.textContent = 'No weekly menu available.';
              weeklyMenu.appendChild(message);
            }
            for (const day of days) {
              console.log(day);
              const dayRow = document.createElement('tr');
              const dayCell = document.createElement('th');
              dayCell.className = 'weekly-day';
              dayCell.colSpan = 3;
              dayCell.innerHTML = day.date;
              dayRow.appendChild(dayCell);
              weeklyMenuTable.appendChild(dayRow);
              const dailycourses = day.courses;
              for (const course of dailycourses) {
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

                weeklyMenuTable.appendChild(tr);
              }
            }
          });
        });
      });
  }
);
