import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6812296688757483Component } from "./components/app-6812296688757483/app-6812296688757483.component";
import { App5730139571795849Component } from "./components/app-5730139571795849/app-5730139571795849.component";
import { App207072614992673Component } from "./components/app-207072614992673/app-207072614992673.component";
import { App6509132585608815Component } from "./components/app-6509132585608815/app-6509132585608815.component";
import { App2812318761297617Component } from "./components/app-2812318761297617/app-2812318761297617.component";

// @ts-ignore
import html from './app-1882793322257091.component.html?raw';
// @ts-ignore
import style from './app-1882793322257091.component.scss?inline';

/**
 * COMPONENT: 'app-1882793322257091'
 */

export const App1882793322257091Component = new Component({
  name: 'app-1882793322257091',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6812296688757483Component,
App5730139571795849Component,
App207072614992673Component,
App6509132585608815Component,
App2812318761297617Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
