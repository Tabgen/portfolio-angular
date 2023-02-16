import { Component } from '@angular/core';
import { FirebaseTSFirestore } from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { provideAuth,getAuth,Auth,signInWithEmailAndPassword } from '@angular/fire/auth';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
let projectid = "project"
//const auth = getAuth();
let userid = ""



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})

export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_9k7d1zp', 'template_85bcqtl', e.target as HTMLFormElement, 'PqwSRwEEPurgz5zV9')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

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
      const user = userCredential.user;
      userid = user.uid;
      sessionStorage.setItem("userid", userid);
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
    document.getElementById("align-center").style.display = "flex";
    
  }

  hidelogin() {
    document.getElementById("align-center").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
    document.getElementById("contact-container").style.display = "block";
    userid = "";
    sessionStorage.setItem("userid", userid);
  }
}
