import { Component, OnInit, DoCheck } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css'],
})
export class CropperComponent implements OnInit {
  imageChangedEvent: any;
  isCropper = false;
  croppedImage: any = 'https://wu-medoc.github.io/demo/img/share/oopsarea.png';
  ngOnInit(){
    console.log(this);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.isCropper = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  cropperOk() {
    this.isCropper = false;
  }

}
