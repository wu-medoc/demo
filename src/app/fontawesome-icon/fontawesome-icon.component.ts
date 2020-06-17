import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-fontawesome-icon',
  templateUrl: './fontawesome-icon.component.html',
  styleUrls: ['./fontawesome-icon.component.css'],  
  animations: [ slideInAnimation ]
})
export class FontawesomeIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
