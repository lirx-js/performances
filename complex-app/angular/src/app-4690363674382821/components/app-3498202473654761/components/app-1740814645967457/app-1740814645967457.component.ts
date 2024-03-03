import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2540377988746445Component } from "./components/app-2540377988746445/app-2540377988746445.component";
import { App7140496752063405Component } from "./components/app-7140496752063405/app-7140496752063405.component";
import { App5766580646088431Component } from "./components/app-5766580646088431/app-5766580646088431.component";
import { App4993008156575299Component } from "./components/app-4993008156575299/app-4993008156575299.component";
import { App5595985678013035Component } from "./components/app-5595985678013035/app-5595985678013035.component";

@Component({
  selector: 'app-1740814645967457',
  standalone: true,
  templateUrl: './app-1740814645967457.component.html',
  styleUrl: './app-1740814645967457.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2540377988746445Component,
App7140496752063405Component,
App5766580646088431Component,
App4993008156575299Component,
App5595985678013035Component,
  ]
})
export class App1740814645967457Component {
}

