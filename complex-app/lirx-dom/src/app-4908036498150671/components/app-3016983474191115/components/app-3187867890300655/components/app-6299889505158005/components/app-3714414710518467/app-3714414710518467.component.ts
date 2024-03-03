import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App452362960492851Component } from "./components/app-452362960492851/app-452362960492851.component";
import { App6645056201419019Component } from "./components/app-6645056201419019/app-6645056201419019.component";
import { App8542695600593451Component } from "./components/app-8542695600593451/app-8542695600593451.component";
import { App8447074039329117Component } from "./components/app-8447074039329117/app-8447074039329117.component";
import { App3187939845662085Component } from "./components/app-3187939845662085/app-3187939845662085.component";

// @ts-ignore
import html from './app-3714414710518467.component.html?raw';
// @ts-ignore
import style from './app-3714414710518467.component.scss?inline';

/**
 * COMPONENT: 'app-3714414710518467'
 */

export const App3714414710518467Component = new Component({
  name: 'app-3714414710518467',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App452362960492851Component,
App6645056201419019Component,
App8542695600593451Component,
App8447074039329117Component,
App3187939845662085Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
