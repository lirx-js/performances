import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7387148243692475Component } from "./components/app-7387148243692475/app-7387148243692475.component";
import { App6295074372910947Component } from "./components/app-6295074372910947/app-6295074372910947.component";
import { App4334534783663613Component } from "./components/app-4334534783663613/app-4334534783663613.component";
import { App3458991966558473Component } from "./components/app-3458991966558473/app-3458991966558473.component";
import { App8074513226187579Component } from "./components/app-8074513226187579/app-8074513226187579.component";

// @ts-ignore
import html from './app-6625369886741243.component.html?raw';
// @ts-ignore
import style from './app-6625369886741243.component.scss?inline';

/**
 * COMPONENT: 'app-6625369886741243'
 */

export const App6625369886741243Component = new Component({
  name: 'app-6625369886741243',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7387148243692475Component,
App6295074372910947Component,
App4334534783663613Component,
App3458991966558473Component,
App8074513226187579Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
