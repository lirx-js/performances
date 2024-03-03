import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App6301021653530791Component } from "./components/app-6301021653530791/app-6301021653530791.component";
import { App7450222612608559Component } from "./components/app-7450222612608559/app-7450222612608559.component";
import { App4867829782757847Component } from "./components/app-4867829782757847/app-4867829782757847.component";
import { App1138945243240645Component } from "./components/app-1138945243240645/app-1138945243240645.component";
import { App1512679162204017Component } from "./components/app-1512679162204017/app-1512679162204017.component";

@Component({
  selector: 'app-2112024524509527',
  standalone: true,
  templateUrl: './app-2112024524509527.component.html',
  styleUrl: './app-2112024524509527.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App6301021653530791Component,
App7450222612608559Component,
App4867829782757847Component,
App1138945243240645Component,
App1512679162204017Component,
  ]
})
export class App2112024524509527Component {
}

