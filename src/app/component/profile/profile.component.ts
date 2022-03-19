import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as PIXI from 'pixi.js';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  containerForPIXI: HTMLElement | null | undefined;
  app: PIXI.Application | undefined;
  height: number = 0;
  profileFrame: PIXI.Graphics | undefined;
  widthForProfileFrame: number = 90;
  heightForProfileFrame: number = 100;

  profileVidoe: PIXI.Sprite | undefined;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.loadBackgroundImg();
    this.SetupProfileFrame();
  }

  private loadBackgroundImg(): void {
    this.containerForPIXI = document.getElementById('containerForPIXI');
    if (this.containerForPIXI) {
      this.height = window.innerHeight;
      this.app = new PIXI.Application({
        width: this.containerForPIXI.getBoundingClientRect().width,
        height: this.height,
      });
      this.containerForPIXI.appendChild(this.app.view);
      const background = PIXI.Sprite.from('../../../assets/Parchment.jpg');
      // this.b1.scale.set(0.41);
      this.app.stage.addChild(background);
    }
  }

  private SetupProfileFrame(): void {
    this.profileFrame = new PIXI.Graphics();

    this.profileFrame.position.set(10, 10);
    if (this.app) {
      this.app.stage.addChild(this.profileFrame);
      this.attachVideoOnProfileFrame();
    }
  }

  private attachVideoOnProfileFrame(): void {

    // const tt =  new PIXI
    const videoTexture = PIXI.Texture.from('../../../assets/profile.mp4');
    const videoSprite = new PIXI.Sprite(videoTexture);
    videoSprite.scale.set(0.3);

    this.profileFrame?.addChild(videoSprite);
  }

}
