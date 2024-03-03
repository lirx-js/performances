import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7626336673138479Component } from "./components/app-7626336673138479/app-7626336673138479.component";
import { App2273192391370945Component } from "./components/app-2273192391370945/app-2273192391370945.component";
import { App8457370862689609Component } from "./components/app-8457370862689609/app-8457370862689609.component";
import { App2222377743899347Component } from "./components/app-2222377743899347/app-2222377743899347.component";
import { App3953783411990335Component } from "./components/app-3953783411990335/app-3953783411990335.component";

// @ts-ignore
import html from './app-8853673126356031.component.html?raw';
// @ts-ignore
import style from './app-8853673126356031.component.scss?inline';

/**
 * COMPONENT: 'app-8853673126356031'
 */

export const App8853673126356031Component = new Component({
  name: 'app-8853673126356031',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7626336673138479Component,
App2273192391370945Component,
App8457370862689609Component,
App2222377743899347Component,
App3953783411990335Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
