import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7110206761642397Component } from "./components/app-7110206761642397/app-7110206761642397.component";
import { App196378276969815Component } from "./components/app-196378276969815/app-196378276969815.component";
import { App2407184801131773Component } from "./components/app-2407184801131773/app-2407184801131773.component";
import { App366350289992215Component } from "./components/app-366350289992215/app-366350289992215.component";
import { App4085743576621755Component } from "./components/app-4085743576621755/app-4085743576621755.component";

// @ts-ignore
import html from './app-2612982048730767.component.html?raw';
// @ts-ignore
import style from './app-2612982048730767.component.scss?inline';

/**
 * COMPONENT: 'app-2612982048730767'
 */

export const App2612982048730767Component = new Component({
  name: 'app-2612982048730767',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7110206761642397Component,
App196378276969815Component,
App2407184801131773Component,
App366350289992215Component,
App4085743576621755Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
