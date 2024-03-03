import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App2021187736020549Component } from "./components/app-2021187736020549/app-2021187736020549.component";
import { App2533337207397013Component } from "./components/app-2533337207397013/app-2533337207397013.component";
import { App695781894719847Component } from "./components/app-695781894719847/app-695781894719847.component";
import { App6716570676549161Component } from "./components/app-6716570676549161/app-6716570676549161.component";
import { App3722487636164493Component } from "./components/app-3722487636164493/app-3722487636164493.component";

@Component({
  selector: 'app-2820965224197595',
  standalone: true,
  templateUrl: './app-2820965224197595.component.html',
  styleUrl: './app-2820965224197595.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App2021187736020549Component,
App2533337207397013Component,
App695781894719847Component,
App6716570676549161Component,
App3722487636164493Component,
  ]
})
export class App2820965224197595Component {
}

