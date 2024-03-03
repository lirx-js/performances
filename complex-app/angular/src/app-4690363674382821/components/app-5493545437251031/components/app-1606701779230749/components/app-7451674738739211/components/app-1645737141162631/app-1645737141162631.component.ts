import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1791834880601881Component } from "./components/app-1791834880601881/app-1791834880601881.component";
import { App2426504423606937Component } from "./components/app-2426504423606937/app-2426504423606937.component";
import { App5333656690446007Component } from "./components/app-5333656690446007/app-5333656690446007.component";
import { App2897075168457207Component } from "./components/app-2897075168457207/app-2897075168457207.component";
import { App504576833072103Component } from "./components/app-504576833072103/app-504576833072103.component";

@Component({
  selector: 'app-1645737141162631',
  standalone: true,
  templateUrl: './app-1645737141162631.component.html',
  styleUrl: './app-1645737141162631.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1791834880601881Component,
App2426504423606937Component,
App5333656690446007Component,
App2897075168457207Component,
App504576833072103Component,
  ]
})
export class App1645737141162631Component {
}

