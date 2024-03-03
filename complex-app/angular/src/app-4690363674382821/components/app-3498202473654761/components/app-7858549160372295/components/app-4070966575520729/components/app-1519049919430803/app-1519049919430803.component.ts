import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App4042569374783001Component } from "./components/app-4042569374783001/app-4042569374783001.component";
import { App605737797523751Component } from "./components/app-605737797523751/app-605737797523751.component";
import { App4711951604007329Component } from "./components/app-4711951604007329/app-4711951604007329.component";
import { App241714929374731Component } from "./components/app-241714929374731/app-241714929374731.component";
import { App3298477834675505Component } from "./components/app-3298477834675505/app-3298477834675505.component";

@Component({
  selector: 'app-1519049919430803',
  standalone: true,
  templateUrl: './app-1519049919430803.component.html',
  styleUrl: './app-1519049919430803.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App4042569374783001Component,
App605737797523751Component,
App4711951604007329Component,
App241714929374731Component,
App3298477834675505Component,
  ]
})
export class App1519049919430803Component {
}

