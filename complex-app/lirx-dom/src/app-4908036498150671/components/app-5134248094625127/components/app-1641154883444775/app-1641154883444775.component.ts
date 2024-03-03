import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8939878502740655Component } from "./components/app-8939878502740655/app-8939878502740655.component";
import { App1062420128643287Component } from "./components/app-1062420128643287/app-1062420128643287.component";
import { App3498345150718197Component } from "./components/app-3498345150718197/app-3498345150718197.component";
import { App6490981080920491Component } from "./components/app-6490981080920491/app-6490981080920491.component";
import { App2023391198298515Component } from "./components/app-2023391198298515/app-2023391198298515.component";

// @ts-ignore
import html from './app-1641154883444775.component.html?raw';
// @ts-ignore
import style from './app-1641154883444775.component.scss?inline';

/**
 * COMPONENT: 'app-1641154883444775'
 */

export const App1641154883444775Component = new Component({
  name: 'app-1641154883444775',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8939878502740655Component,
App1062420128643287Component,
App3498345150718197Component,
App6490981080920491Component,
App2023391198298515Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
