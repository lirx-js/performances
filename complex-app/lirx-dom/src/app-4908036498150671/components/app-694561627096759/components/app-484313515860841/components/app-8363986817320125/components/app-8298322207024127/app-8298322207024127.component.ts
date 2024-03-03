import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App391313894508681Component } from "./components/app-391313894508681/app-391313894508681.component";
import { App2897755054253211Component } from "./components/app-2897755054253211/app-2897755054253211.component";
import { App1420939938599029Component } from "./components/app-1420939938599029/app-1420939938599029.component";
import { App8508381266114655Component } from "./components/app-8508381266114655/app-8508381266114655.component";
import { App6359432904814065Component } from "./components/app-6359432904814065/app-6359432904814065.component";

// @ts-ignore
import html from './app-8298322207024127.component.html?raw';
// @ts-ignore
import style from './app-8298322207024127.component.scss?inline';

/**
 * COMPONENT: 'app-8298322207024127'
 */

export const App8298322207024127Component = new Component({
  name: 'app-8298322207024127',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App391313894508681Component,
App2897755054253211Component,
App1420939938599029Component,
App8508381266114655Component,
App6359432904814065Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
