import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1831153622285913Component } from "./components/app-1831153622285913/app-1831153622285913.component";
import { App5164935427330219Component } from "./components/app-5164935427330219/app-5164935427330219.component";
import { App8370632803363923Component } from "./components/app-8370632803363923/app-8370632803363923.component";
import { App8980186595210099Component } from "./components/app-8980186595210099/app-8980186595210099.component";
import { App3613476733331593Component } from "./components/app-3613476733331593/app-3613476733331593.component";

@Component({
  selector: 'app-2937455646421001',
  standalone: true,
  templateUrl: './app-2937455646421001.component.html',
  styleUrl: './app-2937455646421001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1831153622285913Component,
App5164935427330219Component,
App8370632803363923Component,
App8980186595210099Component,
App3613476733331593Component,
  ]
})
export class App2937455646421001Component {
}

