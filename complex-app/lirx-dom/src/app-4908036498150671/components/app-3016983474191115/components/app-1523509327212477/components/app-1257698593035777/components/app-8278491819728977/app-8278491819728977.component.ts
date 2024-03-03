import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4679479930795283Component } from "./components/app-4679479930795283/app-4679479930795283.component";
import { App3150325453157609Component } from "./components/app-3150325453157609/app-3150325453157609.component";
import { App481704006494589Component } from "./components/app-481704006494589/app-481704006494589.component";
import { App3745526349776489Component } from "./components/app-3745526349776489/app-3745526349776489.component";
import { App2340601640038169Component } from "./components/app-2340601640038169/app-2340601640038169.component";

// @ts-ignore
import html from './app-8278491819728977.component.html?raw';
// @ts-ignore
import style from './app-8278491819728977.component.scss?inline';

/**
 * COMPONENT: 'app-8278491819728977'
 */

export const App8278491819728977Component = new Component({
  name: 'app-8278491819728977',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4679479930795283Component,
App3150325453157609Component,
App481704006494589Component,
App3745526349776489Component,
App2340601640038169Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
