# Restaurant Finder

A web development individual assignment completed as part of my software engineering studies at Metropolia University of Applied Sciences.

Restaurant Finder is a web application that uses the Metropolia Restaurant API to display student restaurants and their menus. Users can explore restaurant information, view daily and weekly menus, and manage a user profile.

## Features

- **Restaurant listing:** Display student restaurants with their names and addresses.
- **Daily menus:** Select a restaurant to view its information and daily menu, including course names, prices, and dietary information.
- **Weekly menus:** Choose a restaurant and browse its available menus by day.
- **User registration:** Create an account using an email address, username, and password.
- **Login:** Authenticate users through the restaurant API and store the returned token in local storage.
- **User profile:** View account information, including username, email, and role.
- **Profile management:** Update an email address, select a favourite restaurant, and upload a profile avatar.
- **Logout:** Remove the stored authentication token.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES modules)
- Fetch API
- Metropolia Restaurant API
- Local Storage
- Git and GitHub

## Getting Started

### Prerequisites

- A web browser
- Access to the internet to connect to the Metropolia Restaurant API

### Running the Application

1. Clone the repository:

   `git clone https://github.com/amberward423/individual_assignment.git`

2. Navigate to the project directory:

   `cd individual_assignment`

3. Open `example.html` in a web browser, preferably using a local development server such as the Live Server extension in Visual Studio Code.

4. Use the navigation menu to explore restaurants, view weekly menus, log in, register, or access the profile page.

## API Integration

The application communicates with the Metropolia Restaurant API to retrieve restaurant information and menus, register and authenticate users, and manage profile information.

API requests use JavaScript's Fetch API, with authentication tokens included in requests that require a logged-in user.

## Learning Objectives

This project provided practical experience with:

- Fetching and processing data from a REST API
- Working with promises and asynchronous JavaScript
- Dynamically creating and updating HTML elements
- Handling user input and form events
- Implementing login and registration flows
- Working with authentication tokens and local storage
- Uploading files using `FormData`
- Organizing a multi-page web application

## Author

Amber Ward

Software Engineering Student — Metropolia University of Applied Sciences

[GitHub Repository](https://github.com/amberward423/individual_assignment)
