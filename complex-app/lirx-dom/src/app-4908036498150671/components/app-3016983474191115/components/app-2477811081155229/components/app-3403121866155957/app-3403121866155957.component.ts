import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1286410918024177Component } from "./components/app-1286410918024177/app-1286410918024177.component";
import { App7183487678032065Component } from "./components/app-7183487678032065/app-7183487678032065.component";
import { App4905382801243265Component } from "./components/app-4905382801243265/app-4905382801243265.component";
import { App2414741231090049Component } from "./components/app-2414741231090049/app-2414741231090049.component";
import { App3746941031683017Component } from "./components/app-3746941031683017/app-3746941031683017.component";

// @ts-ignore
import html from './app-3403121866155957.component.html?raw';
// @ts-ignore
import style from './app-3403121866155957.component.scss?inline';

/**
 * COMPONENT: 'app-3403121866155957'
 */

export const App3403121866155957Component = new Component({
  name: 'app-3403121866155957',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1286410918024177Component,
App7183487678032065Component,
App4905382801243265Component,
App2414741231090049Component,
App3746941031683017Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
