import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6464816847687487Component } from "./components/app-6464816847687487/app-6464816847687487.component";
import { App5019885921738887Component } from "./components/app-5019885921738887/app-5019885921738887.component";
import { App8491970543578071Component } from "./components/app-8491970543578071/app-8491970543578071.component";
import { App7902058209344927Component } from "./components/app-7902058209344927/app-7902058209344927.component";
import { App5782222502170677Component } from "./components/app-5782222502170677/app-5782222502170677.component";

// @ts-ignore
import html from './app-8760551634198681.component.html?raw';
// @ts-ignore
import style from './app-8760551634198681.component.scss?inline';

/**
 * COMPONENT: 'app-8760551634198681'
 */

export const App8760551634198681Component = new Component({
  name: 'app-8760551634198681',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6464816847687487Component,
App5019885921738887Component,
App8491970543578071Component,
App7902058209344927Component,
App5782222502170677Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
