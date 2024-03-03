import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2005375228404373Component } from "./components/app-2005375228404373/app-2005375228404373.component";
import { App5788607743955615Component } from "./components/app-5788607743955615/app-5788607743955615.component";
import { App4850086541064473Component } from "./components/app-4850086541064473/app-4850086541064473.component";
import { App6957308977900499Component } from "./components/app-6957308977900499/app-6957308977900499.component";
import { App2814321359205885Component } from "./components/app-2814321359205885/app-2814321359205885.component";

// @ts-ignore
import html from './app-4967694586839567.component.html?raw';
// @ts-ignore
import style from './app-4967694586839567.component.scss?inline';

/**
 * COMPONENT: 'app-4967694586839567'
 */

export const App4967694586839567Component = new Component({
  name: 'app-4967694586839567',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2005375228404373Component,
App5788607743955615Component,
App4850086541064473Component,
App6957308977900499Component,
App2814321359205885Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
