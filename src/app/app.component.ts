import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Joey Aschenbrenner");
  }

  goToElement(id: string) {
    const element = document.getElementById(id);
    if(element != null)
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
