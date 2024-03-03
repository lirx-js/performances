import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6976311858984425Component } from "./components/app-6976311858984425/app-6976311858984425.component";
import { App6677444077728859Component } from "./components/app-6677444077728859/app-6677444077728859.component";
import { App5460572970636129Component } from "./components/app-5460572970636129/app-5460572970636129.component";
import { App1927843383358617Component } from "./components/app-1927843383358617/app-1927843383358617.component";
import { App2480376813572527Component } from "./components/app-2480376813572527/app-2480376813572527.component";

// @ts-ignore
import html from './app-651623055708427.component.html?raw';
// @ts-ignore
import style from './app-651623055708427.component.scss?inline';

/**
 * COMPONENT: 'app-651623055708427'
 */

export const App651623055708427Component = new Component({
  name: 'app-651623055708427',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6976311858984425Component,
App6677444077728859Component,
App5460572970636129Component,
App1927843383358617Component,
App2480376813572527Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
