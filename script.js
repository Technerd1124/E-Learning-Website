var typed = new Typed('#autotype', {
    strings: [' C', 'C++','Java','SQL','Web Development'],
    typeSpeed:130,
    backSpeed: 30,
    loop:true
  });
 // setInterval( Typed(), 200);

 // Select the input fields and button
const saveBtn = document.getElementById('saveBtn');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');

// Function to save data to Local Storage
function saveData() {
    const username = usernameInput.value;
    const email = emailInput.value;

    // Save data to Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Update the displayed data
    displayData();
}

// Function to display data from Local Storage
function displayData() {
    const storedName = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    document.getElementById('display-name').innerText = `Name: ${storedName || ''}`;
    document.getElementById('display-email').innerText = `Email: ${storedEmail || ''}`;
}

// Add event listener to the save button
saveBtn.addEventListener('click', saveData);

// Display stored data on page load
window.onload = displayData;

