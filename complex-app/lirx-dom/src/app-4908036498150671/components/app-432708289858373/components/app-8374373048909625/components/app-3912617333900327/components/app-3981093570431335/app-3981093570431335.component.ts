import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2038768529370897Component } from "./components/app-2038768529370897/app-2038768529370897.component";
import { App2468074028302627Component } from "./components/app-2468074028302627/app-2468074028302627.component";
import { App3025784235804797Component } from "./components/app-3025784235804797/app-3025784235804797.component";
import { App8307815369238929Component } from "./components/app-8307815369238929/app-8307815369238929.component";
import { App1770711449140635Component } from "./components/app-1770711449140635/app-1770711449140635.component";

// @ts-ignore
import html from './app-3981093570431335.component.html?raw';
// @ts-ignore
import style from './app-3981093570431335.component.scss?inline';

/**
 * COMPONENT: 'app-3981093570431335'
 */

export const App3981093570431335Component = new Component({
  name: 'app-3981093570431335',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2038768529370897Component,
App2468074028302627Component,
App3025784235804797Component,
App8307815369238929Component,
App1770711449140635Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
