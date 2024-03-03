import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2822702173689431Component } from "./components/app-2822702173689431/app-2822702173689431.component";
import { App6423685486581393Component } from "./components/app-6423685486581393/app-6423685486581393.component";
import { App3844174557902107Component } from "./components/app-3844174557902107/app-3844174557902107.component";
import { App1416072141722725Component } from "./components/app-1416072141722725/app-1416072141722725.component";
import { App4243026368618253Component } from "./components/app-4243026368618253/app-4243026368618253.component";

// @ts-ignore
import html from './app-5942523288839031.component.html?raw';
// @ts-ignore
import style from './app-5942523288839031.component.scss?inline';

/**
 * COMPONENT: 'app-5942523288839031'
 */

export const App5942523288839031Component = new Component({
  name: 'app-5942523288839031',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2822702173689431Component,
App6423685486581393Component,
App3844174557902107Component,
App1416072141722725Component,
App4243026368618253Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
