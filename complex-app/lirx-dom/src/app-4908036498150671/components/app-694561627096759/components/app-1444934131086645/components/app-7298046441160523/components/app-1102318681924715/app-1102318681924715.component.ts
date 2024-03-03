import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1408951252778927Component } from "./components/app-1408951252778927/app-1408951252778927.component";
import { App6014196121338247Component } from "./components/app-6014196121338247/app-6014196121338247.component";
import { App7796635205432121Component } from "./components/app-7796635205432121/app-7796635205432121.component";
import { App537348157693373Component } from "./components/app-537348157693373/app-537348157693373.component";
import { App2777629019664645Component } from "./components/app-2777629019664645/app-2777629019664645.component";

// @ts-ignore
import html from './app-1102318681924715.component.html?raw';
// @ts-ignore
import style from './app-1102318681924715.component.scss?inline';

/**
 * COMPONENT: 'app-1102318681924715'
 */

export const App1102318681924715Component = new Component({
  name: 'app-1102318681924715',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1408951252778927Component,
App6014196121338247Component,
App7796635205432121Component,
App537348157693373Component,
App2777629019664645Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
