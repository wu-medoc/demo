import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  /** 緯度 */
  lat: number;
  /** 經度 */
  lng: number;
  /** 視圖倍率 */
  zoomValue = 15;
  /** 使用者所在地 icon */
  userUrl = '../../../img/callcar/map/user.svg';
  /** 景點 icon */
  iconUrl = '../../../img/callcar/map/location.svg';


  constructor() { }


  ngOnInit() {
    this.lat = 25.034306;
    this.lng = 121.564603;

    this.GetLocation();
  }


  /** 取得使用者定位 */
  GetLocation(): void {

    if (navigator.geolocation !== undefined) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        /* 22.6117234 120.2979388 */
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        });
    } else {
      alert('該瀏覽器不支援定位功能');
    }
  }
}
