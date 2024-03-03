import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3824306326914949Component } from "./components/app-3824306326914949/app-3824306326914949.component";
import { App819540382361541Component } from "./components/app-819540382361541/app-819540382361541.component";
import { App7435517883567351Component } from "./components/app-7435517883567351/app-7435517883567351.component";
import { App2287197345015585Component } from "./components/app-2287197345015585/app-2287197345015585.component";
import { App4154127685845417Component } from "./components/app-4154127685845417/app-4154127685845417.component";

@Component({
  selector: 'app-510329808250099',
  standalone: true,
  templateUrl: './app-510329808250099.component.html',
  styleUrl: './app-510329808250099.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3824306326914949Component,
App819540382361541Component,
App7435517883567351Component,
App2287197345015585Component,
App4154127685845417Component,
  ]
})
export class App510329808250099Component {
}

