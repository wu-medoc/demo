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
  isMove = false;
  // tslint:disable-next-line: deprecation
  options: SortablejsOptions = {
    disabled: true,
    handle: '#myService',
    draggable: '.mysvc',
    group: '.mysvc',
    onStart: (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      // console.log('S', evt.item.id, evt.target);
    },
    onMove: (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.isMove = true;
      // console.log('M', this.isMove, evt, this.moreMy);
    },
    onEnd: (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      // tslint:disable-next-line: radix
      this.serviceClick(parseInt(evt.item.id), false);
      this.isMove = false;
      // console.log('E', this.isMove, evt, this.moreMy);
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
  moreDel(res: number) {
    this.moreMy.splice(res, 1);
    this.noticeNine = false;
  }
  moreAdd(additem: any) {
    this.moreMy.splice(this.moreMy.length, 0, additem);
    this.noticeFour = false;
  }

  /** 更多服務按鈕增減 for #moreServiceList */
  serviceClick(code: number, action: boolean) {
    this.noticeNine = this.moreMy.length === 9 ? true : false;
    this.noticeFour = this.moreMy.length === 4 ? true : false;
    if (code > 0){
      // 判斷被點擊的ICON是否已經在我的服務內
      const result = this.moreMy.findIndex(item => item.Function_ID === code);
      const add = this.moreList.filter(item => item.Function_ID === code)[0];
      if (result > -1) {
      // 在我的服務內, 且未拖曳
        if (this.moreMy.length > 4 && this.isMove === false) {
          // 數量>4
          this.moreDel(result);
          // console.log('moreDel', code, this.moreMy.length, action);
        }
      }else{
      // 不在我的服務內 (action === null 代表由我的服務點選,只能移除不能增加)
        if (action !== null){
          if (this.moreMy.length >= 4 && this.moreMy.length < 9) {
            // 數量>=4且<9
            this.moreAdd(add);
            // console.log('moreAdd', code, this.moreMy.length, action);
          }
        }
      }
      this.sortClass();
      return this;
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
    this.moreMy = this.moreOg.concat();
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
