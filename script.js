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
function updateStatistics() {
    // Placeholder for your statistics calculations
    // This will calculate averages, highs, lows, etc.
}







// Event listener for DOMContentLoaded can be removed if not necessary
// Alternatively, ensure it properly references IDs and elements



/* basic button click skeleton 

document.addEventListener("DOMContentLoaded", () => {
    // Welcome screen buttons
const bpForm = document.getElementById(bpform); 


    document.getElementById("login-btn").addEventListener("click", () => {
        alert("Login functionality coming soon!");
        // Implement login functionality
    });

    document.getElementById("create-user-btn").addEventListener("click", () => {
        alert("User creation functionality coming soon!");
        // Implement user creation functionality
    });

    document.getElementById("guest-btn").addEventListener("click", () => {
        alert("Guest mode coming soon!");
        // Implement guest mode functionality
    });

    document.getElementById("settings-btn").addEventListener("click", () => {
        alert("Settings menu coming soon!");
        // Implement settings menu
    });
});
*/















/*
Pseudocode for Blood Pressure Monitoring App

1. User Input: Welcome Screen
   - Display options: 
     - Login
     - Create User
     - Use as Guest
   - Display Settings option

2. Check if User is Logged In:
   -
   
   If user is logged in:
     - Display last recorded BP
     - Show option to record new BP
       - User inputs systolic and diastolic values
       - Present option to retake or save readings
     - Display options:
       - Show Graph (display historical BP data)
       - View Log (detailed list of past readings)
       - Set Reminder (schedule regular BP checks)
     - Display Settings options:
       - Change Profile (edit user details)
       - Change Notification Preferences (update reminder settings)
       - Logout

   - If user is not logged in:
     - Display options:
       - Sign Up (create a new user account)
       - Use as Guest (limited features)

3. Sign-Up Process:
   - Create a new user account
   - Redirect to logged-in user interface

4. Guest Mode:
   - Allow user to input BP readings
   - Save data locally without account creation
   - Limited access to advanced features (e.g., no reminders or profile management)

5. Settings Menu:
   - Accessible from both logged-in and guest modes
   - Options:
     - Change App Theme
     - Adjust Notification Settings
     - Access Help/Support
     - About the App

6. Error Handling:
   - If input values are invalid (e.g., non-numeric BP readings):
     - Display error message and prompt for re-entry

7. Data Persistence:
   - For logged-in users:
     - Save data to user account (possibly on a server or cloud service)
   - For guests:
     - Save data locally on the device (using LocalStorage or IndexedDB)
*/



