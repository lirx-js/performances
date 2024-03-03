import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4985159139132003Component } from "./components/app-4985159139132003/app-4985159139132003.component";
import { App4029217739434699Component } from "./components/app-4029217739434699/app-4029217739434699.component";
import { App3801509429919833Component } from "./components/app-3801509429919833/app-3801509429919833.component";
import { App6565939106377389Component } from "./components/app-6565939106377389/app-6565939106377389.component";
import { App4940849652373231Component } from "./components/app-4940849652373231/app-4940849652373231.component";

// @ts-ignore
import html from './app-1999984907227203.component.html?raw';
// @ts-ignore
import style from './app-1999984907227203.component.scss?inline';

/**
 * COMPONENT: 'app-1999984907227203'
 */

export const App1999984907227203Component = new Component({
  name: 'app-1999984907227203',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4985159139132003Component,
App4029217739434699Component,
App3801509429919833Component,
App6565939106377389Component,
App4940849652373231Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
