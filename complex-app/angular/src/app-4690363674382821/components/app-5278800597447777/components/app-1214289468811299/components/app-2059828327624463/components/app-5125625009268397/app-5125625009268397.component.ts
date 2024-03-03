import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2010750418896695Component } from "./components/app-2010750418896695/app-2010750418896695.component";
import { App3505716367865075Component } from "./components/app-3505716367865075/app-3505716367865075.component";
import { App427304512134327Component } from "./components/app-427304512134327/app-427304512134327.component";
import { App1357237889359769Component } from "./components/app-1357237889359769/app-1357237889359769.component";
import { App1532906045037657Component } from "./components/app-1532906045037657/app-1532906045037657.component";

@Component({
  selector: 'app-5125625009268397',
  standalone: true,
  templateUrl: './app-5125625009268397.component.html',
  styleUrl: './app-5125625009268397.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2010750418896695Component,
App3505716367865075Component,
App427304512134327Component,
App1357237889359769Component,
App1532906045037657Component,
  ]
})
export class App5125625009268397Component {
}

