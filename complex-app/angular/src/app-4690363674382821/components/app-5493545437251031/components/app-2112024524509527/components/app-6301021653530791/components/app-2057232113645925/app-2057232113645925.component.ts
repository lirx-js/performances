import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1541174534347005Component } from "./components/app-1541174534347005/app-1541174534347005.component";
import { App8764148031197769Component } from "./components/app-8764148031197769/app-8764148031197769.component";
import { App5999668237945419Component } from "./components/app-5999668237945419/app-5999668237945419.component";
import { App1854682201398913Component } from "./components/app-1854682201398913/app-1854682201398913.component";
import { App6534538429899479Component } from "./components/app-6534538429899479/app-6534538429899479.component";

@Component({
  selector: 'app-2057232113645925',
  standalone: true,
  templateUrl: './app-2057232113645925.component.html',
  styleUrl: './app-2057232113645925.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1541174534347005Component,
App8764148031197769Component,
App5999668237945419Component,
App1854682201398913Component,
App6534538429899479Component,
  ]
})
export class App2057232113645925Component {
}

