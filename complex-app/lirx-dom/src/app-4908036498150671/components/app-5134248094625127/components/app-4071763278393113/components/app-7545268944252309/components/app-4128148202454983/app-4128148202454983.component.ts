import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4908160109624315Component } from "./components/app-4908160109624315/app-4908160109624315.component";
import { App7123161604030909Component } from "./components/app-7123161604030909/app-7123161604030909.component";
import { App5342373281702137Component } from "./components/app-5342373281702137/app-5342373281702137.component";
import { App921017381950829Component } from "./components/app-921017381950829/app-921017381950829.component";
import { App8864524157485643Component } from "./components/app-8864524157485643/app-8864524157485643.component";

// @ts-ignore
import html from './app-4128148202454983.component.html?raw';
// @ts-ignore
import style from './app-4128148202454983.component.scss?inline';

/**
 * COMPONENT: 'app-4128148202454983'
 */

export const App4128148202454983Component = new Component({
  name: 'app-4128148202454983',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4908160109624315Component,
App7123161604030909Component,
App5342373281702137Component,
App921017381950829Component,
App8864524157485643Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
