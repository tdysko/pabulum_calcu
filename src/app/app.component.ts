import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diet Home';
  bottomBarText: string = 'Your requirements are unknown. Use conditions functionality to calculate';

  constructor() {

  }
}
