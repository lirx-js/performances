import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8483196875695975Component } from "./components/app-8483196875695975/app-8483196875695975.component";
import { App1816575426072199Component } from "./components/app-1816575426072199/app-1816575426072199.component";
import { App4330694686533679Component } from "./components/app-4330694686533679/app-4330694686533679.component";
import { App1333220584209441Component } from "./components/app-1333220584209441/app-1333220584209441.component";
import { App2943976799173167Component } from "./components/app-2943976799173167/app-2943976799173167.component";

// @ts-ignore
import html from './app-3986868279858833.component.html?raw';
// @ts-ignore
import style from './app-3986868279858833.component.scss?inline';

/**
 * COMPONENT: 'app-3986868279858833'
 */

export const App3986868279858833Component = new Component({
  name: 'app-3986868279858833',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8483196875695975Component,
App1816575426072199Component,
App4330694686533679Component,
App1333220584209441Component,
App2943976799173167Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
