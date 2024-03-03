import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App301701922304349Component } from "./components/app-301701922304349/app-301701922304349.component";
import { App5503406557669353Component } from "./components/app-5503406557669353/app-5503406557669353.component";
import { App4401718615398115Component } from "./components/app-4401718615398115/app-4401718615398115.component";
import { App4565810486786955Component } from "./components/app-4565810486786955/app-4565810486786955.component";
import { App4026769735368079Component } from "./components/app-4026769735368079/app-4026769735368079.component";

@Component({
  selector: 'app-3071360303119633',
  standalone: true,
  templateUrl: './app-3071360303119633.component.html',
  styleUrl: './app-3071360303119633.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App301701922304349Component,
App5503406557669353Component,
App4401718615398115Component,
App4565810486786955Component,
App4026769735368079Component,
  ]
})
export class App3071360303119633Component {
}

