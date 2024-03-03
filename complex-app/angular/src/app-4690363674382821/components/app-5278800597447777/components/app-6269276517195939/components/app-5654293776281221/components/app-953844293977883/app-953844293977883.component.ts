import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App204446300830171Component } from "./components/app-204446300830171/app-204446300830171.component";
import { App1655290268622243Component } from "./components/app-1655290268622243/app-1655290268622243.component";
import { App3569306062132445Component } from "./components/app-3569306062132445/app-3569306062132445.component";
import { App5344275980571671Component } from "./components/app-5344275980571671/app-5344275980571671.component";
import { App5469568281125285Component } from "./components/app-5469568281125285/app-5469568281125285.component";

@Component({
  selector: 'app-953844293977883',
  standalone: true,
  templateUrl: './app-953844293977883.component.html',
  styleUrl: './app-953844293977883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App204446300830171Component,
App1655290268622243Component,
App3569306062132445Component,
App5344275980571671Component,
App5469568281125285Component,
  ]
})
export class App953844293977883Component {
}

