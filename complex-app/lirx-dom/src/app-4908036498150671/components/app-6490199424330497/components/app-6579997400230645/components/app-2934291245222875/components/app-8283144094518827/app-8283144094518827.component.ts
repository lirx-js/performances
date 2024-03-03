import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4869638748941351Component } from "./components/app-4869638748941351/app-4869638748941351.component";
import { App8700750747254613Component } from "./components/app-8700750747254613/app-8700750747254613.component";
import { App5804240118650545Component } from "./components/app-5804240118650545/app-5804240118650545.component";
import { App2519816594834511Component } from "./components/app-2519816594834511/app-2519816594834511.component";
import { App5954785636643241Component } from "./components/app-5954785636643241/app-5954785636643241.component";

// @ts-ignore
import html from './app-8283144094518827.component.html?raw';
// @ts-ignore
import style from './app-8283144094518827.component.scss?inline';

/**
 * COMPONENT: 'app-8283144094518827'
 */

export const App8283144094518827Component = new Component({
  name: 'app-8283144094518827',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4869638748941351Component,
App8700750747254613Component,
App5804240118650545Component,
App2519816594834511Component,
App5954785636643241Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
