import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1852503308276321Component } from "./components/app-1852503308276321/app-1852503308276321.component";
import { App7464080617011099Component } from "./components/app-7464080617011099/app-7464080617011099.component";
import { App4217851793153061Component } from "./components/app-4217851793153061/app-4217851793153061.component";
import { App78757494683909Component } from "./components/app-78757494683909/app-78757494683909.component";
import { App4801988175443293Component } from "./components/app-4801988175443293/app-4801988175443293.component";

// @ts-ignore
import html from './app-1390228397866963.component.html?raw';
// @ts-ignore
import style from './app-1390228397866963.component.scss?inline';

/**
 * COMPONENT: 'app-1390228397866963'
 */

export const App1390228397866963Component = new Component({
  name: 'app-1390228397866963',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1852503308276321Component,
App7464080617011099Component,
App4217851793153061Component,
App78757494683909Component,
App4801988175443293Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
