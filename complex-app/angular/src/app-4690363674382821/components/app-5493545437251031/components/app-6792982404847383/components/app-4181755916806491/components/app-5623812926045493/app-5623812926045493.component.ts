import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1451613611054733Component } from "./components/app-1451613611054733/app-1451613611054733.component";
import { App2013216056790433Component } from "./components/app-2013216056790433/app-2013216056790433.component";
import { App4221624721172921Component } from "./components/app-4221624721172921/app-4221624721172921.component";
import { App809150733798405Component } from "./components/app-809150733798405/app-809150733798405.component";
import { App4668899923353803Component } from "./components/app-4668899923353803/app-4668899923353803.component";

@Component({
  selector: 'app-5623812926045493',
  standalone: true,
  templateUrl: './app-5623812926045493.component.html',
  styleUrl: './app-5623812926045493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1451613611054733Component,
App2013216056790433Component,
App4221624721172921Component,
App809150733798405Component,
App4668899923353803Component,
  ]
})
export class App5623812926045493Component {
}

