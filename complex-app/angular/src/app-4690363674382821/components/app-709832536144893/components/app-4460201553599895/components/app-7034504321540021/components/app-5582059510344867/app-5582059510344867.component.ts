import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App3440851991211473Component } from "./components/app-3440851991211473/app-3440851991211473.component";
import { App2652675636348195Component } from "./components/app-2652675636348195/app-2652675636348195.component";
import { App8437761507842167Component } from "./components/app-8437761507842167/app-8437761507842167.component";
import { App4619746448134961Component } from "./components/app-4619746448134961/app-4619746448134961.component";
import { App553267365484889Component } from "./components/app-553267365484889/app-553267365484889.component";

@Component({
  selector: 'app-5582059510344867',
  standalone: true,
  templateUrl: './app-5582059510344867.component.html',
  styleUrl: './app-5582059510344867.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App3440851991211473Component,
App2652675636348195Component,
App8437761507842167Component,
App4619746448134961Component,
App553267365484889Component,
  ]
})
export class App5582059510344867Component {
}

