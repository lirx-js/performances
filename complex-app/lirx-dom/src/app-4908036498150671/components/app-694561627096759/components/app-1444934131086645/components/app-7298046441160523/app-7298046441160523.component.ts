import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App635143845046179Component } from "./components/app-635143845046179/app-635143845046179.component";
import { App7521482539711003Component } from "./components/app-7521482539711003/app-7521482539711003.component";
import { App3078204566583869Component } from "./components/app-3078204566583869/app-3078204566583869.component";
import { App8669170294182547Component } from "./components/app-8669170294182547/app-8669170294182547.component";
import { App1102318681924715Component } from "./components/app-1102318681924715/app-1102318681924715.component";

// @ts-ignore
import html from './app-7298046441160523.component.html?raw';
// @ts-ignore
import style from './app-7298046441160523.component.scss?inline';

/**
 * COMPONENT: 'app-7298046441160523'
 */

export const App7298046441160523Component = new Component({
  name: 'app-7298046441160523',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App635143845046179Component,
App7521482539711003Component,
App3078204566583869Component,
App8669170294182547Component,
App1102318681924715Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
