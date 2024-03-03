import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1626545330220843Component } from "./components/app-1626545330220843/app-1626545330220843.component";
import { App6855504268582139Component } from "./components/app-6855504268582139/app-6855504268582139.component";
import { App3260819367511303Component } from "./components/app-3260819367511303/app-3260819367511303.component";
import { App8091473016991197Component } from "./components/app-8091473016991197/app-8091473016991197.component";
import { App3775273913159975Component } from "./components/app-3775273913159975/app-3775273913159975.component";

// @ts-ignore
import html from './app-505717787559393.component.html?raw';
// @ts-ignore
import style from './app-505717787559393.component.scss?inline';

/**
 * COMPONENT: 'app-505717787559393'
 */

export const App505717787559393Component = new Component({
  name: 'app-505717787559393',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1626545330220843Component,
App6855504268582139Component,
App3260819367511303Component,
App8091473016991197Component,
App3775273913159975Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
