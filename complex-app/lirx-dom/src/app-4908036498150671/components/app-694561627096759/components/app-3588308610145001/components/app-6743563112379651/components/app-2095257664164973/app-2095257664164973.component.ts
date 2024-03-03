import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8126659113712893Component } from "./components/app-8126659113712893/app-8126659113712893.component";
import { App7794520611566537Component } from "./components/app-7794520611566537/app-7794520611566537.component";
import { App2495751261770197Component } from "./components/app-2495751261770197/app-2495751261770197.component";
import { App6089050525687883Component } from "./components/app-6089050525687883/app-6089050525687883.component";
import { App2060658541336633Component } from "./components/app-2060658541336633/app-2060658541336633.component";

// @ts-ignore
import html from './app-2095257664164973.component.html?raw';
// @ts-ignore
import style from './app-2095257664164973.component.scss?inline';

/**
 * COMPONENT: 'app-2095257664164973'
 */

export const App2095257664164973Component = new Component({
  name: 'app-2095257664164973',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8126659113712893Component,
App7794520611566537Component,
App2495751261770197Component,
App6089050525687883Component,
App2060658541336633Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
