import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1179548763824567Component } from "./components/app-1179548763824567/app-1179548763824567.component";
import { App5669567435499047Component } from "./components/app-5669567435499047/app-5669567435499047.component";
import { App986022068941935Component } from "./components/app-986022068941935/app-986022068941935.component";
import { App4270459962953241Component } from "./components/app-4270459962953241/app-4270459962953241.component";
import { App1496882336802597Component } from "./components/app-1496882336802597/app-1496882336802597.component";

// @ts-ignore
import html from './app-5794706899180509.component.html?raw';
// @ts-ignore
import style from './app-5794706899180509.component.scss?inline';

/**
 * COMPONENT: 'app-5794706899180509'
 */

export const App5794706899180509Component = new Component({
  name: 'app-5794706899180509',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1179548763824567Component,
App5669567435499047Component,
App986022068941935Component,
App4270459962953241Component,
App1496882336802597Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
