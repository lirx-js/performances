import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3647900591758993Component } from "./components/app-3647900591758993/app-3647900591758993.component";
import { App4185123723675937Component } from "./components/app-4185123723675937/app-4185123723675937.component";
import { App8116234025212377Component } from "./components/app-8116234025212377/app-8116234025212377.component";
import { App4609367573238765Component } from "./components/app-4609367573238765/app-4609367573238765.component";
import { App3880060620305737Component } from "./components/app-3880060620305737/app-3880060620305737.component";

// @ts-ignore
import html from './app-1224747540272777.component.html?raw';
// @ts-ignore
import style from './app-1224747540272777.component.scss?inline';

/**
 * COMPONENT: 'app-1224747540272777'
 */

export const App1224747540272777Component = new Component({
  name: 'app-1224747540272777',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3647900591758993Component,
App4185123723675937Component,
App8116234025212377Component,
App4609367573238765Component,
App3880060620305737Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
