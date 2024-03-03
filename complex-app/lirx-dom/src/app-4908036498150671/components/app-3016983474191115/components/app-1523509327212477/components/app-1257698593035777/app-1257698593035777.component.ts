import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8278491819728977Component } from "./components/app-8278491819728977/app-8278491819728977.component";
import { App8468533953477753Component } from "./components/app-8468533953477753/app-8468533953477753.component";
import { App4306325396400163Component } from "./components/app-4306325396400163/app-4306325396400163.component";
import { App8734520551234451Component } from "./components/app-8734520551234451/app-8734520551234451.component";
import { App6608534333755221Component } from "./components/app-6608534333755221/app-6608534333755221.component";

// @ts-ignore
import html from './app-1257698593035777.component.html?raw';
// @ts-ignore
import style from './app-1257698593035777.component.scss?inline';

/**
 * COMPONENT: 'app-1257698593035777'
 */

export const App1257698593035777Component = new Component({
  name: 'app-1257698593035777',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8278491819728977Component,
App8468533953477753Component,
App4306325396400163Component,
App8734520551234451Component,
App6608534333755221Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
