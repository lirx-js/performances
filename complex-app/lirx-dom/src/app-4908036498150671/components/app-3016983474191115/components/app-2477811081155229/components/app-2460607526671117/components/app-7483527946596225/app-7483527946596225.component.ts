import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6153092017786861Component } from "./components/app-6153092017786861/app-6153092017786861.component";
import { App5093729117758153Component } from "./components/app-5093729117758153/app-5093729117758153.component";
import { App8960568528614117Component } from "./components/app-8960568528614117/app-8960568528614117.component";
import { App217806819188833Component } from "./components/app-217806819188833/app-217806819188833.component";
import { App6431334823462239Component } from "./components/app-6431334823462239/app-6431334823462239.component";

// @ts-ignore
import html from './app-7483527946596225.component.html?raw';
// @ts-ignore
import style from './app-7483527946596225.component.scss?inline';

/**
 * COMPONENT: 'app-7483527946596225'
 */

export const App7483527946596225Component = new Component({
  name: 'app-7483527946596225',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6153092017786861Component,
App5093729117758153Component,
App8960568528614117Component,
App217806819188833Component,
App6431334823462239Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
