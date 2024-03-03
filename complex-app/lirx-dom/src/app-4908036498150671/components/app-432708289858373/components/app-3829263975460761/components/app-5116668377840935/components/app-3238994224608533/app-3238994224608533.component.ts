import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3888687952685229Component } from "./components/app-3888687952685229/app-3888687952685229.component";
import { App2495329242461475Component } from "./components/app-2495329242461475/app-2495329242461475.component";
import { App8605685163893291Component } from "./components/app-8605685163893291/app-8605685163893291.component";
import { App2270175776614123Component } from "./components/app-2270175776614123/app-2270175776614123.component";
import { App5485878176521477Component } from "./components/app-5485878176521477/app-5485878176521477.component";

// @ts-ignore
import html from './app-3238994224608533.component.html?raw';
// @ts-ignore
import style from './app-3238994224608533.component.scss?inline';

/**
 * COMPONENT: 'app-3238994224608533'
 */

export const App3238994224608533Component = new Component({
  name: 'app-3238994224608533',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3888687952685229Component,
App2495329242461475Component,
App8605685163893291Component,
App2270175776614123Component,
App5485878176521477Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
