import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3216522459697271Component } from "./components/app-3216522459697271/app-3216522459697271.component";
import { App1828197968834483Component } from "./components/app-1828197968834483/app-1828197968834483.component";
import { App299855692352215Component } from "./components/app-299855692352215/app-299855692352215.component";
import { App3251597765676647Component } from "./components/app-3251597765676647/app-3251597765676647.component";
import { App684744788832695Component } from "./components/app-684744788832695/app-684744788832695.component";

@Component({
  selector: 'app-3468547864623501',
  standalone: true,
  templateUrl: './app-3468547864623501.component.html',
  styleUrl: './app-3468547864623501.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3216522459697271Component,
App1828197968834483Component,
App299855692352215Component,
App3251597765676647Component,
App684744788832695Component,
  ]
})
export class App3468547864623501Component {
}

