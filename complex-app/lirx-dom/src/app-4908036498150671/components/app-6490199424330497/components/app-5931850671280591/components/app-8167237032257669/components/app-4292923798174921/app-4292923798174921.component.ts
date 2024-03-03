import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7179151529366191Component } from "./components/app-7179151529366191/app-7179151529366191.component";
import { App4565656770114505Component } from "./components/app-4565656770114505/app-4565656770114505.component";
import { App6079817061579689Component } from "./components/app-6079817061579689/app-6079817061579689.component";
import { App5430008736045977Component } from "./components/app-5430008736045977/app-5430008736045977.component";
import { App2592066983741517Component } from "./components/app-2592066983741517/app-2592066983741517.component";

// @ts-ignore
import html from './app-4292923798174921.component.html?raw';
// @ts-ignore
import style from './app-4292923798174921.component.scss?inline';

/**
 * COMPONENT: 'app-4292923798174921'
 */

export const App4292923798174921Component = new Component({
  name: 'app-4292923798174921',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7179151529366191Component,
App4565656770114505Component,
App6079817061579689Component,
App5430008736045977Component,
App2592066983741517Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
