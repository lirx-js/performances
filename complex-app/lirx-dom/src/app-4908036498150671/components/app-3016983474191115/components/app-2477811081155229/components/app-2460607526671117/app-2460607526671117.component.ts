import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2870476238328003Component } from "./components/app-2870476238328003/app-2870476238328003.component";
import { App6499857547575305Component } from "./components/app-6499857547575305/app-6499857547575305.component";
import { App973606217278361Component } from "./components/app-973606217278361/app-973606217278361.component";
import { App1337781916325361Component } from "./components/app-1337781916325361/app-1337781916325361.component";
import { App7483527946596225Component } from "./components/app-7483527946596225/app-7483527946596225.component";

// @ts-ignore
import html from './app-2460607526671117.component.html?raw';
// @ts-ignore
import style from './app-2460607526671117.component.scss?inline';

/**
 * COMPONENT: 'app-2460607526671117'
 */

export const App2460607526671117Component = new Component({
  name: 'app-2460607526671117',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2870476238328003Component,
App6499857547575305Component,
App973606217278361Component,
App1337781916325361Component,
App7483527946596225Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
