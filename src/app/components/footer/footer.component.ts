import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  showlogin() {
    console.log("test");
    document.getElementById("login-form").style.display = "flex";
    document.getElementById("footer").style.height = "50vh";
  
  }

  hidelogin() {
    console.log("test");
    document.getElementById("login-form").style.display = "none";
    document.getElementById("footer").style.height = "5vh";
  }

}
