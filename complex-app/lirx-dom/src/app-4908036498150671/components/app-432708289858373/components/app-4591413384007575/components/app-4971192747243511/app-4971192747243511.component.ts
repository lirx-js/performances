import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4967694586839567Component } from "./components/app-4967694586839567/app-4967694586839567.component";
import { App1942072262981477Component } from "./components/app-1942072262981477/app-1942072262981477.component";
import { App6285214996331053Component } from "./components/app-6285214996331053/app-6285214996331053.component";
import { App2245955473048381Component } from "./components/app-2245955473048381/app-2245955473048381.component";
import { App2274057491779465Component } from "./components/app-2274057491779465/app-2274057491779465.component";

// @ts-ignore
import html from './app-4971192747243511.component.html?raw';
// @ts-ignore
import style from './app-4971192747243511.component.scss?inline';

/**
 * COMPONENT: 'app-4971192747243511'
 */

export const App4971192747243511Component = new Component({
  name: 'app-4971192747243511',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4967694586839567Component,
App1942072262981477Component,
App6285214996331053Component,
App2245955473048381Component,
App2274057491779465Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
