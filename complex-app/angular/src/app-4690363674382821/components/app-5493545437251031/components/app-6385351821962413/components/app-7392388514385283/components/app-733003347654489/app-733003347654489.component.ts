import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3371331923518301Component } from "./components/app-3371331923518301/app-3371331923518301.component";
import { App7013997081289Component } from "./components/app-7013997081289/app-7013997081289.component";
import { App5235969713016701Component } from "./components/app-5235969713016701/app-5235969713016701.component";
import { App7561551120866675Component } from "./components/app-7561551120866675/app-7561551120866675.component";
import { App2596823176699273Component } from "./components/app-2596823176699273/app-2596823176699273.component";

@Component({
  selector: 'app-733003347654489',
  standalone: true,
  templateUrl: './app-733003347654489.component.html',
  styleUrl: './app-733003347654489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3371331923518301Component,
App7013997081289Component,
App5235969713016701Component,
App7561551120866675Component,
App2596823176699273Component,
  ]
})
export class App733003347654489Component {
}

