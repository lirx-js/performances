import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8904675975450195Component } from "./components/app-8904675975450195/app-8904675975450195.component";
import { App959444908259209Component } from "./components/app-959444908259209/app-959444908259209.component";
import { App1093383973797269Component } from "./components/app-1093383973797269/app-1093383973797269.component";
import { App7458267382680221Component } from "./components/app-7458267382680221/app-7458267382680221.component";
import { App3299794888441619Component } from "./components/app-3299794888441619/app-3299794888441619.component";

// @ts-ignore
import html from './app-6490981080920491.component.html?raw';
// @ts-ignore
import style from './app-6490981080920491.component.scss?inline';

/**
 * COMPONENT: 'app-6490981080920491'
 */

export const App6490981080920491Component = new Component({
  name: 'app-6490981080920491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8904675975450195Component,
App959444908259209Component,
App1093383973797269Component,
App7458267382680221Component,
App3299794888441619Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
