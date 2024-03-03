import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6203280912947307Component } from "./components/app-6203280912947307/app-6203280912947307.component";
import { App1288422935962465Component } from "./components/app-1288422935962465/app-1288422935962465.component";
import { App2704495641588507Component } from "./components/app-2704495641588507/app-2704495641588507.component";
import { App4812568705293757Component } from "./components/app-4812568705293757/app-4812568705293757.component";
import { App1598320445111137Component } from "./components/app-1598320445111137/app-1598320445111137.component";

// @ts-ignore
import html from './app-7089236830703107.component.html?raw';
// @ts-ignore
import style from './app-7089236830703107.component.scss?inline';

/**
 * COMPONENT: 'app-7089236830703107'
 */

export const App7089236830703107Component = new Component({
  name: 'app-7089236830703107',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6203280912947307Component,
App1288422935962465Component,
App2704495641588507Component,
App4812568705293757Component,
App1598320445111137Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
