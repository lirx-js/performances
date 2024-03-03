import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7841962540779655Component } from "./components/app-7841962540779655/app-7841962540779655.component";
import { App198558465871323Component } from "./components/app-198558465871323/app-198558465871323.component";
import { App3237632943455459Component } from "./components/app-3237632943455459/app-3237632943455459.component";
import { App555253761427781Component } from "./components/app-555253761427781/app-555253761427781.component";
import { App3388118751997079Component } from "./components/app-3388118751997079/app-3388118751997079.component";

// @ts-ignore
import html from './app-1267680234913607.component.html?raw';
// @ts-ignore
import style from './app-1267680234913607.component.scss?inline';

/**
 * COMPONENT: 'app-1267680234913607'
 */

export const App1267680234913607Component = new Component({
  name: 'app-1267680234913607',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7841962540779655Component,
App198558465871323Component,
App3237632943455459Component,
App555253761427781Component,
App3388118751997079Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
