import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1403903928187399Component } from "./components/app-1403903928187399/app-1403903928187399.component";
import { App3745235158503627Component } from "./components/app-3745235158503627/app-3745235158503627.component";
import { App7708794765384267Component } from "./components/app-7708794765384267/app-7708794765384267.component";
import { App2821203900307227Component } from "./components/app-2821203900307227/app-2821203900307227.component";
import { App7381312922918131Component } from "./components/app-7381312922918131/app-7381312922918131.component";

@Component({
  selector: 'app-2302499083709849',
  standalone: true,
  templateUrl: './app-2302499083709849.component.html',
  styleUrl: './app-2302499083709849.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1403903928187399Component,
App3745235158503627Component,
App7708794765384267Component,
App2821203900307227Component,
App7381312922918131Component,
  ]
})
export class App2302499083709849Component {
}

