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



// ====== new 



function setEmail() {

    with(document.forms[0])
    {
       var  UserName = username.value;
       var mailID=email.value;
       var Feedback = feedbackContent.value;
    
       var MessegeBody = "  By User Name  :" + UserName + 
       " <br> "+"  User Mail id : " + mailID +" <br>"  + 
       " FeedBack Message : <br> " + Feedback;
    
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "dhanshrilondhe6@gmail.com",
            Password : "62BACBF4CD8FAF383AD2DC052D65B1C16622",
            To : 'dhanshrilondhe6@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body :MessegeBody
        }).then(
          message => {
           
             if( message== "ok")
             {
                swal(" Thankyou  ", " Your FeedBaCK Has Been Sent ", "success");
             }
             else{
                swal("  SomeThing went Wrong   ", " Your FeedBaCK Has not been   Sent ", "error");
             }
    
          }
    
    
        );
        
     }
    
     }
    
    