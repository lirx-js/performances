import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3062154212253393Component } from "./components/app-3062154212253393/app-3062154212253393.component";
import { App1239328112684675Component } from "./components/app-1239328112684675/app-1239328112684675.component";
import { App4737136270284749Component } from "./components/app-4737136270284749/app-4737136270284749.component";
import { App3919443050620855Component } from "./components/app-3919443050620855/app-3919443050620855.component";
import { App4201629732242795Component } from "./components/app-4201629732242795/app-4201629732242795.component";

@Component({
  selector: 'app-2660252556449303',
  standalone: true,
  templateUrl: './app-2660252556449303.component.html',
  styleUrl: './app-2660252556449303.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3062154212253393Component,
App1239328112684675Component,
App4737136270284749Component,
App3919443050620855Component,
App4201629732242795Component,
  ]
})
export class App2660252556449303Component {
}

