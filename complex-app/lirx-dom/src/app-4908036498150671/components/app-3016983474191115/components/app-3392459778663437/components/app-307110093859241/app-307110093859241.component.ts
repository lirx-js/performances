import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7723909710286827Component } from "./components/app-7723909710286827/app-7723909710286827.component";
import { App6108473206073399Component } from "./components/app-6108473206073399/app-6108473206073399.component";
import { App8102097062146365Component } from "./components/app-8102097062146365/app-8102097062146365.component";
import { App1880470356113873Component } from "./components/app-1880470356113873/app-1880470356113873.component";
import { App1127756353644093Component } from "./components/app-1127756353644093/app-1127756353644093.component";

// @ts-ignore
import html from './app-307110093859241.component.html?raw';
// @ts-ignore
import style from './app-307110093859241.component.scss?inline';

/**
 * COMPONENT: 'app-307110093859241'
 */

export const App307110093859241Component = new Component({
  name: 'app-307110093859241',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7723909710286827Component,
App6108473206073399Component,
App8102097062146365Component,
App1880470356113873Component,
App1127756353644093Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
