import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2817602828514871Component } from "./components/app-2817602828514871/app-2817602828514871.component";
import { App3534115498024271Component } from "./components/app-3534115498024271/app-3534115498024271.component";
import { App4203452561865695Component } from "./components/app-4203452561865695/app-4203452561865695.component";
import { App2029098422003477Component } from "./components/app-2029098422003477/app-2029098422003477.component";
import { App5275333906154213Component } from "./components/app-5275333906154213/app-5275333906154213.component";

// @ts-ignore
import html from './app-6722115566454803.component.html?raw';
// @ts-ignore
import style from './app-6722115566454803.component.scss?inline';

/**
 * COMPONENT: 'app-6722115566454803'
 */

export const App6722115566454803Component = new Component({
  name: 'app-6722115566454803',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2817602828514871Component,
App3534115498024271Component,
App4203452561865695Component,
App2029098422003477Component,
App5275333906154213Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
