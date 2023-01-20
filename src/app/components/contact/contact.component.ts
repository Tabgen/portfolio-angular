import { Component } from '@angular/core';
import { FirebaseTSFirestore } from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { provideAuth,getAuth,Auth,signInWithEmailAndPassword } from '@angular/fire/auth';

let projectid = "project"
//const auth = getAuth();



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent {
  
  constructor( private auth: Auth,) {
  }
  private firestore: FirebaseTSFirestore;
  dataRef;

  

  logintodb() {
    let auth = getAuth();
    let password = (<HTMLInputElement>document.getElementById("passord")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("login-text").innerHTML = "logget inn";
      document.getElementById("newcard").style.display = "flex";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  });
  }


  mailresponse: string = "Send en mail!";
  showlogin() {
    document.getElementById("login-form").style.display = "flex";
    document.getElementById("contact-container").style.display = "none";
    
  }

  hidelogin() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
    document.getElementById("contact-container").style.display = "block";
  }
}