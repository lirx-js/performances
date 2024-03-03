import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4710302561799423Component } from "./components/app-4710302561799423/app-4710302561799423.component";
import { App6030684938995421Component } from "./components/app-6030684938995421/app-6030684938995421.component";
import { App6247390303344411Component } from "./components/app-6247390303344411/app-6247390303344411.component";
import { App644564190812895Component } from "./components/app-644564190812895/app-644564190812895.component";
import { App8020033302390157Component } from "./components/app-8020033302390157/app-8020033302390157.component";

// @ts-ignore
import html from './app-1427540701905747.component.html?raw';
// @ts-ignore
import style from './app-1427540701905747.component.scss?inline';

/**
 * COMPONENT: 'app-1427540701905747'
 */

export const App1427540701905747Component = new Component({
  name: 'app-1427540701905747',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4710302561799423Component,
App6030684938995421Component,
App6247390303344411Component,
App644564190812895Component,
App8020033302390157Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
