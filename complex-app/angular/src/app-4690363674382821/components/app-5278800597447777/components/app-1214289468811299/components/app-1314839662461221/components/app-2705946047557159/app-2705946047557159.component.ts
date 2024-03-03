import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App150582014533305Component } from "./components/app-150582014533305/app-150582014533305.component";
import { App7526582953521467Component } from "./components/app-7526582953521467/app-7526582953521467.component";
import { App4577995254425447Component } from "./components/app-4577995254425447/app-4577995254425447.component";
import { App7828367674058835Component } from "./components/app-7828367674058835/app-7828367674058835.component";
import { App2604359814324965Component } from "./components/app-2604359814324965/app-2604359814324965.component";

@Component({
  selector: 'app-2705946047557159',
  standalone: true,
  templateUrl: './app-2705946047557159.component.html',
  styleUrl: './app-2705946047557159.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App150582014533305Component,
App7526582953521467Component,
App4577995254425447Component,
App7828367674058835Component,
App2604359814324965Component,
  ]
})
export class App2705946047557159Component {
}

