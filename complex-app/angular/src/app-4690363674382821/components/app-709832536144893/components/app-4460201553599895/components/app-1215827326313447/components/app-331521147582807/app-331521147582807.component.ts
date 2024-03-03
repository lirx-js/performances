import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3937186068114807Component } from "./components/app-3937186068114807/app-3937186068114807.component";
import { App7172587521338161Component } from "./components/app-7172587521338161/app-7172587521338161.component";
import { App549089740173865Component } from "./components/app-549089740173865/app-549089740173865.component";
import { App3039084038062785Component } from "./components/app-3039084038062785/app-3039084038062785.component";
import { App3029441290193055Component } from "./components/app-3029441290193055/app-3029441290193055.component";

@Component({
  selector: 'app-331521147582807',
  standalone: true,
  templateUrl: './app-331521147582807.component.html',
  styleUrl: './app-331521147582807.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3937186068114807Component,
App7172587521338161Component,
App549089740173865Component,
App3039084038062785Component,
App3029441290193055Component,
  ]
})
export class App331521147582807Component {
}

