import { Component, OnInit, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { moreData, mySerivce } from '../interfaceData';
import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-sortpage',
  templateUrl: './sortpage.component.html',
  styleUrls: ['./sortpage.component.css', '../../dist/style/home.min.css']
})
export class SortpageComponent implements OnInit, AfterViewInit {
  /** 服務資料初始 */
  moreList = moreData;
  public moreMy = mySerivce.concat();
  moreOg = mySerivce.concat();
  /** 我的服務編輯狀態 */
  public editFunction = false;
  /** 我的服務-數量提醒最少4個 */
  public noticeFour = false;
  /** 我的服務-數量提醒最多9個 */
  public noticeNine = false;
  public groupCategary = [];
  /** 我的服務-加減class(remove-item:isAdd=false, add-item:isAdd=true) */
  isAdd = false;
  // tslint:disable-next-line: deprecation
  options: SortablejsOptions = {
    disabled: true,
    handle: '#myService',
    draggable: '.mysvc',
    group: '.mysvc',
    onChoose: (evt) => {
      evt.preventDefault();
      // evt.stopPropagation();
      this.sortClass();
      console.log('S', evt.item.id, this.moreMy);
    },
    onUnchoose: (evt) => {
      if (evt.originalEvent.defaultPrevented === false){
        // tslint:disable-next-line: radix
        this.serviceClick(parseInt(evt.item.id), false);
      }
      // console.log('M', evt, this.moreMy);
    },
  };

  /** 變更class加減符號 */
  sortClass() {
    /** Function_CategaryCode排序 */
    const svCategary = moreData.sort((a, b) => a.Function_CategaryCode - b.Function_CategaryCode);
    /** Function_CategaryName群組 */
    this.groupCategary = svCategary.reduce((r, { Function_CategaryName: name, ...object }) => {
      let temp = r.find(o => o.name === name);
      if (!temp) { r.push(temp = { name, children: [] }); }
      ((this.moreMy.filter( exclude => exclude.Function_ID === object.Function_ID)).length > 0) ? this.isAdd = true : this.isAdd = false;
      temp.children.push({ object, isAdd: this.isAdd });
      return r;
    }, []);
  }

  sortStart() {
    this.options = {disabled: false};
  }
  sortEnd() {
    this.options = {disabled: true};
  }

  /** 更多服務按鈕增減 for #moreServiceList */
  serviceClick(code: number, action: boolean) {
    this.noticeNine = this.moreMy.length === 9 ? true : false;
    this.noticeFour = this.moreMy.length === 4 ? true : false;
    if (code > 0){
      // 判斷被點擊的ICON是否已經在我的服務內
      const result = this.moreMy.findIndex(item => item.Function_ID === code);
      if (result > -1) {
        // 已經在我的服務內且數量>4，就將這個ICON移出我的服務
        if (this.moreMy.length > 4) {
          this.moreMy.splice(result, 1);
          this.noticeNine = false;
        }
      } else {
        // 不在我的服務內且數量<9，就在我的服務增加這個ICON
        if (this.moreMy.length < 9) {
          const add = this.moreList.filter(item => item.Function_ID === code)[0];
          if (add !== undefined) {
            this.moreMy.splice(this.moreMy.length, 0, add);
            this.noticeFour = false;
          }
        }
      }
      this.sortClass();
      console.log(code, this.noticeFour, this.noticeNine, this.moreMy.length);
    }
  }

  constructor(private location: Location, private http: HttpClient, private elementRef: ElementRef) {
  }

  /** href disabled */
  disabled(event?: MouseEvent) {
    event.preventDefault();
  }

  /** editFunctionToggle */
  editFunctionToggle() {
    this.editFunction = true;
    this.sortStart();
  }

  /** 更新我的服務 */
  updateUserService(): void {
    this.editFunction = false;
    // 如果我的服務沒有修改，不用save
    if ( JSON.stringify(this.moreOg) !== JSON.stringify(this.moreMy)) {
      this.moreOg.length = 0;
      this.moreMy.forEach(code => {
        this.moreOg.push(code);
      });
    }else{
      this.moreOg = mySerivce.concat();
    }
    this.sortEnd();
  }

  /** 取消更新我的服務 */

  cancelUserService(): void {
    this.editFunction = false;
    this.sortEnd();
  }

  // 返回鍵
  backClicked() {
    this.location.back();
    this.sortEnd();
  }

  ngOnInit() {
    this.sortClass();
    // console.log(this.groupCategary);
  }
  ngAfterViewInit() {
    // this.elementRef.nativeElement.querySelector('.mysvc').addEventListener('click', this.elementRef.nativeElement.bind(this));
  }
}
