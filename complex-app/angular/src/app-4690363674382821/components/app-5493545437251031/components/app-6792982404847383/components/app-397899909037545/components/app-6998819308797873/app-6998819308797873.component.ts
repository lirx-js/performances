import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2704116078124541Component } from "./components/app-2704116078124541/app-2704116078124541.component";
import { App6338222011792579Component } from "./components/app-6338222011792579/app-6338222011792579.component";
import { App4311305898806757Component } from "./components/app-4311305898806757/app-4311305898806757.component";
import { App4938035850196267Component } from "./components/app-4938035850196267/app-4938035850196267.component";
import { App2594970649502699Component } from "./components/app-2594970649502699/app-2594970649502699.component";

@Component({
  selector: 'app-6998819308797873',
  standalone: true,
  templateUrl: './app-6998819308797873.component.html',
  styleUrl: './app-6998819308797873.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2704116078124541Component,
App6338222011792579Component,
App4311305898806757Component,
App4938035850196267Component,
App2594970649502699Component,
  ]
})
export class App6998819308797873Component {
}

