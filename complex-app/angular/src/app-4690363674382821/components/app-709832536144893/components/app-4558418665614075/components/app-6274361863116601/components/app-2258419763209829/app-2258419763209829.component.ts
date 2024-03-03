import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1224288706463025Component } from "./components/app-1224288706463025/app-1224288706463025.component";
import { App880547198879131Component } from "./components/app-880547198879131/app-880547198879131.component";
import { App8007377946546673Component } from "./components/app-8007377946546673/app-8007377946546673.component";
import { App4949700122742197Component } from "./components/app-4949700122742197/app-4949700122742197.component";
import { App462258077891591Component } from "./components/app-462258077891591/app-462258077891591.component";

@Component({
  selector: 'app-2258419763209829',
  standalone: true,
  templateUrl: './app-2258419763209829.component.html',
  styleUrl: './app-2258419763209829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1224288706463025Component,
App880547198879131Component,
App8007377946546673Component,
App4949700122742197Component,
App462258077891591Component,
  ]
})
export class App2258419763209829Component {
}

