import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1561282111662383Component } from "./components/app-1561282111662383/app-1561282111662383.component";
import { App4952587456934767Component } from "./components/app-4952587456934767/app-4952587456934767.component";
import { App7281048066683597Component } from "./components/app-7281048066683597/app-7281048066683597.component";
import { App781375162665493Component } from "./components/app-781375162665493/app-781375162665493.component";
import { App949425884074979Component } from "./components/app-949425884074979/app-949425884074979.component";

@Component({
  selector: 'app-1153220216342737',
  standalone: true,
  templateUrl: './app-1153220216342737.component.html',
  styleUrl: './app-1153220216342737.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1561282111662383Component,
App4952587456934767Component,
App7281048066683597Component,
App781375162665493Component,
App949425884074979Component,
  ]
})
export class App1153220216342737Component {
}

