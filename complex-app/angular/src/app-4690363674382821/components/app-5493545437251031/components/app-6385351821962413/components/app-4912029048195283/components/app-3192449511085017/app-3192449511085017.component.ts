import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1401631406801473Component } from "./components/app-1401631406801473/app-1401631406801473.component";
import { App3870022227529083Component } from "./components/app-3870022227529083/app-3870022227529083.component";
import { App3746898466148901Component } from "./components/app-3746898466148901/app-3746898466148901.component";
import { App3837880143513305Component } from "./components/app-3837880143513305/app-3837880143513305.component";
import { App831514328827205Component } from "./components/app-831514328827205/app-831514328827205.component";

@Component({
  selector: 'app-3192449511085017',
  standalone: true,
  templateUrl: './app-3192449511085017.component.html',
  styleUrl: './app-3192449511085017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1401631406801473Component,
App3870022227529083Component,
App3746898466148901Component,
App3837880143513305Component,
App831514328827205Component,
  ]
})
export class App3192449511085017Component {
}

