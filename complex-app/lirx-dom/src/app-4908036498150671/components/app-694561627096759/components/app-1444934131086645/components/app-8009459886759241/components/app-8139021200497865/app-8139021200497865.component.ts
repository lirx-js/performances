import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2871108686270665Component } from "./components/app-2871108686270665/app-2871108686270665.component";
import { App2532822683055255Component } from "./components/app-2532822683055255/app-2532822683055255.component";
import { App5474530193553243Component } from "./components/app-5474530193553243/app-5474530193553243.component";
import { App6434592674373261Component } from "./components/app-6434592674373261/app-6434592674373261.component";
import { App8781385799783099Component } from "./components/app-8781385799783099/app-8781385799783099.component";

// @ts-ignore
import html from './app-8139021200497865.component.html?raw';
// @ts-ignore
import style from './app-8139021200497865.component.scss?inline';

/**
 * COMPONENT: 'app-8139021200497865'
 */

export const App8139021200497865Component = new Component({
  name: 'app-8139021200497865',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2871108686270665Component,
App2532822683055255Component,
App5474530193553243Component,
App6434592674373261Component,
App8781385799783099Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
