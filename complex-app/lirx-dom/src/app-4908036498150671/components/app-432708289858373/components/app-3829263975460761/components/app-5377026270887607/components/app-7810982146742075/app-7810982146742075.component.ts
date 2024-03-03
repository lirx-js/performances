import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7312987011770481Component } from "./components/app-7312987011770481/app-7312987011770481.component";
import { App3891887296571897Component } from "./components/app-3891887296571897/app-3891887296571897.component";
import { App7324515295711449Component } from "./components/app-7324515295711449/app-7324515295711449.component";
import { App5458295852955853Component } from "./components/app-5458295852955853/app-5458295852955853.component";
import { App6121121787013679Component } from "./components/app-6121121787013679/app-6121121787013679.component";

// @ts-ignore
import html from './app-7810982146742075.component.html?raw';
// @ts-ignore
import style from './app-7810982146742075.component.scss?inline';

/**
 * COMPONENT: 'app-7810982146742075'
 */

export const App7810982146742075Component = new Component({
  name: 'app-7810982146742075',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7312987011770481Component,
App3891887296571897Component,
App7324515295711449Component,
App5458295852955853Component,
App6121121787013679Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
