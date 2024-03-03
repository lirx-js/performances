import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7261691852006399Component } from "./components/app-7261691852006399/app-7261691852006399.component";
import { App8827000612312105Component } from "./components/app-8827000612312105/app-8827000612312105.component";
import { App3554795522813061Component } from "./components/app-3554795522813061/app-3554795522813061.component";
import { App65036132042217Component } from "./components/app-65036132042217/app-65036132042217.component";
import { App4999886230708103Component } from "./components/app-4999886230708103/app-4999886230708103.component";

// @ts-ignore
import html from './app-7712589255948641.component.html?raw';
// @ts-ignore
import style from './app-7712589255948641.component.scss?inline';

/**
 * COMPONENT: 'app-7712589255948641'
 */

export const App7712589255948641Component = new Component({
  name: 'app-7712589255948641',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7261691852006399Component,
App8827000612312105Component,
App3554795522813061Component,
App65036132042217Component,
App4999886230708103Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
