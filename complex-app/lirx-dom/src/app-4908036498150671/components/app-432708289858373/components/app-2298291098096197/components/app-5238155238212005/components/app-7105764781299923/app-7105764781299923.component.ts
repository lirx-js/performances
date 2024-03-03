import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1869928608802401Component } from "./components/app-1869928608802401/app-1869928608802401.component";
import { App643022029428511Component } from "./components/app-643022029428511/app-643022029428511.component";
import { App7314655624135729Component } from "./components/app-7314655624135729/app-7314655624135729.component";
import { App6337377160094989Component } from "./components/app-6337377160094989/app-6337377160094989.component";
import { App8989934041845749Component } from "./components/app-8989934041845749/app-8989934041845749.component";

// @ts-ignore
import html from './app-7105764781299923.component.html?raw';
// @ts-ignore
import style from './app-7105764781299923.component.scss?inline';

/**
 * COMPONENT: 'app-7105764781299923'
 */

export const App7105764781299923Component = new Component({
  name: 'app-7105764781299923',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1869928608802401Component,
App643022029428511Component,
App7314655624135729Component,
App6337377160094989Component,
App8989934041845749Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
