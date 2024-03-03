import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2806613053347335Component } from "./components/app-2806613053347335/app-2806613053347335.component";
import { App5020943302688585Component } from "./components/app-5020943302688585/app-5020943302688585.component";
import { App8358714142115925Component } from "./components/app-8358714142115925/app-8358714142115925.component";
import { App7891437095690197Component } from "./components/app-7891437095690197/app-7891437095690197.component";
import { App5525341816000809Component } from "./components/app-5525341816000809/app-5525341816000809.component";

@Component({
  selector: 'app-792914329618175',
  standalone: true,
  templateUrl: './app-792914329618175.component.html',
  styleUrl: './app-792914329618175.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2806613053347335Component,
App5020943302688585Component,
App8358714142115925Component,
App7891437095690197Component,
App5525341816000809Component,
  ]
})
export class App792914329618175Component {
}

