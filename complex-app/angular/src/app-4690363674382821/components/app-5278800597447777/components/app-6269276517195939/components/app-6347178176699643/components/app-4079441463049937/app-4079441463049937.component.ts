import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App433024486009807Component } from "./components/app-433024486009807/app-433024486009807.component";
import { App7666928564166509Component } from "./components/app-7666928564166509/app-7666928564166509.component";
import { App3812967518699657Component } from "./components/app-3812967518699657/app-3812967518699657.component";
import { App1888208820832253Component } from "./components/app-1888208820832253/app-1888208820832253.component";
import { App653210081114883Component } from "./components/app-653210081114883/app-653210081114883.component";

@Component({
  selector: 'app-4079441463049937',
  standalone: true,
  templateUrl: './app-4079441463049937.component.html',
  styleUrl: './app-4079441463049937.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App433024486009807Component,
App7666928564166509Component,
App3812967518699657Component,
App1888208820832253Component,
App653210081114883Component,
  ]
})
export class App4079441463049937Component {
}

