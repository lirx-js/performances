import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3732979591749049Component } from "./components/app-3732979591749049/app-3732979591749049.component";
import { App1293785361257239Component } from "./components/app-1293785361257239/app-1293785361257239.component";
import { App7542980045943231Component } from "./components/app-7542980045943231/app-7542980045943231.component";
import { App5756395757450491Component } from "./components/app-5756395757450491/app-5756395757450491.component";
import { App8266572540054301Component } from "./components/app-8266572540054301/app-8266572540054301.component";

// @ts-ignore
import html from './app-7235143499952269.component.html?raw';
// @ts-ignore
import style from './app-7235143499952269.component.scss?inline';

/**
 * COMPONENT: 'app-7235143499952269'
 */

export const App7235143499952269Component = new Component({
  name: 'app-7235143499952269',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3732979591749049Component,
App1293785361257239Component,
App7542980045943231Component,
App5756395757450491Component,
App8266572540054301Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
