import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8488677708477479Component } from "./components/app-8488677708477479/app-8488677708477479.component";
import { App1844082656525537Component } from "./components/app-1844082656525537/app-1844082656525537.component";
import { App2357016344786579Component } from "./components/app-2357016344786579/app-2357016344786579.component";
import { App6091798924352157Component } from "./components/app-6091798924352157/app-6091798924352157.component";
import { App3717729624069787Component } from "./components/app-3717729624069787/app-3717729624069787.component";

// @ts-ignore
import html from './app-408569027486599.component.html?raw';
// @ts-ignore
import style from './app-408569027486599.component.scss?inline';

/**
 * COMPONENT: 'app-408569027486599'
 */

export const App408569027486599Component = new Component({
  name: 'app-408569027486599',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8488677708477479Component,
App1844082656525537Component,
App2357016344786579Component,
App6091798924352157Component,
App3717729624069787Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
