import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1547345376376739Component } from "./components/app-1547345376376739/app-1547345376376739.component";
import { App2242192342021053Component } from "./components/app-2242192342021053/app-2242192342021053.component";
import { App1258508328708329Component } from "./components/app-1258508328708329/app-1258508328708329.component";
import { App3630965869183749Component } from "./components/app-3630965869183749/app-3630965869183749.component";
import { App4763145321419357Component } from "./components/app-4763145321419357/app-4763145321419357.component";

// @ts-ignore
import html from './app-2674226431099851.component.html?raw';
// @ts-ignore
import style from './app-2674226431099851.component.scss?inline';

/**
 * COMPONENT: 'app-2674226431099851'
 */

export const App2674226431099851Component = new Component({
  name: 'app-2674226431099851',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1547345376376739Component,
App2242192342021053Component,
App1258508328708329Component,
App3630965869183749Component,
App4763145321419357Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
