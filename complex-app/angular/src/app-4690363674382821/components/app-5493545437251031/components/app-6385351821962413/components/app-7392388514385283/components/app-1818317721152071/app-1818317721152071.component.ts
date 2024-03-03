import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1004069048389069Component } from "./components/app-1004069048389069/app-1004069048389069.component";
import { App1224916141473243Component } from "./components/app-1224916141473243/app-1224916141473243.component";
import { App6147873703499025Component } from "./components/app-6147873703499025/app-6147873703499025.component";
import { App6576764463740881Component } from "./components/app-6576764463740881/app-6576764463740881.component";
import { App1344661056132169Component } from "./components/app-1344661056132169/app-1344661056132169.component";

@Component({
  selector: 'app-1818317721152071',
  standalone: true,
  templateUrl: './app-1818317721152071.component.html',
  styleUrl: './app-1818317721152071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1004069048389069Component,
App1224916141473243Component,
App6147873703499025Component,
App6576764463740881Component,
App1344661056132169Component,
  ]
})
export class App1818317721152071Component {
}

