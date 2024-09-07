console.log('script.js is loaded and running!');


//Welcome screen

document.addEventListener("DOMContentLoaded", () => {
  const welcomePrompt = document.getElementById('welcomePrompt');
  const loginForm = document.getElementById('loginForm');
  const createUserForm = document.getElementById('createUserForm');
  const mainApp = document.getElementById('mainApp');

  // Show Login Form
  document.getElementById('login-btn').addEventListener('click', () => {
      welcomePrompt.classList.add('hidden');
      loginForm.classList.remove('hidden');
  });

  // Show Create User Form
  document.getElementById('create-user-btn').addEventListener('click', () => {
      welcomePrompt.classList.add('hidden');
      createUserForm.classList.remove('hidden');
  });

//Create user phase 

document.getElementById('submitCreateUser').addEventListener('click', () => {
    const newUserName = document.getElementById.('newUserName').value; 
    const newPassword = document.getElementById.('newPassword').value; 

    if (newUsername && newPassword) {
 // Create a new user object 
    const  newUser = { user: newUserName, password: newPassword };

    // Get existing users from local Storage  
    let users = JSON.parse(localStorage.getItem('users')) || []; 

    // Check if the username already exists 
    const existingUser = users.find(user => user.user ===newUserName); 
    if (existingUser) {
        alert('Username already exists!');
        return;
    }
    // Add the new user to the array and save it back to localStorage 
    users.push(newUser); 
    localStorage.setItem('users', JSON.stringify(users)); 


// listen for username/pass input

  document.getElementById('submitlogin').addEventListener('click', () => {
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  });

  // Get users from localStorage 
    let users = JSON.parse(localStorage.getItem('users')) || []; 

    //Find the user 
    const user = users.find(user => user.user === userName && user.password == password); 

// Successful login

if (user) { 
    loginForm.classList.add('hidden');
    mainApp.classList.remove('hidden');

} else {
    alert('Invalid username or password. Please check, and try again.')
};

  // Back to Welcome Screen from Login Form
  document.getElementById('backToWelcome').addEventListener('click', () => {
      loginForm.classList.add('hidden');
      createUserForm.classList.add('hidden');
      welcomePrompt.classList.remove('hidden');
  });

  // Back to Welcome Screen from Create User Form
  document.getElementById('backToWelcome').addEventListener('click', () => {
      createUserForm.classList.add('hidden');
      loginForm.classList.add('hidden');
      welcomePrompt.classList.remove('hidden');
  });

  // Handle Login Submission
  document.getElementById('submitLogin').addEventListener('click', () => {
      // Perform login logic here
      loginForm.classList.add('hidden');
      mainApp.classList.remove('hidden');
  });

  // Handle Create User Submission
  document.getElementById('submitCreateUser').addEventListener('click', () => {
      // Perform create user logic here
      createUserForm.classList.add('hidden');
      mainApp.classList.remove('hidden');
  });


// Main app


// Get form and table elements
const bpForm = document.getElementById('bpForm'); 
const readingsTable = document.getElementById('readingsTable').querySelector('tbody');

// Array to store readings
let readings = [];

// Listen for form submissions
bpForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user input
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const datetime = document.getElementById('datetime').value;

    // Create a reading object
    const reading = {
        systolic: parseInt(systolic),
        diastolic: parseInt(diastolic),
        datetime: datetime
    };

    // Store the reading in the array
    readings.push(reading);

    // Optionally, save readings to localStorage
    localStorage.setItem('bpReadings', JSON.stringify(readings));

    // Update the UI
    updateTable();
    updateStatistics();

    // Clear the form
    bpForm.reset();
});

// Function to update the table with readings
function updateTable() {
    // Clear existing rows
    readingsTable.innerHTML = '';

    // Append all readings to the table
    readings.forEach(reading => {
        const row = readingsTable.insertRow();
        row.insertCell(0).innerText = new Date(reading.datetime).toLocaleString();
        row.insertCell(1).innerText = reading.systolic;
        row.insertCell(2).innerText = reading.diastolic; // Corrected line
    });
}

// Function to calculate and update statistics
//function updateStatistics() {
    // Placeholder for your statistics calculations
    // This will calculate averages, highs, lows, etc.
//}

















