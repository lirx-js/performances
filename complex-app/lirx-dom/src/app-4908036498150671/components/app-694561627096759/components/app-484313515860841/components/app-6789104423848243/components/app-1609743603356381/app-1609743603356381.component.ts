import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1230682535178699Component } from "./components/app-1230682535178699/app-1230682535178699.component";
import { App232354549867791Component } from "./components/app-232354549867791/app-232354549867791.component";
import { App2416152511958925Component } from "./components/app-2416152511958925/app-2416152511958925.component";
import { App7564064023816635Component } from "./components/app-7564064023816635/app-7564064023816635.component";
import { App7222249900025617Component } from "./components/app-7222249900025617/app-7222249900025617.component";

// @ts-ignore
import html from './app-1609743603356381.component.html?raw';
// @ts-ignore
import style from './app-1609743603356381.component.scss?inline';

/**
 * COMPONENT: 'app-1609743603356381'
 */

export const App1609743603356381Component = new Component({
  name: 'app-1609743603356381',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1230682535178699Component,
App232354549867791Component,
App2416152511958925Component,
App7564064023816635Component,
App7222249900025617Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
