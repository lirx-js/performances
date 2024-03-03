import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App462512506550905Component } from "./components/app-462512506550905/app-462512506550905.component";
import { App1702409806201347Component } from "./components/app-1702409806201347/app-1702409806201347.component";
import { App3661019743435003Component } from "./components/app-3661019743435003/app-3661019743435003.component";
import { App5769151451102217Component } from "./components/app-5769151451102217/app-5769151451102217.component";
import { App239472131103939Component } from "./components/app-239472131103939/app-239472131103939.component";

@Component({
  selector: 'app-5147478753559897',
  standalone: true,
  templateUrl: './app-5147478753559897.component.html',
  styleUrl: './app-5147478753559897.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App462512506550905Component,
App1702409806201347Component,
App3661019743435003Component,
App5769151451102217Component,
App239472131103939Component,
  ]
})
export class App5147478753559897Component {
}

