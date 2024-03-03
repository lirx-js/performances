import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App4213458270953031Component } from "./components/app-4213458270953031/app-4213458270953031.component";
import { App1753345097226487Component } from "./components/app-1753345097226487/app-1753345097226487.component";
import { App3804848353812187Component } from "./components/app-3804848353812187/app-3804848353812187.component";
import { App115225779780075Component } from "./components/app-115225779780075/app-115225779780075.component";
import { App7130467819278723Component } from "./components/app-7130467819278723/app-7130467819278723.component";

@Component({
  selector: 'app-5377250908533921',
  standalone: true,
  templateUrl: './app-5377250908533921.component.html',
  styleUrl: './app-5377250908533921.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App4213458270953031Component,
App1753345097226487Component,
App3804848353812187Component,
App115225779780075Component,
App7130467819278723Component,
  ]
})
export class App5377250908533921Component {
}

