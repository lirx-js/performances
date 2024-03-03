import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4340799798780249Component } from "./components/app-4340799798780249/app-4340799798780249.component";
import { App7296677998707553Component } from "./components/app-7296677998707553/app-7296677998707553.component";
import { App3986868279858833Component } from "./components/app-3986868279858833/app-3986868279858833.component";
import { App6381721998740251Component } from "./components/app-6381721998740251/app-6381721998740251.component";
import { App5794706899180509Component } from "./components/app-5794706899180509/app-5794706899180509.component";

// @ts-ignore
import html from './app-3873382294700331.component.html?raw';
// @ts-ignore
import style from './app-3873382294700331.component.scss?inline';

/**
 * COMPONENT: 'app-3873382294700331'
 */

export const App3873382294700331Component = new Component({
  name: 'app-3873382294700331',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4340799798780249Component,
App7296677998707553Component,
App3986868279858833Component,
App6381721998740251Component,
App5794706899180509Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
