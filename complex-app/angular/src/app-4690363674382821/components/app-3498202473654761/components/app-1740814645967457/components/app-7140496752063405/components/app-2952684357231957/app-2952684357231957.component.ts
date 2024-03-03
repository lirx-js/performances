import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App6310792120093333Component } from "./components/app-6310792120093333/app-6310792120093333.component";
import { App3045990496544413Component } from "./components/app-3045990496544413/app-3045990496544413.component";
import { App6563954894570331Component } from "./components/app-6563954894570331/app-6563954894570331.component";
import { App1367765398106775Component } from "./components/app-1367765398106775/app-1367765398106775.component";
import { App823938520096517Component } from "./components/app-823938520096517/app-823938520096517.component";

@Component({
  selector: 'app-2952684357231957',
  standalone: true,
  templateUrl: './app-2952684357231957.component.html',
  styleUrl: './app-2952684357231957.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App6310792120093333Component,
App3045990496544413Component,
App6563954894570331Component,
App1367765398106775Component,
App823938520096517Component,
  ]
})
export class App2952684357231957Component {
}

