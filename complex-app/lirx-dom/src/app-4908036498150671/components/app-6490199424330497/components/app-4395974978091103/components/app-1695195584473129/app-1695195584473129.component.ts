import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1752941138749365Component } from "./components/app-1752941138749365/app-1752941138749365.component";
import { App2893565832792655Component } from "./components/app-2893565832792655/app-2893565832792655.component";
import { App984222253117861Component } from "./components/app-984222253117861/app-984222253117861.component";
import { App3560248789843357Component } from "./components/app-3560248789843357/app-3560248789843357.component";
import { App5459477208798713Component } from "./components/app-5459477208798713/app-5459477208798713.component";

// @ts-ignore
import html from './app-1695195584473129.component.html?raw';
// @ts-ignore
import style from './app-1695195584473129.component.scss?inline';

/**
 * COMPONENT: 'app-1695195584473129'
 */

export const App1695195584473129Component = new Component({
  name: 'app-1695195584473129',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1752941138749365Component,
App2893565832792655Component,
App984222253117861Component,
App3560248789843357Component,
App5459477208798713Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
