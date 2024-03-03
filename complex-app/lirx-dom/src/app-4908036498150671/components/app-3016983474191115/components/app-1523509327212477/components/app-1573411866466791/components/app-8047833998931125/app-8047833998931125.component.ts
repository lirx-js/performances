import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3832124587618471Component } from "./components/app-3832124587618471/app-3832124587618471.component";
import { App8984441796099865Component } from "./components/app-8984441796099865/app-8984441796099865.component";
import { App178311567788055Component } from "./components/app-178311567788055/app-178311567788055.component";
import { App2542687958057567Component } from "./components/app-2542687958057567/app-2542687958057567.component";
import { App1453504325920397Component } from "./components/app-1453504325920397/app-1453504325920397.component";

// @ts-ignore
import html from './app-8047833998931125.component.html?raw';
// @ts-ignore
import style from './app-8047833998931125.component.scss?inline';

/**
 * COMPONENT: 'app-8047833998931125'
 */

export const App8047833998931125Component = new Component({
  name: 'app-8047833998931125',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3832124587618471Component,
App8984441796099865Component,
App178311567788055Component,
App2542687958057567Component,
App1453504325920397Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
