import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1850337863469597Component } from "./components/app-1850337863469597/app-1850337863469597.component";
import { App8102707648979949Component } from "./components/app-8102707648979949/app-8102707648979949.component";
import { App8322475428767545Component } from "./components/app-8322475428767545/app-8322475428767545.component";
import { App8811714827823349Component } from "./components/app-8811714827823349/app-8811714827823349.component";
import { App5169305079840627Component } from "./components/app-5169305079840627/app-5169305079840627.component";

// @ts-ignore
import html from './app-3319385375970411.component.html?raw';
// @ts-ignore
import style from './app-3319385375970411.component.scss?inline';

/**
 * COMPONENT: 'app-3319385375970411'
 */

export const App3319385375970411Component = new Component({
  name: 'app-3319385375970411',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1850337863469597Component,
App8102707648979949Component,
App8322475428767545Component,
App8811714827823349Component,
App5169305079840627Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
