import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App5241057138379323Component } from "./components/app-5241057138379323/app-5241057138379323.component";
import { App5502405192546489Component } from "./components/app-5502405192546489/app-5502405192546489.component";
import { App590223097733481Component } from "./components/app-590223097733481/app-590223097733481.component";
import { App953323388619077Component } from "./components/app-953323388619077/app-953323388619077.component";
import { App5437938159846899Component } from "./components/app-5437938159846899/app-5437938159846899.component";

@Component({
  selector: 'app-1238501522044049',
  standalone: true,
  templateUrl: './app-1238501522044049.component.html',
  styleUrl: './app-1238501522044049.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App5241057138379323Component,
App5502405192546489Component,
App590223097733481Component,
App953323388619077Component,
App5437938159846899Component,
  ]
})
export class App1238501522044049Component {
}

