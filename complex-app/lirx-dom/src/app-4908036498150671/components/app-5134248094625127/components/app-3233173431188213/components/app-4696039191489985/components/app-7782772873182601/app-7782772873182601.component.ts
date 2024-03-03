import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7062138893255169Component } from "./components/app-7062138893255169/app-7062138893255169.component";
import { App2413389708316715Component } from "./components/app-2413389708316715/app-2413389708316715.component";
import { App1029973495876047Component } from "./components/app-1029973495876047/app-1029973495876047.component";
import { App2636028742373201Component } from "./components/app-2636028742373201/app-2636028742373201.component";
import { App348732412475293Component } from "./components/app-348732412475293/app-348732412475293.component";

// @ts-ignore
import html from './app-7782772873182601.component.html?raw';
// @ts-ignore
import style from './app-7782772873182601.component.scss?inline';

/**
 * COMPONENT: 'app-7782772873182601'
 */

export const App7782772873182601Component = new Component({
  name: 'app-7782772873182601',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7062138893255169Component,
App2413389708316715Component,
App1029973495876047Component,
App2636028742373201Component,
App348732412475293Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
