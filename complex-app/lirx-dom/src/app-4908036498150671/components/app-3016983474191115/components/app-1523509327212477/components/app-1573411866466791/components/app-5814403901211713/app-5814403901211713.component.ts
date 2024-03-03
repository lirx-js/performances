import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6036432324169107Component } from "./components/app-6036432324169107/app-6036432324169107.component";
import { App1383351158058705Component } from "./components/app-1383351158058705/app-1383351158058705.component";
import { App7234492579651445Component } from "./components/app-7234492579651445/app-7234492579651445.component";
import { App2043546315396871Component } from "./components/app-2043546315396871/app-2043546315396871.component";
import { App2306967284875487Component } from "./components/app-2306967284875487/app-2306967284875487.component";

// @ts-ignore
import html from './app-5814403901211713.component.html?raw';
// @ts-ignore
import style from './app-5814403901211713.component.scss?inline';

/**
 * COMPONENT: 'app-5814403901211713'
 */

export const App5814403901211713Component = new Component({
  name: 'app-5814403901211713',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6036432324169107Component,
App1383351158058705Component,
App7234492579651445Component,
App2043546315396871Component,
App2306967284875487Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
