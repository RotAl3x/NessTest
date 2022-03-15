import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.scss']
})
export class OccupancyComponent {
  @Input() per: number=0;

}
