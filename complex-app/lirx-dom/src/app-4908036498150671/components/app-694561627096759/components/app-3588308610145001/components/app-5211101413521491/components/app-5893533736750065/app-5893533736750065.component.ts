import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5653503650109695Component } from "./components/app-5653503650109695/app-5653503650109695.component";
import { App1856528822496829Component } from "./components/app-1856528822496829/app-1856528822496829.component";
import { App467761235517585Component } from "./components/app-467761235517585/app-467761235517585.component";
import { App717775127084273Component } from "./components/app-717775127084273/app-717775127084273.component";
import { App3881376405215171Component } from "./components/app-3881376405215171/app-3881376405215171.component";

// @ts-ignore
import html from './app-5893533736750065.component.html?raw';
// @ts-ignore
import style from './app-5893533736750065.component.scss?inline';

/**
 * COMPONENT: 'app-5893533736750065'
 */

export const App5893533736750065Component = new Component({
  name: 'app-5893533736750065',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5653503650109695Component,
App1856528822496829Component,
App467761235517585Component,
App717775127084273Component,
App3881376405215171Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
