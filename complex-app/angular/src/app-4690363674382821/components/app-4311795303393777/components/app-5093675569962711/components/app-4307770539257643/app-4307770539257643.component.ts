import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1224211152007457Component } from "./components/app-1224211152007457/app-1224211152007457.component";
import { App2526586093086825Component } from "./components/app-2526586093086825/app-2526586093086825.component";
import { App205371485822221Component } from "./components/app-205371485822221/app-205371485822221.component";
import { App4070939080539703Component } from "./components/app-4070939080539703/app-4070939080539703.component";
import { App7769017695822633Component } from "./components/app-7769017695822633/app-7769017695822633.component";

@Component({
  selector: 'app-4307770539257643',
  standalone: true,
  templateUrl: './app-4307770539257643.component.html',
  styleUrl: './app-4307770539257643.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1224211152007457Component,
App2526586093086825Component,
App205371485822221Component,
App4070939080539703Component,
App7769017695822633Component,
  ]
})
export class App4307770539257643Component {
}

