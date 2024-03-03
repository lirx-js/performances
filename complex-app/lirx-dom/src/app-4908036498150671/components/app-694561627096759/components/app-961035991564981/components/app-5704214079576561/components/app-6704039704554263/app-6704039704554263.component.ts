import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5315550036878839Component } from "./components/app-5315550036878839/app-5315550036878839.component";
import { App3661720814017157Component } from "./components/app-3661720814017157/app-3661720814017157.component";
import { App7529040269241611Component } from "./components/app-7529040269241611/app-7529040269241611.component";
import { App5248779845431567Component } from "./components/app-5248779845431567/app-5248779845431567.component";
import { App505862651930547Component } from "./components/app-505862651930547/app-505862651930547.component";

// @ts-ignore
import html from './app-6704039704554263.component.html?raw';
// @ts-ignore
import style from './app-6704039704554263.component.scss?inline';

/**
 * COMPONENT: 'app-6704039704554263'
 */

export const App6704039704554263Component = new Component({
  name: 'app-6704039704554263',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5315550036878839Component,
App3661720814017157Component,
App7529040269241611Component,
App5248779845431567Component,
App505862651930547Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
