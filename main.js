// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyDDavjBSnXcvQwXcUpxU0qZS6G6vI_E5Mo",
    authDomain: "new-project-a0baf.firebaseapp.com",
    databaseURL: "https://new-project-a0baf-default-rtdb.firebaseio.com",
    projectId: "new-project-a0baf",
    storageBucket: "new-project-a0baf.appspot.com",
    messagingSenderId: "677341316105",
  
};
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
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
    var address = getInputVal('address');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, address, message);
  
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
  function saveMessage(name, company, email, phone, address, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message,
      address:address
    });
  }