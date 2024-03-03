import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4929470875922811Component } from "./components/app-4929470875922811/app-4929470875922811.component";
import { App2397208215975805Component } from "./components/app-2397208215975805/app-2397208215975805.component";
import { App3764720980016385Component } from "./components/app-3764720980016385/app-3764720980016385.component";
import { App8714018183000815Component } from "./components/app-8714018183000815/app-8714018183000815.component";
import { App4143966885023595Component } from "./components/app-4143966885023595/app-4143966885023595.component";

// @ts-ignore
import html from './app-8182916041939263.component.html?raw';
// @ts-ignore
import style from './app-8182916041939263.component.scss?inline';

/**
 * COMPONENT: 'app-8182916041939263'
 */

export const App8182916041939263Component = new Component({
  name: 'app-8182916041939263',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4929470875922811Component,
App2397208215975805Component,
App3764720980016385Component,
App8714018183000815Component,
App4143966885023595Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
