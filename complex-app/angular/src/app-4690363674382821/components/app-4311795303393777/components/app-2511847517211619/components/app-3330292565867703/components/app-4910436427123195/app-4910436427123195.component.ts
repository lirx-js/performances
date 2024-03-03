import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1980811273558869Component } from "./components/app-1980811273558869/app-1980811273558869.component";
import { App3722059301875599Component } from "./components/app-3722059301875599/app-3722059301875599.component";
import { App3057221103023735Component } from "./components/app-3057221103023735/app-3057221103023735.component";
import { App5753304771091391Component } from "./components/app-5753304771091391/app-5753304771091391.component";
import { App3638836492181793Component } from "./components/app-3638836492181793/app-3638836492181793.component";

@Component({
  selector: 'app-4910436427123195',
  standalone: true,
  templateUrl: './app-4910436427123195.component.html',
  styleUrl: './app-4910436427123195.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1980811273558869Component,
App3722059301875599Component,
App3057221103023735Component,
App5753304771091391Component,
App3638836492181793Component,
  ]
})
export class App4910436427123195Component {
}

