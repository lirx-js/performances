import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1906192717477819Component } from "./components/app-1906192717477819/app-1906192717477819.component";
import { App8796294511685721Component } from "./components/app-8796294511685721/app-8796294511685721.component";
import { App8068559022293993Component } from "./components/app-8068559022293993/app-8068559022293993.component";
import { App1597644292937913Component } from "./components/app-1597644292937913/app-1597644292937913.component";
import { App1224525152647803Component } from "./components/app-1224525152647803/app-1224525152647803.component";

// @ts-ignore
import html from './app-3763899346558649.component.html?raw';
// @ts-ignore
import style from './app-3763899346558649.component.scss?inline';

/**
 * COMPONENT: 'app-3763899346558649'
 */

export const App3763899346558649Component = new Component({
  name: 'app-3763899346558649',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1906192717477819Component,
App8796294511685721Component,
App8068559022293993Component,
App1597644292937913Component,
App1224525152647803Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
