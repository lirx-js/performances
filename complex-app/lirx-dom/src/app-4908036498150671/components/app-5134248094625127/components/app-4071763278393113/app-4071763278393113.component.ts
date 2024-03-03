import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2326165475417733Component } from "./components/app-2326165475417733/app-2326165475417733.component";
import { App8675316903227253Component } from "./components/app-8675316903227253/app-8675316903227253.component";
import { App7545268944252309Component } from "./components/app-7545268944252309/app-7545268944252309.component";
import { App4928426137488211Component } from "./components/app-4928426137488211/app-4928426137488211.component";
import { App3873382294700331Component } from "./components/app-3873382294700331/app-3873382294700331.component";

// @ts-ignore
import html from './app-4071763278393113.component.html?raw';
// @ts-ignore
import style from './app-4071763278393113.component.scss?inline';

/**
 * COMPONENT: 'app-4071763278393113'
 */

export const App4071763278393113Component = new Component({
  name: 'app-4071763278393113',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2326165475417733Component,
App8675316903227253Component,
App7545268944252309Component,
App4928426137488211Component,
App3873382294700331Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
