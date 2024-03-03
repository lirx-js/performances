import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1311345922376021Component } from "./components/app-1311345922376021/app-1311345922376021.component";
import { App553939393283067Component } from "./components/app-553939393283067/app-553939393283067.component";
import { App1403498186360713Component } from "./components/app-1403498186360713/app-1403498186360713.component";
import { App3257291876045141Component } from "./components/app-3257291876045141/app-3257291876045141.component";
import { App2514951638002825Component } from "./components/app-2514951638002825/app-2514951638002825.component";

// @ts-ignore
import html from './app-2377912002194491.component.html?raw';
// @ts-ignore
import style from './app-2377912002194491.component.scss?inline';

/**
 * COMPONENT: 'app-2377912002194491'
 */

export const App2377912002194491Component = new Component({
  name: 'app-2377912002194491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1311345922376021Component,
App553939393283067Component,
App1403498186360713Component,
App3257291876045141Component,
App2514951638002825Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
