// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyC9gZb6k_hr0GQZ5R6_HD5GjBPJ0hp-89Y",
  authDomain: "first-7ff12.firebaseapp.com",
  databaseURL: "https://first-7ff12.firebaseio.com",
  projectId: "first-7ff12",
  storageBucket: "first-7ff12.appspot.com",
  messagingSenderId: "40178589862",
  appId: "1:40178589862:web:1c0f197155b36276049467"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection


var messagesRef=firebase.database().ref("messeges");
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}