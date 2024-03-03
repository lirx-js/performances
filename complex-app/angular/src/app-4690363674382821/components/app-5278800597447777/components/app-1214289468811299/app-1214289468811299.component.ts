import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2511266253189989Component } from "./components/app-2511266253189989/app-2511266253189989.component";
import { App2133559397268453Component } from "./components/app-2133559397268453/app-2133559397268453.component";
import { App745863320923905Component } from "./components/app-745863320923905/app-745863320923905.component";
import { App1314839662461221Component } from "./components/app-1314839662461221/app-1314839662461221.component";
import { App2059828327624463Component } from "./components/app-2059828327624463/app-2059828327624463.component";

@Component({
  selector: 'app-1214289468811299',
  standalone: true,
  templateUrl: './app-1214289468811299.component.html',
  styleUrl: './app-1214289468811299.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2511266253189989Component,
App2133559397268453Component,
App745863320923905Component,
App1314839662461221Component,
App2059828327624463Component,
  ]
})
export class App1214289468811299Component {
}

