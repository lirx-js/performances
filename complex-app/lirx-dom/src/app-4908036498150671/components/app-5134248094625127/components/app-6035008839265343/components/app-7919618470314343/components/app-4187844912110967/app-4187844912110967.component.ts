import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7104751164925143Component } from "./components/app-7104751164925143/app-7104751164925143.component";
import { App7662433615947695Component } from "./components/app-7662433615947695/app-7662433615947695.component";
import { App8743424814130523Component } from "./components/app-8743424814130523/app-8743424814130523.component";
import { App8659874742922377Component } from "./components/app-8659874742922377/app-8659874742922377.component";
import { App3954093453246457Component } from "./components/app-3954093453246457/app-3954093453246457.component";

// @ts-ignore
import html from './app-4187844912110967.component.html?raw';
// @ts-ignore
import style from './app-4187844912110967.component.scss?inline';

/**
 * COMPONENT: 'app-4187844912110967'
 */

export const App4187844912110967Component = new Component({
  name: 'app-4187844912110967',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7104751164925143Component,
App7662433615947695Component,
App8743424814130523Component,
App8659874742922377Component,
App3954093453246457Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
