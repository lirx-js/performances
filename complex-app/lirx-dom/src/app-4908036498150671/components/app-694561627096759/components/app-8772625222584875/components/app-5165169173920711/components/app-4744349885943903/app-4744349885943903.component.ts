import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7243864524951437Component } from "./components/app-7243864524951437/app-7243864524951437.component";
import { App3560884563628071Component } from "./components/app-3560884563628071/app-3560884563628071.component";
import { App8687160161761889Component } from "./components/app-8687160161761889/app-8687160161761889.component";
import { App5206419486446155Component } from "./components/app-5206419486446155/app-5206419486446155.component";
import { App6946917000668371Component } from "./components/app-6946917000668371/app-6946917000668371.component";

// @ts-ignore
import html from './app-4744349885943903.component.html?raw';
// @ts-ignore
import style from './app-4744349885943903.component.scss?inline';

/**
 * COMPONENT: 'app-4744349885943903'
 */

export const App4744349885943903Component = new Component({
  name: 'app-4744349885943903',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7243864524951437Component,
App3560884563628071Component,
App8687160161761889Component,
App5206419486446155Component,
App6946917000668371Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
