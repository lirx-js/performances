import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5898258292976243Component } from "./components/app-5898258292976243/app-5898258292976243.component";
import { App2279508035864089Component } from "./components/app-2279508035864089/app-2279508035864089.component";
import { App3188524387745949Component } from "./components/app-3188524387745949/app-3188524387745949.component";
import { App931197228701491Component } from "./components/app-931197228701491/app-931197228701491.component";
import { App896804579540461Component } from "./components/app-896804579540461/app-896804579540461.component";

// @ts-ignore
import html from './app-6108473206073399.component.html?raw';
// @ts-ignore
import style from './app-6108473206073399.component.scss?inline';

/**
 * COMPONENT: 'app-6108473206073399'
 */

export const App6108473206073399Component = new Component({
  name: 'app-6108473206073399',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5898258292976243Component,
App2279508035864089Component,
App3188524387745949Component,
App931197228701491Component,
App896804579540461Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
