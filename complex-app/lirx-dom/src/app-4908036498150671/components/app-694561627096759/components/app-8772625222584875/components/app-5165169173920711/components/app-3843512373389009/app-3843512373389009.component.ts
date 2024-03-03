import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8457079656239949Component } from "./components/app-8457079656239949/app-8457079656239949.component";
import { App1500010582674185Component } from "./components/app-1500010582674185/app-1500010582674185.component";
import { App6224581656690601Component } from "./components/app-6224581656690601/app-6224581656690601.component";
import { App3529022147502545Component } from "./components/app-3529022147502545/app-3529022147502545.component";
import { App6897735800963151Component } from "./components/app-6897735800963151/app-6897735800963151.component";

// @ts-ignore
import html from './app-3843512373389009.component.html?raw';
// @ts-ignore
import style from './app-3843512373389009.component.scss?inline';

/**
 * COMPONENT: 'app-3843512373389009'
 */

export const App3843512373389009Component = new Component({
  name: 'app-3843512373389009',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8457079656239949Component,
App1500010582674185Component,
App6224581656690601Component,
App3529022147502545Component,
App6897735800963151Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
