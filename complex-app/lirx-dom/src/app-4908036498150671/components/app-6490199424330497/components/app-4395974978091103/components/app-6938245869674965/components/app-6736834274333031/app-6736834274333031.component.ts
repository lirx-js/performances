import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5951143704725293Component } from "./components/app-5951143704725293/app-5951143704725293.component";
import { App1528786349453703Component } from "./components/app-1528786349453703/app-1528786349453703.component";
import { App7766294480492355Component } from "./components/app-7766294480492355/app-7766294480492355.component";
import { App7679793632083537Component } from "./components/app-7679793632083537/app-7679793632083537.component";
import { App6688651056065845Component } from "./components/app-6688651056065845/app-6688651056065845.component";

// @ts-ignore
import html from './app-6736834274333031.component.html?raw';
// @ts-ignore
import style from './app-6736834274333031.component.scss?inline';

/**
 * COMPONENT: 'app-6736834274333031'
 */

export const App6736834274333031Component = new Component({
  name: 'app-6736834274333031',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5951143704725293Component,
App1528786349453703Component,
App7766294480492355Component,
App7679793632083537Component,
App6688651056065845Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
