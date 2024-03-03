import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5897533380856059Component } from "./components/app-5897533380856059/app-5897533380856059.component";
import { App1211420961290521Component } from "./components/app-1211420961290521/app-1211420961290521.component";
import { App6724728252540419Component } from "./components/app-6724728252540419/app-6724728252540419.component";
import { App6694912489836661Component } from "./components/app-6694912489836661/app-6694912489836661.component";
import { App1208980828246969Component } from "./components/app-1208980828246969/app-1208980828246969.component";

// @ts-ignore
import html from './app-1890147327758541.component.html?raw';
// @ts-ignore
import style from './app-1890147327758541.component.scss?inline';

/**
 * COMPONENT: 'app-1890147327758541'
 */

export const App1890147327758541Component = new Component({
  name: 'app-1890147327758541',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5897533380856059Component,
App1211420961290521Component,
App6724728252540419Component,
App6694912489836661Component,
App1208980828246969Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
