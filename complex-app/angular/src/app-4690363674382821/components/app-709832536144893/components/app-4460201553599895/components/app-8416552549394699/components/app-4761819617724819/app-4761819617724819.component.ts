import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1587086633108255Component } from "./components/app-1587086633108255/app-1587086633108255.component";
import { App3815078546167015Component } from "./components/app-3815078546167015/app-3815078546167015.component";
import { App525081560638623Component } from "./components/app-525081560638623/app-525081560638623.component";
import { App3728689864832655Component } from "./components/app-3728689864832655/app-3728689864832655.component";
import { App163444324838901Component } from "./components/app-163444324838901/app-163444324838901.component";

@Component({
  selector: 'app-4761819617724819',
  standalone: true,
  templateUrl: './app-4761819617724819.component.html',
  styleUrl: './app-4761819617724819.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1587086633108255Component,
App3815078546167015Component,
App525081560638623Component,
App3728689864832655Component,
App163444324838901Component,
  ]
})
export class App4761819617724819Component {
}

