import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4386151726045989Component } from "./components/app-4386151726045989/app-4386151726045989.component";
import { App2996901919300189Component } from "./components/app-2996901919300189/app-2996901919300189.component";
import { App6708681568290883Component } from "./components/app-6708681568290883/app-6708681568290883.component";
import { App8730428423324555Component } from "./components/app-8730428423324555/app-8730428423324555.component";
import { App2754203649989911Component } from "./components/app-2754203649989911/app-2754203649989911.component";

// @ts-ignore
import html from './app-2279609579364461.component.html?raw';
// @ts-ignore
import style from './app-2279609579364461.component.scss?inline';

/**
 * COMPONENT: 'app-2279609579364461'
 */

export const App2279609579364461Component = new Component({
  name: 'app-2279609579364461',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4386151726045989Component,
App2996901919300189Component,
App6708681568290883Component,
App8730428423324555Component,
App2754203649989911Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
