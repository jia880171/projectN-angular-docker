import { yolov3Tiny } from '../../service/yolo-detector/yolo-detector.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-yolo-demo',
  templateUrl: './yolo-demo.component.html',
  styleUrls: ['./yolo-demo.component.scss'],
})
export class YoloDemoComponent implements OnInit, AfterViewInit {
  public img: any;
  public detecting = false;
  public mediaDeviceError = '';
  private boxes: any;
  private intervalId: any;
  WIDTH = 320;
  HEIGHT = 240;

  @ViewChild('video')
  public video!: ElementRef;

  @ViewChild('canvas')
  public canvas!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  async ngAfterViewInit(): Promise<void> {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    await this.setupWebcam();
  }

  async setupWebcam(): Promise<void> {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
        } else {
          this.mediaDeviceError = 'You have no output video device';
        }
      } catch (e) {
        this.mediaDeviceError = e;
      }
    }
  }

  startDetect(): void {
    this.intervalId = setInterval(() => {
      this.detectByYolo();
    }, 300);
    this.detecting = true;

  }

  stopDetect(): void {
    clearInterval(this.intervalId);
    this.detecting = false;
    this.canvas.nativeElement.setAttibute(this.video);

  }

  async detectByYolo(): Promise<void> {
    this.img = this.video.nativeElement;
    const yolo = await yolov3Tiny(); // pre-load model (35M)
    // tslint:disable-next-line:no-console
    console.time('detect');
    this.boxes = await yolo(this.img);
    // tslint:disable-next-line:no-console
    console.timeEnd('detect');
    await this.drawOnCanvas();
  }

  drawOnCanvas(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(this.img, 0, 0, this.WIDTH, this.HEIGHT);
      // draw the boxes
      this.boxes.forEach(
        (box: {
          left: number;
          top: number;
          width: number;
          height: number;
          classes: string;
        }) => {
          ctx.beginPath();
          ctx.lineWidth = 3;
          ctx.strokeStyle = 'red';
          ctx.rect(box.left, box.top, box.width, box.height);
          ctx.stroke();
          ctx.font = '10px serif';
          ctx.fillText(box.classes, box.left, box.top);
        }
      );
    }
  }
}
