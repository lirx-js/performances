import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4010106527708615Component } from "./components/app-4010106527708615/app-4010106527708615.component";
import { App8118705652296151Component } from "./components/app-8118705652296151/app-8118705652296151.component";
import { App5571707566257103Component } from "./components/app-5571707566257103/app-5571707566257103.component";
import { App2065604669630811Component } from "./components/app-2065604669630811/app-2065604669630811.component";
import { App1588094800436861Component } from "./components/app-1588094800436861/app-1588094800436861.component";

// @ts-ignore
import html from './app-2762762439072691.component.html?raw';
// @ts-ignore
import style from './app-2762762439072691.component.scss?inline';

/**
 * COMPONENT: 'app-2762762439072691'
 */

export const App2762762439072691Component = new Component({
  name: 'app-2762762439072691',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4010106527708615Component,
App8118705652296151Component,
App5571707566257103Component,
App2065604669630811Component,
App1588094800436861Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
