import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8977989072440755Component } from "./components/app-8977989072440755/app-8977989072440755.component";
import { App955549499204339Component } from "./components/app-955549499204339/app-955549499204339.component";
import { App1421837969567227Component } from "./components/app-1421837969567227/app-1421837969567227.component";
import { App3607302589501389Component } from "./components/app-3607302589501389/app-3607302589501389.component";
import { App8300559715091267Component } from "./components/app-8300559715091267/app-8300559715091267.component";

// @ts-ignore
import html from './app-1895429725438883.component.html?raw';
// @ts-ignore
import style from './app-1895429725438883.component.scss?inline';

/**
 * COMPONENT: 'app-1895429725438883'
 */

export const App1895429725438883Component = new Component({
  name: 'app-1895429725438883',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8977989072440755Component,
App955549499204339Component,
App1421837969567227Component,
App3607302589501389Component,
App8300559715091267Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
