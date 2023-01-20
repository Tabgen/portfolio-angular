import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  abouttext: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit neque, ultricies varius urna sit amet, convallis pulvinar est. Ut luctus lectus at tortor volutpat, vestibulum placerat magna maximus.";
  om: string = "Om meg";
}
