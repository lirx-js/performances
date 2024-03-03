import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5555947814603307Component } from "./components/app-5555947814603307/app-5555947814603307.component";
import { App6068622066234623Component } from "./components/app-6068622066234623/app-6068622066234623.component";
import { App5604958824541691Component } from "./components/app-5604958824541691/app-5604958824541691.component";
import { App6429983215815205Component } from "./components/app-6429983215815205/app-6429983215815205.component";
import { App8870046812458563Component } from "./components/app-8870046812458563/app-8870046812458563.component";

// @ts-ignore
import html from './app-4914955101413031.component.html?raw';
// @ts-ignore
import style from './app-4914955101413031.component.scss?inline';

/**
 * COMPONENT: 'app-4914955101413031'
 */

export const App4914955101413031Component = new Component({
  name: 'app-4914955101413031',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5555947814603307Component,
App6068622066234623Component,
App5604958824541691Component,
App6429983215815205Component,
App8870046812458563Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
