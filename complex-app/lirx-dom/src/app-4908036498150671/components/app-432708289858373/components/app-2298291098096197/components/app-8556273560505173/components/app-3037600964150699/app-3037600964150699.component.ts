import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1994172713126965Component } from "./components/app-1994172713126965/app-1994172713126965.component";
import { App8879506197154735Component } from "./components/app-8879506197154735/app-8879506197154735.component";
import { App6054544970212579Component } from "./components/app-6054544970212579/app-6054544970212579.component";
import { App5571919919567895Component } from "./components/app-5571919919567895/app-5571919919567895.component";
import { App7898338364791929Component } from "./components/app-7898338364791929/app-7898338364791929.component";

// @ts-ignore
import html from './app-3037600964150699.component.html?raw';
// @ts-ignore
import style from './app-3037600964150699.component.scss?inline';

/**
 * COMPONENT: 'app-3037600964150699'
 */

export const App3037600964150699Component = new Component({
  name: 'app-3037600964150699',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1994172713126965Component,
App8879506197154735Component,
App6054544970212579Component,
App5571919919567895Component,
App7898338364791929Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
