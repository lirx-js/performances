import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App452863809252949Component } from "./components/app-452863809252949/app-452863809252949.component";
import { App2309494839517293Component } from "./components/app-2309494839517293/app-2309494839517293.component";
import { App1377852798105195Component } from "./components/app-1377852798105195/app-1377852798105195.component";
import { App6005467868910549Component } from "./components/app-6005467868910549/app-6005467868910549.component";
import { App8599484963218387Component } from "./components/app-8599484963218387/app-8599484963218387.component";

// @ts-ignore
import html from './app-8001178159691861.component.html?raw';
// @ts-ignore
import style from './app-8001178159691861.component.scss?inline';

/**
 * COMPONENT: 'app-8001178159691861'
 */

export const App8001178159691861Component = new Component({
  name: 'app-8001178159691861',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App452863809252949Component,
App2309494839517293Component,
App1377852798105195Component,
App6005467868910549Component,
App8599484963218387Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
