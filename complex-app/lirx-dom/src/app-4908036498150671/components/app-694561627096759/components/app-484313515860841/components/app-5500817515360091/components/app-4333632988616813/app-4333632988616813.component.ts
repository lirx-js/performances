import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8549318545071995Component } from "./components/app-8549318545071995/app-8549318545071995.component";
import { App6763918818715039Component } from "./components/app-6763918818715039/app-6763918818715039.component";
import { App3685506447540847Component } from "./components/app-3685506447540847/app-3685506447540847.component";
import { App7743936045427875Component } from "./components/app-7743936045427875/app-7743936045427875.component";
import { App7943613239036195Component } from "./components/app-7943613239036195/app-7943613239036195.component";

// @ts-ignore
import html from './app-4333632988616813.component.html?raw';
// @ts-ignore
import style from './app-4333632988616813.component.scss?inline';

/**
 * COMPONENT: 'app-4333632988616813'
 */

export const App4333632988616813Component = new Component({
  name: 'app-4333632988616813',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8549318545071995Component,
App6763918818715039Component,
App3685506447540847Component,
App7743936045427875Component,
App7943613239036195Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
