import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5723446607048853Component } from "./components/app-5723446607048853/app-5723446607048853.component";
import { App1947236958243633Component } from "./components/app-1947236958243633/app-1947236958243633.component";
import { App1004749068098949Component } from "./components/app-1004749068098949/app-1004749068098949.component";
import { App2306741636524947Component } from "./components/app-2306741636524947/app-2306741636524947.component";
import { App2954729396645529Component } from "./components/app-2954729396645529/app-2954729396645529.component";

// @ts-ignore
import html from './app-8312767044138081.component.html?raw';
// @ts-ignore
import style from './app-8312767044138081.component.scss?inline';

/**
 * COMPONENT: 'app-8312767044138081'
 */

export const App8312767044138081Component = new Component({
  name: 'app-8312767044138081',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5723446607048853Component,
App1947236958243633Component,
App1004749068098949Component,
App2306741636524947Component,
App2954729396645529Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
