import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3991175543794861Component } from "./components/app-3991175543794861/app-3991175543794861.component";
import { App2302499083709849Component } from "./components/app-2302499083709849/app-2302499083709849.component";
import { App2559583383384071Component } from "./components/app-2559583383384071/app-2559583383384071.component";
import { App281286382169633Component } from "./components/app-281286382169633/app-281286382169633.component";
import { App1818870367952373Component } from "./components/app-1818870367952373/app-1818870367952373.component";

@Component({
  selector: 'app-4548119237975301',
  standalone: true,
  templateUrl: './app-4548119237975301.component.html',
  styleUrl: './app-4548119237975301.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3991175543794861Component,
App2302499083709849Component,
App2559583383384071Component,
App281286382169633Component,
App1818870367952373Component,
  ]
})
export class App4548119237975301Component {
}

