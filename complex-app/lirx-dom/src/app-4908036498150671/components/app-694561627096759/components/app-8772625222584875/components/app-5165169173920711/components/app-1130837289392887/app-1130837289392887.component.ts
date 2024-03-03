import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5218235102815289Component } from "./components/app-5218235102815289/app-5218235102815289.component";
import { App8615654201282321Component } from "./components/app-8615654201282321/app-8615654201282321.component";
import { App3806008945097127Component } from "./components/app-3806008945097127/app-3806008945097127.component";
import { App57877474937841Component } from "./components/app-57877474937841/app-57877474937841.component";
import { App1048886245438529Component } from "./components/app-1048886245438529/app-1048886245438529.component";

// @ts-ignore
import html from './app-1130837289392887.component.html?raw';
// @ts-ignore
import style from './app-1130837289392887.component.scss?inline';

/**
 * COMPONENT: 'app-1130837289392887'
 */

export const App1130837289392887Component = new Component({
  name: 'app-1130837289392887',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5218235102815289Component,
App8615654201282321Component,
App3806008945097127Component,
App57877474937841Component,
App1048886245438529Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
