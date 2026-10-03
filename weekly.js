console.log('Weekly menu JS is working');

const restaurantId = '6470d38ecb12107db6fe24bf';
const weeklyMenuUrl = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/weekly/${restaurantId}/fi`;

fetch(weeklyMenuUrl).then(function (response) {
  response.json().then(function (data) {
    console.log(data);
    const days = data.days;
    const weeklyMenu = document.getElementById('Weekly-Menu');
    const weeklyMenuTable = weeklyMenu.querySelector('table');

    for (const day of days) {
      console.log(day);
      const dailycourses = day.courses;
      for (const course of dailycourses) {
        const tr = document.createElement('tr');
        const td_date = document.createElement('td');
        const td_course_name = document.createElement('td');
        const td_price = document.createElement('td');
        const td_diets = document.createElement('td');
        tr.appendChild(td_date);
        tr.appendChild(td_course_name);
        tr.appendChild(td_price);
        tr.appendChild(td_diets);
        td_course_name.innerHTML = course.name;
        td_date.innerHTML = day.date;
        td_diets.innerHTML = course.diets;
        td_price.innerHTML = course.price;

        weeklyMenuTable.appendChild(tr);
      }
    }
  });
});
