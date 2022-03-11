import { Component } from '@angular/core';
// import { yolov3, yolov3Tiny } from 'tfjs-yolov3';
import { yolov3Tiny } from './service/yolo-detector/yolo-detector.service';

import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public img: any;
  private imgSize: number[] = [];
  private boxes: any;

  ngOnInit(): void {}

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target !== null) {
          this.img = event.target.result;
          this.startToDetect();
        }
      };
    }
  }

  async startToDetect(): Promise<void> {
    const yolo = await yolov3Tiny(); // pre-load model (35M)
    // or
    // const yolo = await yolov3() // pre-load model (245M)
    console.log('=====start to get');
    console.time('get');
    const getImg = document.getElementById('inputIMG') as HTMLImageElement;
    console.timeEnd('get');
    this.imgSize.push(getImg.width, getImg.height);
    console.log('=====start to detect');
    console.time('detect');
    this.boxes = await yolo(getImg);
    console.timeEnd('detect');
    this.draw(this.boxes); // Some draw function
  }

  draw(boxes: any[]): void {
    const canvas = <HTMLCanvasElement>document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(
        document.getElementById('inputIMG') as HTMLImageElement,
        0,
        0,
        this.imgSize[0],
        this.imgSize[1]
      );
      boxes.forEach((box) => {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'red';
        ctx.rect(box.left, box.top, box.width, box.height);
        ctx.stroke();
        ctx.font = '10px serif';
        ctx.fillText(box.classes, box.left, box.top);
      });
    }
  }
}
