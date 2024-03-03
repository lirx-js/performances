import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3901665271108573Component } from "./components/app-3901665271108573/app-3901665271108573.component";
import { App8485404544949533Component } from "./components/app-8485404544949533/app-8485404544949533.component";
import { App4577074831851365Component } from "./components/app-4577074831851365/app-4577074831851365.component";
import { App2027610349979425Component } from "./components/app-2027610349979425/app-2027610349979425.component";
import { App913719539501453Component } from "./components/app-913719539501453/app-913719539501453.component";

// @ts-ignore
import html from './app-2866738105209391.component.html?raw';
// @ts-ignore
import style from './app-2866738105209391.component.scss?inline';

/**
 * COMPONENT: 'app-2866738105209391'
 */

export const App2866738105209391Component = new Component({
  name: 'app-2866738105209391',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3901665271108573Component,
App8485404544949533Component,
App4577074831851365Component,
App2027610349979425Component,
App913719539501453Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
