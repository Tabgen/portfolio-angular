import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  dark() {
    document.getElementById("signaturew").style.display = "block";
    document.getElementById("signature").style.display = "none";
    document.getElementById("header").style.color = "white";
    document.getElementById("lswitch").style.display = "block";
    document.getElementById("tswtich").style.display = "none";
    document.getElementById("header").style.backgroundColor = "#232323";
    document.getElementById("about-container").style.backgroundColor = "#232323";
    document.getElementById("projects").style.backgroundColor = "#232323";
    document.getElementById("modal").style.backgroundColor = "#232323";
    document.getElementById("close").style.backgroundColor = "#232323";
    document.getElementById("cname").style.backgroundColor = "#232323";
    document.getElementById("cname").style.borderColor = "white";
    document.getElementById("cname").style.color = "white";
    document.getElementById("cpost").style.backgroundColor = "#232323";
    document.getElementById("cpost").style.borderColor = "white";
    document.getElementById("cpost").style.color = "white";
    document.getElementById("cmessage").style.backgroundColor = "#232323";
    document.getElementById("cmessage").style.borderColor = "white";
    document.getElementById("cmessage").style.color = "white";
    document.getElementById("contact").style.backgroundColor = "#232323";
    document.getElementById("close").style.color = "white";
    document.getElementById("Hello").style.color = "white";
    document.getElementById("about").style.color = "white";
    document.getElementById("projects").style.color = "white";
    document.getElementById("web").style.color = "white";
    document.getElementById("git").style.color = "white";
    document.getElementById("headline").style.color = "white";
    document.getElementById("readmore").style.color = "#4361ee";
    document.getElementById("submit").style.color = "black";
    document.getElementById("submit").style.backgroundColor = "white";
    document.getElementById("login-form").style.backgroundColor = "#232323";
    document.getElementById("login-form").style.color = "white";
    

  }

  light() {
    document.getElementById("signaturew").style.display = "none";
    document.getElementById("signature").style.display = "block";
    document.getElementById("header").style.color = "black";
    document.getElementById("lswitch").style.display = "none";
    document.getElementById("tswtich").style.display = "block";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("about-container").style.backgroundColor = "white";
    document.getElementById("projects").style.backgroundColor = "white";
    document.getElementById("modal").style.backgroundColor = "white";
    document.getElementById("close").style.backgroundColor = "white";
    document.getElementById("cname").style.backgroundColor = "white";
    document.getElementById("cname").style.borderColor = "rgba(0, 0, 0, 0.3764705882)";
    document.getElementById("cname").style.color = "rgba(0, 0, 0, 0.8156862745)";
    document.getElementById("cpost").style.backgroundColor = "white";
    document.getElementById("cpost").style.borderColor = "rgba(0, 0, 0, 0.3764705882)";
    document.getElementById("cpost").style.color = "rgba(0, 0, 0, 0.8156862745)";
    document.getElementById("cmessage").style.backgroundColor = "white";
    document.getElementById("cmessage").style.borderColor = "rgba(0, 0, 0, 0.3764705882)";
    document.getElementById("cmessage").style.color = "rgba(0, 0, 0, 0.8156862745)";
    document.getElementById("contact").style.backgroundColor = "white";
    document.getElementById("close").style.color = "black";
    document.getElementById("Hello").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("projects").style.color = "black";
    document.getElementById("web").style.color = "black";
    document.getElementById("git").style.color = "black";
    document.getElementById("headline").style.color = "black";
    document.getElementById("readmore").style.color = "#4361ee";
    document.getElementById("submit").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "black";
    document.getElementById("login-form").style.backgroundColor = "white";
    document.getElementById("login-form").style.color = "black";

  }

}
