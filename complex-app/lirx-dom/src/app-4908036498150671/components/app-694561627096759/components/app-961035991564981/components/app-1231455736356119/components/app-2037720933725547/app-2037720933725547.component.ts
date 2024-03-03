import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6690373695877313Component } from "./components/app-6690373695877313/app-6690373695877313.component";
import { App3656153054166979Component } from "./components/app-3656153054166979/app-3656153054166979.component";
import { App329095227751711Component } from "./components/app-329095227751711/app-329095227751711.component";
import { App7921537351230087Component } from "./components/app-7921537351230087/app-7921537351230087.component";
import { App5181209618358801Component } from "./components/app-5181209618358801/app-5181209618358801.component";

// @ts-ignore
import html from './app-2037720933725547.component.html?raw';
// @ts-ignore
import style from './app-2037720933725547.component.scss?inline';

/**
 * COMPONENT: 'app-2037720933725547'
 */

export const App2037720933725547Component = new Component({
  name: 'app-2037720933725547',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6690373695877313Component,
App3656153054166979Component,
App329095227751711Component,
App7921537351230087Component,
App5181209618358801Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
