import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1101252883393187Component } from "./components/app-1101252883393187/app-1101252883393187.component";
import { App7404242172823507Component } from "./components/app-7404242172823507/app-7404242172823507.component";
import { App2006795502311795Component } from "./components/app-2006795502311795/app-2006795502311795.component";
import { App304175908339093Component } from "./components/app-304175908339093/app-304175908339093.component";
import { App2728077847773695Component } from "./components/app-2728077847773695/app-2728077847773695.component";

// @ts-ignore
import html from './app-1656878075371887.component.html?raw';
// @ts-ignore
import style from './app-1656878075371887.component.scss?inline';

/**
 * COMPONENT: 'app-1656878075371887'
 */

export const App1656878075371887Component = new Component({
  name: 'app-1656878075371887',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1101252883393187Component,
App7404242172823507Component,
App2006795502311795Component,
App304175908339093Component,
App2728077847773695Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
