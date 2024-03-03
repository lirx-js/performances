import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App8092975592490391Component } from "./components/app-8092975592490391/app-8092975592490391.component";
import { App8611390462888051Component } from "./components/app-8611390462888051/app-8611390462888051.component";
import { App433700557154715Component } from "./components/app-433700557154715/app-433700557154715.component";
import { App2740183453442283Component } from "./components/app-2740183453442283/app-2740183453442283.component";
import { App4553103155575557Component } from "./components/app-4553103155575557/app-4553103155575557.component";

@Component({
  selector: 'app-2410718833355563',
  standalone: true,
  templateUrl: './app-2410718833355563.component.html',
  styleUrl: './app-2410718833355563.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App8092975592490391Component,
App8611390462888051Component,
App433700557154715Component,
App2740183453442283Component,
App4553103155575557Component,
  ]
})
export class App2410718833355563Component {
}

