import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3550569105526861Component } from "./components/app-3550569105526861/app-3550569105526861.component";
import { App5785000017121707Component } from "./components/app-5785000017121707/app-5785000017121707.component";
import { App7364235850839431Component } from "./components/app-7364235850839431/app-7364235850839431.component";
import { App5620580909358195Component } from "./components/app-5620580909358195/app-5620580909358195.component";
import { App3784708199236407Component } from "./components/app-3784708199236407/app-3784708199236407.component";

@Component({
  selector: 'app-8548386580627081',
  standalone: true,
  templateUrl: './app-8548386580627081.component.html',
  styleUrl: './app-8548386580627081.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3550569105526861Component,
App5785000017121707Component,
App7364235850839431Component,
App5620580909358195Component,
App3784708199236407Component,
  ]
})
export class App8548386580627081Component {
}

