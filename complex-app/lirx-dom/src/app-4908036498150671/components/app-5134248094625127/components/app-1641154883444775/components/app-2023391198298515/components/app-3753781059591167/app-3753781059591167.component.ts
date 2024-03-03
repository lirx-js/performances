import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1822301828426313Component } from "./components/app-1822301828426313/app-1822301828426313.component";
import { App623499633787237Component } from "./components/app-623499633787237/app-623499633787237.component";
import { App1240918062378751Component } from "./components/app-1240918062378751/app-1240918062378751.component";
import { App2779128902198981Component } from "./components/app-2779128902198981/app-2779128902198981.component";
import { App3813970695134219Component } from "./components/app-3813970695134219/app-3813970695134219.component";

// @ts-ignore
import html from './app-3753781059591167.component.html?raw';
// @ts-ignore
import style from './app-3753781059591167.component.scss?inline';

/**
 * COMPONENT: 'app-3753781059591167'
 */

export const App3753781059591167Component = new Component({
  name: 'app-3753781059591167',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1822301828426313Component,
App623499633787237Component,
App1240918062378751Component,
App2779128902198981Component,
App3813970695134219Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
