import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7658711529177453Component } from "./components/app-7658711529177453/app-7658711529177453.component";
import { App5690173677224613Component } from "./components/app-5690173677224613/app-5690173677224613.component";
import { App5546413281612313Component } from "./components/app-5546413281612313/app-5546413281612313.component";
import { App3556174238720843Component } from "./components/app-3556174238720843/app-3556174238720843.component";
import { App8887180706043467Component } from "./components/app-8887180706043467/app-8887180706043467.component";

// @ts-ignore
import html from './app-2634739396050815.component.html?raw';
// @ts-ignore
import style from './app-2634739396050815.component.scss?inline';

/**
 * COMPONENT: 'app-2634739396050815'
 */

export const App2634739396050815Component = new Component({
  name: 'app-2634739396050815',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7658711529177453Component,
App5690173677224613Component,
App5546413281612313Component,
App3556174238720843Component,
App8887180706043467Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
