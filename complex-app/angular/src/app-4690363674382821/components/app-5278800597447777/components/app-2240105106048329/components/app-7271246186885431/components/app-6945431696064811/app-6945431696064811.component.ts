import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App5208418716684243Component } from "./components/app-5208418716684243/app-5208418716684243.component";
import { App7668026877387067Component } from "./components/app-7668026877387067/app-7668026877387067.component";
import { App3079163097317131Component } from "./components/app-3079163097317131/app-3079163097317131.component";
import { App729478295846989Component } from "./components/app-729478295846989/app-729478295846989.component";
import { App8618447503281147Component } from "./components/app-8618447503281147/app-8618447503281147.component";

@Component({
  selector: 'app-6945431696064811',
  standalone: true,
  templateUrl: './app-6945431696064811.component.html',
  styleUrl: './app-6945431696064811.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App5208418716684243Component,
App7668026877387067Component,
App3079163097317131Component,
App729478295846989Component,
App8618447503281147Component,
  ]
})
export class App6945431696064811Component {
}

