import { Component } from '@angular/core';

@Component({
  selector: 'lisktest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lisk-angular';

  JSON = JSON;

  value = {
    text: 'text in angular component'
  }

  clicked(event: Event) {
    console.log(event)
  }
}
