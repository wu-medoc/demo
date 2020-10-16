import { Component, OnInit, AfterViewInit } from '@angular/core';
import { moreData, mySerivce } from '../interfaceData';
import {Location} from '@angular/common';
import { SortablejsOptions } from 'ngx-sortablejs/lib/sortablejs-options';

@Component({
  selector: 'app-sortpage',
  templateUrl: './sortpage.component.html',
  styleUrls: ['./sortpage.component.css', '../../dist/style/home.min.css']
})
export class SortpageComponent implements OnInit, AfterViewInit {
  [x: string]: any;
  /** 服務資料初始 */
  moreList = moreData;
  moreMy = mySerivce.concat();
  moreOg = mySerivce.concat();
  /** 我的服務編輯狀態 */
  public editFunction = false;
  /** 我的服務-數量提醒最少4個 */
  public noticeFour = false;
  /** 我的服務-數量提醒最多9個 */
  public noticeNine = false;
  /** 我的服務-加減class(remove-item:isAdd=false, add-item:isAdd=true) */
  isAdd = false;

  // tslint:disable-next-line: deprecation
  options: SortablejsOptions = {
    disabled: true,
    group: '.link-item',
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

  /** 更多服務按鈕增減 */
  serviceClick(code: number, action: boolean) {
    this.options = { onUnchoose: (evt) => evt.stopPropagation() };
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
  }

  /** editFunctionToggle */
  editFunctionToggle() {
    this.editFunction = !this.editFunction;
    this.options = {
      group: '.link-item',
      disabled: false,
      onUpdate: () => this.moreMy,
    };
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
  }

  // tslint:disable-next-line: variable-name 返回鍵使用
  constructor(private _location: Location) {
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {
    // console.log(this.groupCategary);
  }
  ngAfterViewInit() {
  }
}
