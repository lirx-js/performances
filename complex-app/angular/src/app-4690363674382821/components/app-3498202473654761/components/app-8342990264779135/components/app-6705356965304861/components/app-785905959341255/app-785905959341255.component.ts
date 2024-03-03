import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3011716531172755Component } from "./components/app-3011716531172755/app-3011716531172755.component";
import { App2618798367069005Component } from "./components/app-2618798367069005/app-2618798367069005.component";
import { App6846378514360411Component } from "./components/app-6846378514360411/app-6846378514360411.component";
import { App5509703318170353Component } from "./components/app-5509703318170353/app-5509703318170353.component";
import { App7033838521359199Component } from "./components/app-7033838521359199/app-7033838521359199.component";

@Component({
  selector: 'app-785905959341255',
  standalone: true,
  templateUrl: './app-785905959341255.component.html',
  styleUrl: './app-785905959341255.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3011716531172755Component,
App2618798367069005Component,
App6846378514360411Component,
App5509703318170353Component,
App7033838521359199Component,
  ]
})
export class App785905959341255Component {
}

