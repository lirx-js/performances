import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4892236923506285Component } from "./components/app-4892236923506285/app-4892236923506285.component";
import { App7282463329313267Component } from "./components/app-7282463329313267/app-7282463329313267.component";
import { App6954245154008601Component } from "./components/app-6954245154008601/app-6954245154008601.component";
import { App1709009837362971Component } from "./components/app-1709009837362971/app-1709009837362971.component";
import { App348722590496879Component } from "./components/app-348722590496879/app-348722590496879.component";

// @ts-ignore
import html from './app-2063310078242999.component.html?raw';
// @ts-ignore
import style from './app-2063310078242999.component.scss?inline';

/**
 * COMPONENT: 'app-2063310078242999'
 */

export const App2063310078242999Component = new Component({
  name: 'app-2063310078242999',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4892236923506285Component,
App7282463329313267Component,
App6954245154008601Component,
App1709009837362971Component,
App348722590496879Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
