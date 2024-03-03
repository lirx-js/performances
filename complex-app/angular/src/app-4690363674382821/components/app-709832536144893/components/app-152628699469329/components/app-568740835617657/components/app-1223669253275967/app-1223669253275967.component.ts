import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1986611103563555Component } from "./components/app-1986611103563555/app-1986611103563555.component";
import { App2841177013115379Component } from "./components/app-2841177013115379/app-2841177013115379.component";
import { App6315907094483383Component } from "./components/app-6315907094483383/app-6315907094483383.component";
import { App5572290020864147Component } from "./components/app-5572290020864147/app-5572290020864147.component";
import { App8945695136900231Component } from "./components/app-8945695136900231/app-8945695136900231.component";

@Component({
  selector: 'app-1223669253275967',
  standalone: true,
  templateUrl: './app-1223669253275967.component.html',
  styleUrl: './app-1223669253275967.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1986611103563555Component,
App2841177013115379Component,
App6315907094483383Component,
App5572290020864147Component,
App8945695136900231Component,
  ]
})
export class App1223669253275967Component {
}

