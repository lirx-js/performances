import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3329054116266571Component } from "./components/app-3329054116266571/app-3329054116266571.component";
import { App1130893782056731Component } from "./components/app-1130893782056731/app-1130893782056731.component";
import { App204729797509051Component } from "./components/app-204729797509051/app-204729797509051.component";
import { App5783445664264629Component } from "./components/app-5783445664264629/app-5783445664264629.component";
import { App175051749072529Component } from "./components/app-175051749072529/app-175051749072529.component";

@Component({
  selector: 'app-5281471599765305',
  standalone: true,
  templateUrl: './app-5281471599765305.component.html',
  styleUrl: './app-5281471599765305.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3329054116266571Component,
App1130893782056731Component,
App204729797509051Component,
App5783445664264629Component,
App175051749072529Component,
  ]
})
export class App5281471599765305Component {
}

