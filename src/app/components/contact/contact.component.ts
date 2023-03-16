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

  mailresponse: string = "Send en mail!";

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('', '', e.target as HTMLFormElement, 'PqwSRwEEPurgz5zV9')
      .then((result: EmailJSResponseStatus) => {
        (<HTMLInputElement>document.getElementById("cname")).value = "";
        (<HTMLInputElement>document.getElementById("cpost")).value = "";
        (<HTMLInputElement>document.getElementById("cmessage")).value = "";
        this.mailresponse = "Sendt!";
      }, (error) => {
        this.mailresponse = "Noe gikk galt!";
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
    userid = null;
    sessionStorage.setItem("userid", userid);
  }
}
