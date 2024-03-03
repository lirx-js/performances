import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3496537560538455Component } from "./components/app-3496537560538455/app-3496537560538455.component";
import { App5306830964516867Component } from "./components/app-5306830964516867/app-5306830964516867.component";
import { App2159907683302471Component } from "./components/app-2159907683302471/app-2159907683302471.component";
import { App1124443595244661Component } from "./components/app-1124443595244661/app-1124443595244661.component";
import { App2537768847517783Component } from "./components/app-2537768847517783/app-2537768847517783.component";

// @ts-ignore
import html from './app-5053797899189841.component.html?raw';
// @ts-ignore
import style from './app-5053797899189841.component.scss?inline';

/**
 * COMPONENT: 'app-5053797899189841'
 */

export const App5053797899189841Component = new Component({
  name: 'app-5053797899189841',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3496537560538455Component,
App5306830964516867Component,
App2159907683302471Component,
App1124443595244661Component,
App2537768847517783Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
