import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DairyFarm_4';

  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }
}
