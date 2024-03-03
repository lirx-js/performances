import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App7724334903540701Component } from "./components/app-7724334903540701/app-7724334903540701.component";
import { App1511717781440243Component } from "./components/app-1511717781440243/app-1511717781440243.component";
import { App5107621683338321Component } from "./components/app-5107621683338321/app-5107621683338321.component";
import { App7963381917163547Component } from "./components/app-7963381917163547/app-7963381917163547.component";
import { App1298488166324949Component } from "./components/app-1298488166324949/app-1298488166324949.component";

@Component({
  selector: 'app-705149400273901',
  standalone: true,
  templateUrl: './app-705149400273901.component.html',
  styleUrl: './app-705149400273901.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App7724334903540701Component,
App1511717781440243Component,
App5107621683338321Component,
App7963381917163547Component,
App1298488166324949Component,
  ]
})
export class App705149400273901Component {
}

