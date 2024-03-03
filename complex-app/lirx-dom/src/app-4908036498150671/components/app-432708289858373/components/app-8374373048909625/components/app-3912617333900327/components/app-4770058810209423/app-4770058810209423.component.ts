import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6341381805744909Component } from "./components/app-6341381805744909/app-6341381805744909.component";
import { App6173195807144841Component } from "./components/app-6173195807144841/app-6173195807144841.component";
import { App9006231698811995Component } from "./components/app-9006231698811995/app-9006231698811995.component";
import { App6301039026718929Component } from "./components/app-6301039026718929/app-6301039026718929.component";
import { App6580646851481965Component } from "./components/app-6580646851481965/app-6580646851481965.component";

// @ts-ignore
import html from './app-4770058810209423.component.html?raw';
// @ts-ignore
import style from './app-4770058810209423.component.scss?inline';

/**
 * COMPONENT: 'app-4770058810209423'
 */

export const App4770058810209423Component = new Component({
  name: 'app-4770058810209423',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6341381805744909Component,
App6173195807144841Component,
App9006231698811995Component,
App6301039026718929Component,
App6580646851481965Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
