import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1932176741013959Component } from "./components/app-1932176741013959/app-1932176741013959.component";
import { App3753781059591167Component } from "./components/app-3753781059591167/app-3753781059591167.component";
import { App4431685095232067Component } from "./components/app-4431685095232067/app-4431685095232067.component";
import { App3313982500106553Component } from "./components/app-3313982500106553/app-3313982500106553.component";
import { App5778078157636585Component } from "./components/app-5778078157636585/app-5778078157636585.component";

// @ts-ignore
import html from './app-2023391198298515.component.html?raw';
// @ts-ignore
import style from './app-2023391198298515.component.scss?inline';

/**
 * COMPONENT: 'app-2023391198298515'
 */

export const App2023391198298515Component = new Component({
  name: 'app-2023391198298515',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1932176741013959Component,
App3753781059591167Component,
App4431685095232067Component,
App3313982500106553Component,
App5778078157636585Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
