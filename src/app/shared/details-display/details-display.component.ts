import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details-display',
  templateUrl: './details-display.component.html',
  styleUrls: ['./details-display.component.sass']
})
export class DetailsDisplayComponent {

  @Input() public observe: Subject<any>;

  @Input() public detail: any;
}
