import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4071104434983179Component } from "./components/app-4071104434983179/app-4071104434983179.component";
import { App7450485176131547Component } from "./components/app-7450485176131547/app-7450485176131547.component";
import { App8140096122108573Component } from "./components/app-8140096122108573/app-8140096122108573.component";
import { App1909953714768953Component } from "./components/app-1909953714768953/app-1909953714768953.component";
import { App5071037021332385Component } from "./components/app-5071037021332385/app-5071037021332385.component";

// @ts-ignore
import html from './app-5954314395247091.component.html?raw';
// @ts-ignore
import style from './app-5954314395247091.component.scss?inline';

/**
 * COMPONENT: 'app-5954314395247091'
 */

export const App5954314395247091Component = new Component({
  name: 'app-5954314395247091',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4071104434983179Component,
App7450485176131547Component,
App8140096122108573Component,
App1909953714768953Component,
App5071037021332385Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
