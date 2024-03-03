import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5171073361507873Component } from "./components/app-5171073361507873/app-5171073361507873.component";
import { App5946511867879877Component } from "./components/app-5946511867879877/app-5946511867879877.component";
import { App8684109009724179Component } from "./components/app-8684109009724179/app-8684109009724179.component";
import { App8003459851497903Component } from "./components/app-8003459851497903/app-8003459851497903.component";
import { App3224912357245479Component } from "./components/app-3224912357245479/app-3224912357245479.component";

// @ts-ignore
import html from './app-3247638519266285.component.html?raw';
// @ts-ignore
import style from './app-3247638519266285.component.scss?inline';

/**
 * COMPONENT: 'app-3247638519266285'
 */

export const App3247638519266285Component = new Component({
  name: 'app-3247638519266285',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5171073361507873Component,
App5946511867879877Component,
App8684109009724179Component,
App8003459851497903Component,
App3224912357245479Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
