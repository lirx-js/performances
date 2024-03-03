import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App6941208376255493Component } from "./components/app-6941208376255493/app-6941208376255493.component";
import { App2476686127842395Component } from "./components/app-2476686127842395/app-2476686127842395.component";
import { App2049526958976481Component } from "./components/app-2049526958976481/app-2049526958976481.component";
import { App2464085258742557Component } from "./components/app-2464085258742557/app-2464085258742557.component";
import { App1891698252890471Component } from "./components/app-1891698252890471/app-1891698252890471.component";

@Component({
  selector: 'app-1701060824968931',
  standalone: true,
  templateUrl: './app-1701060824968931.component.html',
  styleUrl: './app-1701060824968931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App6941208376255493Component,
App2476686127842395Component,
App2049526958976481Component,
App2464085258742557Component,
App1891698252890471Component,
  ]
})
export class App1701060824968931Component {
}

