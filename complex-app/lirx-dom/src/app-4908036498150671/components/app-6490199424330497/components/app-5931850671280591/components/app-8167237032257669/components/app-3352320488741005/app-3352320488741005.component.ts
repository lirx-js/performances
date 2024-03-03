import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1564825814766983Component } from "./components/app-1564825814766983/app-1564825814766983.component";
import { App5457119848025089Component } from "./components/app-5457119848025089/app-5457119848025089.component";
import { App2490810388627619Component } from "./components/app-2490810388627619/app-2490810388627619.component";
import { App8686801318156325Component } from "./components/app-8686801318156325/app-8686801318156325.component";
import { App2982055809627923Component } from "./components/app-2982055809627923/app-2982055809627923.component";

// @ts-ignore
import html from './app-3352320488741005.component.html?raw';
// @ts-ignore
import style from './app-3352320488741005.component.scss?inline';

/**
 * COMPONENT: 'app-3352320488741005'
 */

export const App3352320488741005Component = new Component({
  name: 'app-3352320488741005',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1564825814766983Component,
App5457119848025089Component,
App2490810388627619Component,
App8686801318156325Component,
App2982055809627923Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
