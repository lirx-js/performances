import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4590925168385885Component } from "./components/app-4590925168385885/app-4590925168385885.component";
import { App5268250797900423Component } from "./components/app-5268250797900423/app-5268250797900423.component";
import { App4553715011491413Component } from "./components/app-4553715011491413/app-4553715011491413.component";
import { App4277729903045403Component } from "./components/app-4277729903045403/app-4277729903045403.component";
import { App3140004024004787Component } from "./components/app-3140004024004787/app-3140004024004787.component";

// @ts-ignore
import html from './app-8526542821800025.component.html?raw';
// @ts-ignore
import style from './app-8526542821800025.component.scss?inline';

/**
 * COMPONENT: 'app-8526542821800025'
 */

export const App8526542821800025Component = new Component({
  name: 'app-8526542821800025',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4590925168385885Component,
App5268250797900423Component,
App4553715011491413Component,
App4277729903045403Component,
App3140004024004787Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
