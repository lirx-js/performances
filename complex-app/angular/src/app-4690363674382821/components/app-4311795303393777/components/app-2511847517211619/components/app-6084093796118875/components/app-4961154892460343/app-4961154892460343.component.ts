import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3354426081856301Component } from "./components/app-3354426081856301/app-3354426081856301.component";
import { App2273006830447261Component } from "./components/app-2273006830447261/app-2273006830447261.component";
import { App324329183037791Component } from "./components/app-324329183037791/app-324329183037791.component";
import { App1284697116880959Component } from "./components/app-1284697116880959/app-1284697116880959.component";
import { App4804934151778393Component } from "./components/app-4804934151778393/app-4804934151778393.component";

@Component({
  selector: 'app-4961154892460343',
  standalone: true,
  templateUrl: './app-4961154892460343.component.html',
  styleUrl: './app-4961154892460343.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3354426081856301Component,
App2273006830447261Component,
App324329183037791Component,
App1284697116880959Component,
App4804934151778393Component,
  ]
})
export class App4961154892460343Component {
}

