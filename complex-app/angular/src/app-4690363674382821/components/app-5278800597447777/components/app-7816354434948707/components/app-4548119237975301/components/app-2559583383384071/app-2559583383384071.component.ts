import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App8003004200398685Component } from "./components/app-8003004200398685/app-8003004200398685.component";
import { App4073670012262593Component } from "./components/app-4073670012262593/app-4073670012262593.component";
import { App5038263058303309Component } from "./components/app-5038263058303309/app-5038263058303309.component";
import { App2775152072746785Component } from "./components/app-2775152072746785/app-2775152072746785.component";
import { App657485168043047Component } from "./components/app-657485168043047/app-657485168043047.component";

@Component({
  selector: 'app-2559583383384071',
  standalone: true,
  templateUrl: './app-2559583383384071.component.html',
  styleUrl: './app-2559583383384071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App8003004200398685Component,
App4073670012262593Component,
App5038263058303309Component,
App2775152072746785Component,
App657485168043047Component,
  ]
})
export class App2559583383384071Component {
}

