import { Component, ChangeDetectionStrategy } from '@angular/core';

import { App1365777750606777Component } from "./components/app-1365777750606777/app-1365777750606777.component";
import { App1200206281277217Component } from "./components/app-1200206281277217/app-1200206281277217.component";
import { App5559478257966365Component } from "./components/app-5559478257966365/app-5559478257966365.component";
import { App5783084445253967Component } from "./components/app-5783084445253967/app-5783084445253967.component";
import { App4322076326508447Component } from "./components/app-4322076326508447/app-4322076326508447.component";

@Component({
  selector: 'app-1722938325764181',
  standalone: true,
  templateUrl: './app-1722938325764181.component.html',
  styleUrl: './app-1722938325764181.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    App1365777750606777Component,
App1200206281277217Component,
App5559478257966365Component,
App5783084445253967Component,
App4322076326508447Component,
  ]
})
export class App1722938325764181Component {
}

