import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MyMarker } from './marker';
import { MarkersService } from './markers.service';
import { GoogleMapsAPIWrapper, AgmMap } from '@agm/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'ngx-useful-swiper';

declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, AfterViewInit {

  markers: MyMarker[];
  @ViewChild('AgmMap') agmMap: AgmMap;
  @ViewChild('usefulSwiper', {static: false}) usefulSwiper: SwiperComponent;

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
  /** 目前所顯示資訊小窗編碼 */
  public openedWindow = 0; // alternative: array of numbers
  /** 目前所選景點 */
  public AreaItem: MyMarker;
  /** 篩選清單開啟狀態 */
  public dirFilterOpen = false;
  /** 目錄編碼 */
  public areaMenuCode = 0;
  /** 目錄編碼 */
  public areaMenuName: string;
  /** 下方資訊卡 swiper */
  public infoCard: SwiperOptions = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
    on: {
      slideChange: () => {
        // get active AreaItem, get its code, and navigate on map
        this.AreaItem = this.markers[this.usefulSwiper.swiper.activeIndex];
        this.openedWindow = this.AreaItem.id;
        console.log(this.AreaItem);
      }
    }
  };

  constructor(private markersService: MarkersService) { }


  ngOnInit() {
    this.lat = 25.034306;
    this.lng = 121.564603;

    this.GetLocation();
    this.getMarkers();
  }

  onMapReady(map?: google.maps.Map ){
    if (map) {
      map.setOptions({
        mapTypeControl: false,
        styles : [
           {
             featureType: 'poi',
             stylers: [
              { visibility: 'off' }
             ]
           }
        ]
      });
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log(this.agmMap);
    this.agmMap.mapReady.subscribe((map: { fitBounds: (arg0: any) => void; }) => {
      const bounds = new google.maps.LatLngBounds();
      for (const mm of this.markers) {
        bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
      }
      map.fitBounds(bounds);
    });
  }

  getMarkers(): void {
    this.markers = this.markersService.getMarkers();
  }

  mapIdle() {
    console.log('idle');
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


  /** 選取景點
   * @param index 景點索引 (markers 近 > 遠排序)
   */
  selectSpot(index: number): void {
    this.usefulSwiper.swiper.slideTo(index);
    console.log(index);
  }
}
