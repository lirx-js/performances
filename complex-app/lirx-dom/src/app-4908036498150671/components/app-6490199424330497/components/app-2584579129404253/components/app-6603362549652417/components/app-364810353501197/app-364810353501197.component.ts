import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5691689561666341Component } from "./components/app-5691689561666341/app-5691689561666341.component";
import { App3499939627320941Component } from "./components/app-3499939627320941/app-3499939627320941.component";
import { App7363637760834623Component } from "./components/app-7363637760834623/app-7363637760834623.component";
import { App5836178829598635Component } from "./components/app-5836178829598635/app-5836178829598635.component";
import { App4193275370937113Component } from "./components/app-4193275370937113/app-4193275370937113.component";

// @ts-ignore
import html from './app-364810353501197.component.html?raw';
// @ts-ignore
import style from './app-364810353501197.component.scss?inline';

/**
 * COMPONENT: 'app-364810353501197'
 */

export const App364810353501197Component = new Component({
  name: 'app-364810353501197',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5691689561666341Component,
App3499939627320941Component,
App7363637760834623Component,
App5836178829598635Component,
App4193275370937113Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
