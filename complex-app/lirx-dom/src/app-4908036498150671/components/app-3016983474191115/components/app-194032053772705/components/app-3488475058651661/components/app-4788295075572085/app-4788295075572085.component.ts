import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App347366612880929Component } from "./components/app-347366612880929/app-347366612880929.component";
import { App7575773991292953Component } from "./components/app-7575773991292953/app-7575773991292953.component";
import { App3177932758917145Component } from "./components/app-3177932758917145/app-3177932758917145.component";
import { App4272784815216437Component } from "./components/app-4272784815216437/app-4272784815216437.component";
import { App5160814120269057Component } from "./components/app-5160814120269057/app-5160814120269057.component";

// @ts-ignore
import html from './app-4788295075572085.component.html?raw';
// @ts-ignore
import style from './app-4788295075572085.component.scss?inline';

/**
 * COMPONENT: 'app-4788295075572085'
 */

export const App4788295075572085Component = new Component({
  name: 'app-4788295075572085',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App347366612880929Component,
App7575773991292953Component,
App3177932758917145Component,
App4272784815216437Component,
App5160814120269057Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
