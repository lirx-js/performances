import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4193401962525503Component } from "./components/app-4193401962525503/app-4193401962525503.component";
import { App7966181752571581Component } from "./components/app-7966181752571581/app-7966181752571581.component";
import { App2183229231788403Component } from "./components/app-2183229231788403/app-2183229231788403.component";
import { App6462409035363611Component } from "./components/app-6462409035363611/app-6462409035363611.component";
import { App14868681019929Component } from "./components/app-14868681019929/app-14868681019929.component";

// @ts-ignore
import html from './app-4049296725929655.component.html?raw';
// @ts-ignore
import style from './app-4049296725929655.component.scss?inline';

/**
 * COMPONENT: 'app-4049296725929655'
 */

export const App4049296725929655Component = new Component({
  name: 'app-4049296725929655',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4193401962525503Component,
App7966181752571581Component,
App2183229231788403Component,
App6462409035363611Component,
App14868681019929Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
