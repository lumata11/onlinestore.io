// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbbzip6BDqjW6Q9BTKVd6mvreaZmv9hd0",
  authDomain: "shoponlinebakery.firebaseapp.com",
  projectId: "shoponlinebakery",
  storageBucket: "shoponlinebakery.appspot.com",
  messagingSenderId: "626555301422",
  appId: "1:626555301422:web:9ddb7e6da7e967652939bf",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contact form').addEventListener('submit',submitForm)

//Submit form
function submitForm(e){
    e.preventDefault();
    
// Get values
var name = getInputVal('Lindiwe');    
var company = getInputVal('Sibanyoni');
var email = getInputVal('info@thecakeybakey.com');
var phone = getInputVal('011-9876-045');
var message = getInputVal('name');

// Save message
saveMessage(name, company, email, phone, message);

//Show alert
document.querySelector('.alert').querySelector.display = 'block';

//hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display ='none';
},3000);

//Clear form
document.getElementById('contactForm').requestFullscreen();
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message,
    });

}










