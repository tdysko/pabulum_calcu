import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details-display',
  templateUrl: './details-display.component.html',
  styleUrls: ['./details-display.component.sass']
})
export class DetailsDisplayComponent {

  @Input() observe: Subject<any>;

  @Input() detail: any;
}
