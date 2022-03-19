import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss'],
})
export class PhotoContainerComponent implements OnInit, AfterViewInit {
  containerForPIXI: HTMLElement | null | undefined;
  width: number = 0;
  height: number = 0;

  app: any;
  widthForFrame: number = 250;
  heightForFrame: number = 300;

  frame: any;
  mask: any;
  contentFotMask: any;
  text: any;

  b1: any;
  b2: any;

  rate: number = 1;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadImageAsBackground();
    this.setupWindow();
    this.setupMask();
    this.setupContentForMask();
    this.tickerForContent();

    this.video();
  }

  private loadImageAsBackground(): void {
    this.containerForPIXI = document.getElementById('containerForPIXI');
    if (this.containerForPIXI) {
      this.app = new PIXI.Application({
        width: this.containerForPIXI.getBoundingClientRect().width,
        height: window.innerHeight,
      });
      this.containerForPIXI.appendChild(this.app.view);
      this.b1 = PIXI.Sprite.from('../../../assets/monochrome.jpeg');
      this.b1.scale.set(0.41);
      this.app.stage.addChild(this.b1);
    }
  }

  private video(): void{
    // const containerForProfile = new PIXI.Container();
    const profileFrame = PIXI.Sprite.from('../../../assets/profile.mp4');
    profileFrame.scale.set(0.1);
    profileFrame.position.set(10,10);
    this.frame.addChild(profileFrame);

  }

  private setupWindow(): void {
    // Create window frame
    this.frame = new PIXI.Graphics();
    // this.frame.beginFill(0x666666);
    this.frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
    this.frame.drawRect(0, 0, this.widthForFrame, this.heightForFrame);
    this.frame.position.set(100, 60);
    this.app.stage.addChild(this.frame);
  }

  private setupMask(): void {
    // Create a graphics object to define our mask
    this.mask = new PIXI.Graphics();
    // Add the rectangular area to show
    this.mask.beginFill(0x000000);
    this.mask.drawRect(0, 0, this.widthForFrame - 8, this.heightForFrame - 20);
    this.mask.endFill();
  }

  private setupContentForMask(): void {
    // Add container that will hold our masked content
    const maskContainer = new PIXI.Container();
    // Set the mask to use our graphics object from above
    maskContainer.mask = this.mask;
    maskContainer.filters = [new PIXI.filters.NoiseFilter(0.5)];
    // Add the mask as a child, so that the mask is positioned relative to its parent
    maskContainer.addChild(this.mask);
    // Offset by the window's frame width
    maskContainer.position.set(4, 8);
    // And add the container to the window!
    this.frame.addChild(maskContainer);

    // Create contents for the masked container
    this.text = new PIXI.Text(
      'Do not go gentle into that good night,\n' +
        'Old age should burn and rave at close of day;\n' +
        'Rage, rage against the dying of the light.',
      {
        fontSize: 24,
        fill: 0xffffff,
        wordWrap: true,
        wordWrapWidth: this.widthForFrame - 8,
      }
    );
    this.text.x = 10;
    maskContainer.addChild(this.text);
  }

  private tickerForContent(): void {
    // Add a ticker callback to scroll the text up and down
    let elapsed = 0.0;
    this.app.ticker.add((delta: number) => {
      elapsed += delta;
      this.text.y = 0;
      this.text.y += Math.cos(elapsed / 80.0) * 30.0;
    });
  }
}
