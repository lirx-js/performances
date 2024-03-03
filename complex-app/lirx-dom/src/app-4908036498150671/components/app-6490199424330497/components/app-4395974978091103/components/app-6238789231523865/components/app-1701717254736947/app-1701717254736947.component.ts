import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App751587532456715Component } from "./components/app-751587532456715/app-751587532456715.component";
import { App5832932274096269Component } from "./components/app-5832932274096269/app-5832932274096269.component";
import { App3675454606713089Component } from "./components/app-3675454606713089/app-3675454606713089.component";
import { App4391764791860547Component } from "./components/app-4391764791860547/app-4391764791860547.component";
import { App5856092021401597Component } from "./components/app-5856092021401597/app-5856092021401597.component";

// @ts-ignore
import html from './app-1701717254736947.component.html?raw';
// @ts-ignore
import style from './app-1701717254736947.component.scss?inline';

/**
 * COMPONENT: 'app-1701717254736947'
 */

export const App1701717254736947Component = new Component({
  name: 'app-1701717254736947',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App751587532456715Component,
App5832932274096269Component,
App3675454606713089Component,
App4391764791860547Component,
App5856092021401597Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
