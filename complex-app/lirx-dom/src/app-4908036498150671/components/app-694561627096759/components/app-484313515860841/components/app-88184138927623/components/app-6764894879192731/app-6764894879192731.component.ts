import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7876274612576761Component } from "./components/app-7876274612576761/app-7876274612576761.component";
import { App3833086997152321Component } from "./components/app-3833086997152321/app-3833086997152321.component";
import { App3058685545882883Component } from "./components/app-3058685545882883/app-3058685545882883.component";
import { App5237546920501977Component } from "./components/app-5237546920501977/app-5237546920501977.component";
import { App2877855268498465Component } from "./components/app-2877855268498465/app-2877855268498465.component";

// @ts-ignore
import html from './app-6764894879192731.component.html?raw';
// @ts-ignore
import style from './app-6764894879192731.component.scss?inline';

/**
 * COMPONENT: 'app-6764894879192731'
 */

export const App6764894879192731Component = new Component({
  name: 'app-6764894879192731',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7876274612576761Component,
App3833086997152321Component,
App3058685545882883Component,
App5237546920501977Component,
App2877855268498465Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
