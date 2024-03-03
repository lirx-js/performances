import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App4251484433180901Component } from "./components/app-4251484433180901/app-4251484433180901.component";
import { App1584664124064779Component } from "./components/app-1584664124064779/app-1584664124064779.component";
import { App2073056626200451Component } from "./components/app-2073056626200451/app-2073056626200451.component";
import { App3560693726215499Component } from "./components/app-3560693726215499/app-3560693726215499.component";
import { App6434645819164037Component } from "./components/app-6434645819164037/app-6434645819164037.component";

@Component({
  selector: 'app-1584992674217003',
  standalone: true,
  templateUrl: './app-1584992674217003.component.html',
  styleUrl: './app-1584992674217003.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App4251484433180901Component,
App1584664124064779Component,
App2073056626200451Component,
App3560693726215499Component,
App6434645819164037Component,
  ]
})
export class App1584992674217003Component {
}

