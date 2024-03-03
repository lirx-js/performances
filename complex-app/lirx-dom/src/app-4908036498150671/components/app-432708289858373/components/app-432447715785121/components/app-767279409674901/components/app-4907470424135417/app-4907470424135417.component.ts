import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7269440790598743Component } from "./components/app-7269440790598743/app-7269440790598743.component";
import { App8549581994736187Component } from "./components/app-8549581994736187/app-8549581994736187.component";
import { App2142171849294191Component } from "./components/app-2142171849294191/app-2142171849294191.component";
import { App212225910710141Component } from "./components/app-212225910710141/app-212225910710141.component";
import { App6620455355027833Component } from "./components/app-6620455355027833/app-6620455355027833.component";

// @ts-ignore
import html from './app-4907470424135417.component.html?raw';
// @ts-ignore
import style from './app-4907470424135417.component.scss?inline';

/**
 * COMPONENT: 'app-4907470424135417'
 */

export const App4907470424135417Component = new Component({
  name: 'app-4907470424135417',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7269440790598743Component,
App8549581994736187Component,
App2142171849294191Component,
App212225910710141Component,
App6620455355027833Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
