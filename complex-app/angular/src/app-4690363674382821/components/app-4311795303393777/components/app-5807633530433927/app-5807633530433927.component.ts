import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App5400288109545647Component } from "./components/app-5400288109545647/app-5400288109545647.component";
import { App1483929824664835Component } from "./components/app-1483929824664835/app-1483929824664835.component";
import { App4500383326025817Component } from "./components/app-4500383326025817/app-4500383326025817.component";
import { App7334417340777015Component } from "./components/app-7334417340777015/app-7334417340777015.component";
import { App7568832640913847Component } from "./components/app-7568832640913847/app-7568832640913847.component";

@Component({
  selector: 'app-5807633530433927',
  standalone: true,
  templateUrl: './app-5807633530433927.component.html',
  styleUrl: './app-5807633530433927.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App5400288109545647Component,
App1483929824664835Component,
App4500383326025817Component,
App7334417340777015Component,
App7568832640913847Component,
  ]
})
export class App5807633530433927Component {
}

