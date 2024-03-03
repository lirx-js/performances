import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3034511854828237Component } from "./components/app-3034511854828237/app-3034511854828237.component";
import { App3211360182837919Component } from "./components/app-3211360182837919/app-3211360182837919.component";
import { App8319673645118707Component } from "./components/app-8319673645118707/app-8319673645118707.component";
import { App6734282195569535Component } from "./components/app-6734282195569535/app-6734282195569535.component";
import { App6327010681961195Component } from "./components/app-6327010681961195/app-6327010681961195.component";

// @ts-ignore
import html from './app-1926065431437441.component.html?raw';
// @ts-ignore
import style from './app-1926065431437441.component.scss?inline';

/**
 * COMPONENT: 'app-1926065431437441'
 */

export const App1926065431437441Component = new Component({
  name: 'app-1926065431437441',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3034511854828237Component,
App3211360182837919Component,
App8319673645118707Component,
App6734282195569535Component,
App6327010681961195Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
