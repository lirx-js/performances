import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App912387701875181Component } from "./components/app-912387701875181/app-912387701875181.component";
import { App1980853776503033Component } from "./components/app-1980853776503033/app-1980853776503033.component";
import { App7074584132856455Component } from "./components/app-7074584132856455/app-7074584132856455.component";
import { App5819392202819217Component } from "./components/app-5819392202819217/app-5819392202819217.component";
import { App8458792715388819Component } from "./components/app-8458792715388819/app-8458792715388819.component";

// @ts-ignore
import html from './app-8705908111386319.component.html?raw';
// @ts-ignore
import style from './app-8705908111386319.component.scss?inline';

/**
 * COMPONENT: 'app-8705908111386319'
 */

export const App8705908111386319Component = new Component({
  name: 'app-8705908111386319',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App912387701875181Component,
App1980853776503033Component,
App7074584132856455Component,
App5819392202819217Component,
App8458792715388819Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
