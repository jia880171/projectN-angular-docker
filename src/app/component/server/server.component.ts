import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  serverId: number = 666;
  serverStatus: string = 'offline';

  constructor() {}

  ngOnInit(): void {}
  test(): void {}
}
