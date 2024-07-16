function SignIn() {
  const username = document.getElementById('signInUsername').value;
  const password = document.getElementById('signInPassword').value;

  console.log('Sign In button clicked!'); // Added

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    if (username === currentUser.username && password === currentUser.password) {
      window.location.href = 'profilet-test.html'; // Redirect to the profile page
    } else {
      document.getElementById('signinMessage').innerText = 'Invalid username or password';
    }
  } else {
    document.getElementById('signinMessage').innerText = 'No user found. Please sign up first.';
  }
}

function SignUp() {

  console.log('Create Account button clicked!');

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value; // Added missing password field
  const ageRange = document.getElementById("ageRange").value;
  const sunSign = document.getElementById("sunSign").value;
  const pronouns = document.getElementById("pronouns").value;
  const nerdyFact = document.getElementById("nerdyFact").value;
  const aboutMe = document.getElementById("aboutMe").value;

  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !password ||
    !ageRange ||
    !sunSign ||
    !pronouns ||
    !nerdyFact ||
    !aboutMe
  ) {
    alert("Please fill out all required fields.");
    return;
  }

  const user = {
    firstName,
    lastName,
    username,
    email,
    password, // Added password in the user object
    ageRange,
    sunSign,
    pronouns,
    nerdyFact,
    aboutMe,
  };

// Added ------>

   // Retrieve existing users from localStorage or initialize empty array
   let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

   // Check if username already exists
   const existingUser = storedUsers.find(user => user.username === username);
   if (existingUser) {
     alert("Username already exists. Please choose another one.");
     return;
   }
 
   // Add new user to storedUsers array
   storedUsers.push(user);

   // Added ------>

  localStorage.setItem("currentUser", JSON.stringify(user));

  const signupMessage = document.getElementById("signupMessage");
  signupMessage.innerHTML =
    "<div class='alert alert-success'>Account successfully created!</div>";

  setTimeout(() => {
    window.location.href = "profilet-test.html";
  }, 2000); // 2-second delay
}

// Collects the form data when the "Create Account" button is clicked.
// Creates a user object containing the collected data.
// Retrieves the existing user data from local storage (or initializes an empty array if no data exists).
// Adds the new user to the array of users.
// Saves the updated user data back to local storage.
// Redirects to the second HTML page after the account is created.
