import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App7328473440386031Component } from "./components/app-7328473440386031/app-7328473440386031.component";
import { App6104620348291959Component } from "./components/app-6104620348291959/app-6104620348291959.component";
import { App5922718921196645Component } from "./components/app-5922718921196645/app-5922718921196645.component";
import { App1648280853501327Component } from "./components/app-1648280853501327/app-1648280853501327.component";
import { App960880408833121Component } from "./components/app-960880408833121/app-960880408833121.component";

@Component({
  selector: 'app-6779275887830047',
  standalone: true,
  templateUrl: './app-6779275887830047.component.html',
  styleUrl: './app-6779275887830047.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App7328473440386031Component,
App6104620348291959Component,
App5922718921196645Component,
App1648280853501327Component,
App960880408833121Component,
  ]
})
export class App6779275887830047Component {
}

