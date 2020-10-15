import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { moreData, mySerivce } from '../interfaceData';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sortpage',
  templateUrl: './sortpage.component.html',
  styleUrls: ['./sortpage.component.css', '../../dist/style/home.min.css']
})
export class SortpageComponent implements OnInit, AfterViewInit {
  moreList = moreData;
  moreMy = mySerivce;
  /** 我的服務編輯狀態 */
  public editFunction = false;
  /** 我的服務-加減class(remove-item:isAdd=false, add-item:isAdd=true) */
  isAdd = false;
  /** 我的服務-數量提醒最少4個 */
  public noticeFour = false;
  /** 我的服務-數量提醒最多9個 */
  public noticeNine = false;

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

  /** 更多服務按鈕增減 */
  serviceClick(code: number, action: boolean) {
    console.log(code, action);

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
      const add = this.moreList.filter(item => item.Function_ID === code)
      .filter(item => item.Function_ID === code)[0];
      this.moreMy.push(add);
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

  /** href disabled */
  disabled(event?: MouseEvent) {
    event.preventDefault();
    console.log(event);
  }

  // tslint:disable-next-line: variable-name 返回鍵使用
  constructor(private _location: Location, private elementRef: ElementRef) { }
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    console.log(this.groupCategary);
  }

  ngAfterViewInit() {
  }
}
