import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  dark() {
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
  }

}
