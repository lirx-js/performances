import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5293912616432963Component } from "./components/app-5293912616432963/app-5293912616432963.component";
import { App6053130096876521Component } from "./components/app-6053130096876521/app-6053130096876521.component";
import { App4009885937365393Component } from "./components/app-4009885937365393/app-4009885937365393.component";
import { App490302528071085Component } from "./components/app-490302528071085/app-490302528071085.component";
import { App1211922055322847Component } from "./components/app-1211922055322847/app-1211922055322847.component";

// @ts-ignore
import html from './app-5019885921738887.component.html?raw';
// @ts-ignore
import style from './app-5019885921738887.component.scss?inline';

/**
 * COMPONENT: 'app-5019885921738887'
 */

export const App5019885921738887Component = new Component({
  name: 'app-5019885921738887',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5293912616432963Component,
App6053130096876521Component,
App4009885937365393Component,
App490302528071085Component,
App1211922055322847Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
