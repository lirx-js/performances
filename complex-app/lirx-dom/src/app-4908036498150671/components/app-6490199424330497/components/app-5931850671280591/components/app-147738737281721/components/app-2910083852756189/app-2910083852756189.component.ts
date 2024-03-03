import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App19642746728633Component } from "./components/app-19642746728633/app-19642746728633.component";
import { App7766686595898551Component } from "./components/app-7766686595898551/app-7766686595898551.component";
import { App706395184351475Component } from "./components/app-706395184351475/app-706395184351475.component";
import { App7449785170945081Component } from "./components/app-7449785170945081/app-7449785170945081.component";
import { App2797537806219637Component } from "./components/app-2797537806219637/app-2797537806219637.component";

// @ts-ignore
import html from './app-2910083852756189.component.html?raw';
// @ts-ignore
import style from './app-2910083852756189.component.scss?inline';

/**
 * COMPONENT: 'app-2910083852756189'
 */

export const App2910083852756189Component = new Component({
  name: 'app-2910083852756189',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App19642746728633Component,
App7766686595898551Component,
App706395184351475Component,
App7449785170945081Component,
App2797537806219637Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
