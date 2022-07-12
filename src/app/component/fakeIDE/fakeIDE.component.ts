import { Animation } from './animation';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';

enum PROBLEM_CODE {
  CONNECTED_GRAPH = '2',
  CHECH_HTML_DOM_ELEMENT = '3',
  RECURSIVE = '5',
}
@Component({
  selector: 'app-fakeIDE',
  templateUrl: './fakeIDE.component.html',
  styleUrls: ['./fakeIDE.component.scss'],
  animations: [
    Animation.cubeRotation,
    Animation.codeSection,
    Animation.problemsSection,
    Animation.solutionPanelSlide,
  ],
})
export class FakeIDEComponent implements OnInit, AfterViewInit {
  activeSolutionPanel = '0';

  recursiveTest = 0;
  waitingStatus = false;

  currentIndex = 0;
  isReset = false;
  isChecking = false;
  elementsClass = new Array<string>();
  domFormControl = new FormControl('');
  elements = new Array<string>();
  elementsStack = new Array<string>();
  currentDOM = '';
  statusForSolutionPanel = [
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
  ];

  connectIsReset = false;
  map = new Array<Array<number>>(
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0]
  );
  connectedMap = new Array<Array<string>>();
  mapClass = new Array<Array<string>>();
  problem = '1';

  runningInterval: any;
  loading = true;
  typingCodes = '';
  codebase = [
    '\npublic class Example {',
    '\n  public static void main(String[] args) {',
    '\n      System.out.println("Hello World");',
    '\n  }',
    '\n}',
  ];
  rotationStatus: string = 'animationStart';

  constructor() {}

  ngOnInit(): void {
    this.mapInit();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  private mapInit(): void {
    for (let i = 0; i < this.map.length; i++) {
      this.connectedMap.push(new Array<string>());
      this.mapClass.push(new Array<string>());
      for (let j = 0; j < this.map[0].length; j++) {
        this.connectedMap[i].push('null');
        this.mapClass[i].push('null');
      }
    }
    this.setMapClass();
  }

  ngAfterViewInit(): void {}

  onRotationDone($event: any): void {
    if (this.loading) {
      this.rotationStatus =
        this.rotationStatus === 'animationStart'
          ? 'animationStop'
          : 'animationStart';
    }
  }
  isLoading(): boolean {
    if (this.loading) {
      return true;
    } else {
      return false;
    }
  }

  async printLine(codebaseLine: string): Promise<void> {
    return new Promise<void>((resoleve) => {
      const chars = Array.from(codebaseLine);
      console.log('========chars??: ', chars);
      let i = 0;
      this.runningInterval = setInterval(() => {
        this.typingCodes += chars[i++];
        if (i === chars.length) {
          resoleve();
          clearInterval(this.runningInterval);
        }
      }, 10);
    });
  }

  async printLines(): Promise<void> {
    this.typingCodes = '';
    // !!!!!!!! promise does not work inside for-each loop
    for (const codebaseLine of this.codebase) {
      await this.printLine(codebaseLine);
    }
  }

  public onChangeProblem(code: string): void {
    this.problem = code;
    switch (code) {
      case '1': {
        this.codebase = [
          '\ndivideBy2(baseMinus2Bits: string): string{',
          '\n   const leftShiftBits = leftShift(baseMinus2Bits)',
          '\n   return minus2Adder(baseMinus2Bits, leftShiftBits)',
          '\n}',
          '\n',
          '\nminus2Adder(bits1: string, bits2: string): string{',
          '\n}',
        ];
        clearInterval(this.runningInterval);
        this.printLines();
        break;
      }
      case PROBLEM_CODE.CONNECTED_GRAPH: {
        this.setSolutionPanelStatus(PROBLEM_CODE.CONNECTED_GRAPH);
        this.codebase = [
          '\n backTracking(origianlPoint: Array<number>, startPoint: Array<number>): void{',
          '\n   for(row of rows){',
          '\n     for(column of columns{',
          '\n       backTracking([row, column])',
          '\n     }',
          '\n   }',
          '\n }',
          '\n',
          '\n backTracking( stratPoint): void{',
          '\n   if (untouched && 0){',
          '\n     touch && set the origin',
          '\n     backTrack(up)',
          '\n     backTrack(down)',
          '\n     backTrack(left)',
          '\n     backTrack(right)',
          '\n    }',
          '\n}',
        ];
        clearInterval(this.runningInterval);
        this.printLines();
        break;
      }

      case PROBLEM_CODE.CHECH_HTML_DOM_ELEMENT: {
        this.setSolutionPanelStatus(PROBLEM_CODE.CHECH_HTML_DOM_ELEMENT);
        this.codebase = [
          '\n check(origianlPoint: Array<number>, startPoint: Array<number>): void{',
          '\n   for(row of rows){',
          '\n     for(column of columns{',
          '\n       backTracking([row, column])',
          '\n     }',
          '\n   }',
          '\n }',
          '\n',
          '\n backTracking( stratPoint): void{',
          '\n   if (untouched && 0){',
          '\n     touch && set the origin',
          '\n     backTrack(up)',
          '\n     backTrack(down)',
          '\n     backTrack(left)',
          '\n     backTrack(right)',
          '\n    }',
          '\n }',
        ];
        clearInterval(this.runningInterval);
        this.printLines();
        break;
      }

      case PROBLEM_CODE.RECURSIVE: {
        this.setSolutionPanelStatus(PROBLEM_CODE.RECURSIVE);
        this.codebase = [
          '\n check(origianlPoint: Array<number>, startPoint: Array<number>): void{',
          '\n   for(row of rows){',
          '\n     for(column of columns{',
          '\n       backTracking([row, column])',
          '\n     }',
          '\n   }',
          '\n }',
          '\n',
          '\n backTracking( stratPoint): void{',
          '\n   if (untouched && 0){',
          '\n     touch && set the origin',
          '\n     backTrack(up)',
          '\n     backTrack(down)',
          '\n     backTrack(left)',
          '\n     backTrack(right)',
          '\n    }',
          '\n }',
        ];
        clearInterval(this.runningInterval);
        this.printLines();
        break;
      }
    }
  }

  private async setSolutionPanelStatus(activePanel: string): Promise<void> {
    this.statusForSolutionPanel[Number(this.activeSolutionPanel)] = 'hidden';
    await this.timer(500);
    this.activeSolutionPanel = activePanel;
    this.statusForSolutionPanel[Number(this.activeSolutionPanel)] = 'slideIn';
  }

  public test(): void {
    for (let i = 0; i < 9999; i++) {
      console.log('=========', i);
    }
  }

  private setMapClass(): void {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] === 0) {
          this.mapClass[i][j] = 'hole';
        } else {
          this.mapClass[i][j] = 'solid';
        }
      }
    }
  }

  public async resetConnect(): Promise<void> {
    this.connectedMap = new Array<Array<string>>();
    this.mapClass = new Array<Array<string>>();
    this.mapInit();
  }

  public async startToConnect(): Promise<void> {
    const connectedGraphResetButton: HTMLInputElement = document.getElementById(
      'connectedGraphResetButton'
    ) as HTMLInputElement;
    const connectedGraphStartButton: HTMLInputElement = document.getElementById(
      'connectedGraphStartButton'
    ) as HTMLInputElement;
    connectedGraphResetButton.disabled = true;
    connectedGraphStartButton.disabled = true;
    await this.resetConnect;
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        await this.backTracking([i, j], [i, j]);
        this.mapClass[i][j] += ', current';
        await this.timer(100);
        this.mapClass[i][j] = this.mapClass[i][j].replace(', current', '');
      }
    }
    connectedGraphResetButton.disabled = false;
    connectedGraphStartButton.disabled = false;
  }

  private async backTracking(
    origianlPoint: Array<number>,
    startPoint: Array<number>
  ): Promise<void> {
    await this.timer(100);
    if (
      this.map[startPoint[0]][startPoint[1]] === 0 &&
      this.connectedMap[startPoint[0]][startPoint[1]] === 'null'
    ) {
      this.connectedMap[startPoint[0]][startPoint[1]] =
        origianlPoint[0].toString() + origianlPoint[1].toString();
      this.mapClass[startPoint[0]][startPoint[1]] = 'touched';
      // go top
      if (startPoint[0] - 1 >= 0) {
        await this.backTracking(origianlPoint, [
          startPoint[0] - 1,
          startPoint[1],
        ]);
      }
      // go left
      if (startPoint[1] - 1 >= 0) {
        await this.backTracking(origianlPoint, [
          startPoint[0],
          startPoint[1] - 1,
        ]);
      }
      // go right
      if (startPoint[1] + 1 < this.map[0].length) {
        await this.backTracking(origianlPoint, [
          startPoint[0],
          startPoint[1] + 1,
        ]);
      }
      // go down
      if (startPoint[0] + 1 < this.map.length) {
        await this.backTracking(origianlPoint, [
          startPoint[0] + 1,
          startPoint[1],
        ]);
      }
    }
  }

  public async startToCheckDOMElements(): Promise<void> {
    await this.resetDOMElements();
    this.isChecking = true;
    const elementsString = this.domFormControl.value;
    this.elements = this.splitElementsByAngleBracket(elementsString);
    this.stackCheck(this.elements);
  }

  public async resetDOMElements(): Promise<void> {
    this.isReset = true;
    this.currentDOM = '';
    this.elements = [];
    this.elementsClass = [];
    this.elementsStack = [];
    if (this.isChecking) {
      await this.timer(1100);
    }
    this.isReset = false;
  }

  public getClass(index: number): string {
    if (index === this.currentIndex) {
      return 'currentDOM';
    } else {
      return 'notCurrentDOM';
    }
  }

  public async startRecursive(): Promise<void> {
    this.waitingStatus = true;

    await this.timer(1000);
    this.waitingStatus = false;

    if (this.recursiveTest < 30) {
      this.recursiveTest++;
      this.startRecursive();
    }
  }

  public resetGlobal(): void {
    this.recursiveTest = 0;
  }

  private splitElementsByAngleBracket(elementsString: string): Array<string> {
    let isElement = false;
    let element = '';
    const elements = new Array<string>();
    for (let i = 0; i < elementsString.length; i++) {
      if (elementsString[i] === '<') {
        isElement = true;
      } else if (elementsString[i] === '>') {
        this.elementsClass.push('stackDefault');
        elements.push(element);
        element = '';
        isElement = false;
        continue;
      } else if (isElement === true) {
        element += elementsString[i];
      }
    }
    return elements;
  }

  private async stackCheck(elements: Array<string>): Promise<string> {
    let last = -1;

    for (let i = 0; i < elements.length; i++) {
      this.currentIndex = i;
      if (this.isReset === true) {
        break;
      }
      this.currentDOM = elements[i];
      if (!elements[i].includes('/')) {
        last++;
        this.elementsStack[last] = elements[i];
        this.elementsClass[last] = 'stackPushed';
      } else {
        if (this.elementsStack[last] !== elements[i].replace('/', '')) {
          break;
        } else {
          this.elementsStack[last] = '';
          this.elementsClass[last] = 'stackDefault';
          last--;
        }
      }
      await this.timer(1000);
    }
    this.isChecking = false;
    return this.elementsStack[this.elementsStack.length - 1];
  }

  private timer(ms: number): Promise<void> {
    return new Promise((res) => {
      setTimeout(res, ms);
    });
  }
}
