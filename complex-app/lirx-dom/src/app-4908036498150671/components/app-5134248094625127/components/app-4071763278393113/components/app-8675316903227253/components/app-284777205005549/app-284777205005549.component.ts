import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6100141328713467Component } from "./components/app-6100141328713467/app-6100141328713467.component";
import { App1851009109915131Component } from "./components/app-1851009109915131/app-1851009109915131.component";
import { App3781618789534371Component } from "./components/app-3781618789534371/app-3781618789534371.component";
import { App6341878831614653Component } from "./components/app-6341878831614653/app-6341878831614653.component";
import { App2417344613478945Component } from "./components/app-2417344613478945/app-2417344613478945.component";

// @ts-ignore
import html from './app-284777205005549.component.html?raw';
// @ts-ignore
import style from './app-284777205005549.component.scss?inline';

/**
 * COMPONENT: 'app-284777205005549'
 */

export const App284777205005549Component = new Component({
  name: 'app-284777205005549',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6100141328713467Component,
App1851009109915131Component,
App3781618789534371Component,
App6341878831614653Component,
App2417344613478945Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
