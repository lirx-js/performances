import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App331521147582807Component } from "./components/app-331521147582807/app-331521147582807.component";
import { App2719370678373345Component } from "./components/app-2719370678373345/app-2719370678373345.component";
import { App4827053396249445Component } from "./components/app-4827053396249445/app-4827053396249445.component";
import { App4397171946277611Component } from "./components/app-4397171946277611/app-4397171946277611.component";
import { App7390842805243293Component } from "./components/app-7390842805243293/app-7390842805243293.component";

@Component({
  selector: 'app-1215827326313447',
  standalone: true,
  templateUrl: './app-1215827326313447.component.html',
  styleUrl: './app-1215827326313447.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App331521147582807Component,
App2719370678373345Component,
App4827053396249445Component,
App4397171946277611Component,
App7390842805243293Component,
  ]
})
export class App1215827326313447Component {
}

