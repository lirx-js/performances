import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3381920166989943Component } from "./components/app-3381920166989943/app-3381920166989943.component";
import { App4879432925196757Component } from "./components/app-4879432925196757/app-4879432925196757.component";
import { App4633643634147221Component } from "./components/app-4633643634147221/app-4633643634147221.component";
import { App7885603829776335Component } from "./components/app-7885603829776335/app-7885603829776335.component";
import { App8121681454057131Component } from "./components/app-8121681454057131/app-8121681454057131.component";

@Component({
  selector: 'app-551888321976139',
  standalone: true,
  templateUrl: './app-551888321976139.component.html',
  styleUrl: './app-551888321976139.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3381920166989943Component,
App4879432925196757Component,
App4633643634147221Component,
App7885603829776335Component,
App8121681454057131Component,
  ]
})
export class App551888321976139Component {
}

