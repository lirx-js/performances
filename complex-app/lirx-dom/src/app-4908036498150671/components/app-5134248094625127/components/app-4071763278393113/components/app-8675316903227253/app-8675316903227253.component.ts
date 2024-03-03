import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App284777205005549Component } from "./components/app-284777205005549/app-284777205005549.component";
import { App8888517548232745Component } from "./components/app-8888517548232745/app-8888517548232745.component";
import { App1224747540272777Component } from "./components/app-1224747540272777/app-1224747540272777.component";
import { App2929762272053115Component } from "./components/app-2929762272053115/app-2929762272053115.component";
import { App1537245549304611Component } from "./components/app-1537245549304611/app-1537245549304611.component";

// @ts-ignore
import html from './app-8675316903227253.component.html?raw';
// @ts-ignore
import style from './app-8675316903227253.component.scss?inline';

/**
 * COMPONENT: 'app-8675316903227253'
 */

export const App8675316903227253Component = new Component({
  name: 'app-8675316903227253',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App284777205005549Component,
App8888517548232745Component,
App1224747540272777Component,
App2929762272053115Component,
App1537245549304611Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
