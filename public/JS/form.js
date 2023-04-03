let ReqForm = document.getElementById("ReqForm");
let sumbitBtn = document.getElementById("sumbitBtn");

let YourEmail = document.getElementById("YourEmail");
let errorEmail = document.getElementById("errorEmail"); 

let Yourname = document.getElementById("Yourname");
let errorName = document.getElementById("errorName");

let YourMessage = document.getElementById("YourMessage");
let errorMessage = document.getElementById("errorMessage");

let messagecontent = document.getElementById("messagecontent");

Yourname.addEventListener("change",function(event){
  if (event.target.value === "") {
    errorName.textContent = "*Required";
    errorName.style.color = "red";
  } 

  else {
    errorName.textContent = "";
  }
});

YourEmail.addEventListener("change",function(event){
  if (event.target.value === "") {
     errorEmail.textContent = "*Required";
    errorEmail.style.color = "red";
   } 

  else {
    errorEmail.textContent = "";
  }
});

YourMessage.addEventListener("change",function(event){
  if (event.target.value === "") {
    errorMessage.textContent = "*Required";
    errorMessage.style.color = "red";
  } 

  else {
    errorMessage.textContent = "";
  }
});

function save(name, email, message) {

  // from Vaidation 
  const firebaseConfig = {
    apiKey: "AIzaSyDFhw4GcMuzNXa8XBSn4hZzc5bhgRxCfO8",
    authDomain: "my-portfolio-form-3f99e.firebaseapp.com",
    databaseURL: "https://my-portfolio-form-3f99e-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-form-3f99e",
    storageBucket: "my-portfolio-form-3f99e.appspot.com",
    messagingSenderId: "1050717571359",
    appId: "1:1050717571359:web:fa1f47c3deae8200f6c82a",
    measurementId: "G-LX0VW2G45Q"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database().ref("ReqForm");

  var newRef = db.push();

  newRef.set(
    {
      name : name,
      email : email,
      message : message
    }
  );

}

function validateformdata(name, email, message) {
  let Regular_Expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(Regular_Expression)){
    errorEmail.textContent = "Please enter a valid email address";
    errorEmail.style.color = "red";
  }
  if (name === "" ){
    errorName.textContent = "*Required";
    errorName.style.color = "red";
  }
 
  if (email === "" ){
    errorEmail.textContent = "*Required";
    errorEmail.style.color = "red";
  }

   if (message === ""){
    errorMessage.textContent = "*Required";
    errorMessage.style.color = "red";
  }
}

function submitformdata(name,email,message) { 
  if (Yourname.value !== "" && YourEmail.value !== "" && YourMessage.value !== ""){
    messagecontent.textContent = "The message has been sent successfully";

    save(name, email, message);

    setInterval(function(){ 
      messagecontent.textContent = "";
    },6000);  

    ReqForm.reset();
  }
}

ReqForm.addEventListener("submit", function(event){
  event.preventDefault();

  let name = Yourname.value;
  let email = YourEmail.value;
  let message = YourMessage.value;

  validateformdata(name,email,message);
  submitformdata(name,email,message);
});