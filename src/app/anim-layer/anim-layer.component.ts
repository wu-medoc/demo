import { Component, OnInit } from '@angular/core';
import { slideInAnimation, layerAnimation } from '../animations';
import { trigger, transition, animate, style } from '@angular/animations';
import { Anlayer } from './anlayer';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-anim-layer',
  templateUrl: './anim-layer.component.html',
  styleUrls: ['./anim-layer.component.css'],  
  animations: [ slideInAnimation, layerAnimation]
})
export class AnimLayerComponent implements OnInit {

  layerData = [
    new Anlayer(1, 'layer1'),
    new Anlayer(2, 'layer2'),
    new Anlayer(3, 'layer3'),
    new Anlayer(4, 'layer4'),
    new Anlayer(5, 'layer5'),
    new Anlayer(6, 'layer6')
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  isShown = true;
  toggle() {
    this.isShown = !this.isShown;
  }
  prodId:number=0;
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.prodId = params['id'];
    });
  }

}

