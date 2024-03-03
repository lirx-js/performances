import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1778946158980549Component } from "./components/app-1778946158980549/app-1778946158980549.component";
import { App7751034342350057Component } from "./components/app-7751034342350057/app-7751034342350057.component";
import { App3394038374681447Component } from "./components/app-3394038374681447/app-3394038374681447.component";
import { App8972208438180165Component } from "./components/app-8972208438180165/app-8972208438180165.component";
import { App5708409077921943Component } from "./components/app-5708409077921943/app-5708409077921943.component";

// @ts-ignore
import html from './app-6077485738278839.component.html?raw';
// @ts-ignore
import style from './app-6077485738278839.component.scss?inline';

/**
 * COMPONENT: 'app-6077485738278839'
 */

export const App6077485738278839Component = new Component({
  name: 'app-6077485738278839',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1778946158980549Component,
App7751034342350057Component,
App3394038374681447Component,
App8972208438180165Component,
App5708409077921943Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
