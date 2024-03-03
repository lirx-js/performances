import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3233977693100089Component } from "./components/app-3233977693100089/app-3233977693100089.component";
import { App5754903918005653Component } from "./components/app-5754903918005653/app-5754903918005653.component";
import { App2598595545548699Component } from "./components/app-2598595545548699/app-2598595545548699.component";
import { App2286020681590965Component } from "./components/app-2286020681590965/app-2286020681590965.component";
import { App1508591306601403Component } from "./components/app-1508591306601403/app-1508591306601403.component";

// @ts-ignore
import html from './app-792365629235163.component.html?raw';
// @ts-ignore
import style from './app-792365629235163.component.scss?inline';

/**
 * COMPONENT: 'app-792365629235163'
 */

export const App792365629235163Component = new Component({
  name: 'app-792365629235163',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3233977693100089Component,
App5754903918005653Component,
App2598595545548699Component,
App2286020681590965Component,
App1508591306601403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
