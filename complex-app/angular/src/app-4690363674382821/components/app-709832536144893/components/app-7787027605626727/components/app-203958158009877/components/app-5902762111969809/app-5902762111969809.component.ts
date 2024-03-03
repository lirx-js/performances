import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App6162659200644513Component } from "./components/app-6162659200644513/app-6162659200644513.component";
import { App5842611176432859Component } from "./components/app-5842611176432859/app-5842611176432859.component";
import { App2445152045358989Component } from "./components/app-2445152045358989/app-2445152045358989.component";
import { App7835545320344323Component } from "./components/app-7835545320344323/app-7835545320344323.component";
import { App7616417187581803Component } from "./components/app-7616417187581803/app-7616417187581803.component";

@Component({
  selector: 'app-5902762111969809',
  standalone: true,
  templateUrl: './app-5902762111969809.component.html',
  styleUrl: './app-5902762111969809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App6162659200644513Component,
App5842611176432859Component,
App2445152045358989Component,
App7835545320344323Component,
App7616417187581803Component,
  ]
})
export class App5902762111969809Component {
}

