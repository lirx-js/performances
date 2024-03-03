import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8937626166654205Component } from "./components/app-8937626166654205/app-8937626166654205.component";
import { App7413560676412441Component } from "./components/app-7413560676412441/app-7413560676412441.component";
import { App6908512385002151Component } from "./components/app-6908512385002151/app-6908512385002151.component";
import { App6880229706392955Component } from "./components/app-6880229706392955/app-6880229706392955.component";
import { App5296459789870819Component } from "./components/app-5296459789870819/app-5296459789870819.component";

// @ts-ignore
import html from './app-2471276191456547.component.html?raw';
// @ts-ignore
import style from './app-2471276191456547.component.scss?inline';

/**
 * COMPONENT: 'app-2471276191456547'
 */

export const App2471276191456547Component = new Component({
  name: 'app-2471276191456547',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8937626166654205Component,
App7413560676412441Component,
App6908512385002151Component,
App6880229706392955Component,
App5296459789870819Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
