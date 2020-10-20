import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { moreData, mySerivce } from '../interfaceData';
import { Location } from '@angular/common';
import { SortablejsOptions } from 'ngx-sortablejs/lib/sortablejs-options';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  /** 我的服務-加減class(remove-item:isAdd=false, add-item:isAdd=true) */
  isAdd = false;
  isClick = false;

  // tslint:disable-next-line: deprecation
  options: SortablejsOptions = {
    disabled: true,
    animation: 150,
    handle: '#myService',
    draggable: '.mysvc',
    group: '.mysvc'
  };

  /** Function_CategaryCode排序 */
  svCategary = moreData.sort((a, b) => a.Function_CategaryCode - b.Function_CategaryCode);
  /** Function_CategaryName群組 */
  groupCategary = this.svCategary.reduce((r, { Function_CategaryName: name, ...object }) => {
    let temp = r.find(o => o.name === name);
    if (!temp) { r.push(temp = { name, children: [] }); }
    ((this.moreMy.filter( exclude => exclude.Function_ID === object.Function_ID)).length > 0) ? this.isAdd = true : this.isAdd = false;
    temp.children.push({ object, isAdd: this.isAdd });
    return r;
  }, []);
  /** 更多服務按鈕增減 暫停srotableJS */
  moreMyClick(event: any, action: boolean) {
    this.isClick = !this.isClick;
    this.options = {
      disabled: this.isClick,
    };
  }
  /** 更多服務按鈕增減 for #moreServiceList */
  serviceClick(code: number, action: boolean) {
    console.log(this);
    this.noticeNine = this.moreMy.length === 9 ? true : false;
    this.noticeFour = this.moreMy.length === 4 ? true : false;
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
      if (add !== undefined) { this.moreMy.push(add); }
      this.noticeFour = false;
      }
    }
    // 根據我的服務清單，修改下面更多服務的class狀態
    this.groupCategary = this.svCategary.reduce((r, { Function_CategaryName: name, ...object }) => {
      let temp = r.find(o => o.name === name);
      if (!temp) { r.push(temp = { name, children: [] }); }
      ((this.moreMy.filter( exclude => exclude.Function_ID === object.Function_ID)).length > 0) ? this.isAdd = true : this.isAdd = false;
      temp.children.push({ object, isAdd: this.isAdd });
      return r;
    }, []);
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
    this.options = {
      disabled: false,
    };
  }

  /** 更新我的服務 */
  updateUserService(): void {
    this.editFunction = false;
    this.options = {
      disabled: true,
    };
    // 如果我的服務沒有修改，不用save
    if ( JSON.stringify(this.moreOg) !== JSON.stringify(this.moreMy)) {
      this.moreOg.length = 0;
      this.moreMy.forEach(code => {
        this.moreOg.push(code);
      });
    }else{
      this.moreOg = mySerivce.concat();
    }
  }

  /** 取消更新我的服務 */

  cancelUserService(): void {
    this.editFunction = false;
    this.options = {
      disabled: true,
    };
  }

  // 返回鍵
  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    // console.log(this.groupCategary);
  }
  ngAfterViewInit() {
    // this.elementRef.nativeElement.querySelector('.mysvc').addEventListener('click', this.elementRef.nativeElement.bind(this));
  }
}
