import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css'],
  animations: [ slideInAnimation ]
})
export class LazyloadComponent implements OnInit {
  title = 'Lazy loading feature modules';

  constructor() {
  }

  ngOnInit() {
  }

}
