import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App191848195683783Component } from "./components/app-191848195683783/app-191848195683783.component";
import { App6461208576476155Component } from "./components/app-6461208576476155/app-6461208576476155.component";
import { App339486812517757Component } from "./components/app-339486812517757/app-339486812517757.component";
import { App3228099456969817Component } from "./components/app-3228099456969817/app-3228099456969817.component";
import { App51196360085311Component } from "./components/app-51196360085311/app-51196360085311.component";

// @ts-ignore
import html from './app-7697403828808487.component.html?raw';
// @ts-ignore
import style from './app-7697403828808487.component.scss?inline';

/**
 * COMPONENT: 'app-7697403828808487'
 */

export const App7697403828808487Component = new Component({
  name: 'app-7697403828808487',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App191848195683783Component,
App6461208576476155Component,
App339486812517757Component,
App3228099456969817Component,
App51196360085311Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
