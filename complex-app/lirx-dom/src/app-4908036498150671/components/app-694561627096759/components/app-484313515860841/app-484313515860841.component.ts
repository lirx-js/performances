import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App88184138927623Component } from "./components/app-88184138927623/app-88184138927623.component";
import { App1079266731777079Component } from "./components/app-1079266731777079/app-1079266731777079.component";
import { App6789104423848243Component } from "./components/app-6789104423848243/app-6789104423848243.component";
import { App5500817515360091Component } from "./components/app-5500817515360091/app-5500817515360091.component";
import { App8363986817320125Component } from "./components/app-8363986817320125/app-8363986817320125.component";

// @ts-ignore
import html from './app-484313515860841.component.html?raw';
// @ts-ignore
import style from './app-484313515860841.component.scss?inline';

/**
 * COMPONENT: 'app-484313515860841'
 */

export const App484313515860841Component = new Component({
  name: 'app-484313515860841',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App88184138927623Component,
App1079266731777079Component,
App6789104423848243Component,
App5500817515360091Component,
App8363986817320125Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
