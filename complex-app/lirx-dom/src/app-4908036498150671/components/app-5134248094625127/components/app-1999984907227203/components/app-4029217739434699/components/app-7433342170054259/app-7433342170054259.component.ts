import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7058136587116827Component } from "./components/app-7058136587116827/app-7058136587116827.component";
import { App1575257781160523Component } from "./components/app-1575257781160523/app-1575257781160523.component";
import { App3142296841443951Component } from "./components/app-3142296841443951/app-3142296841443951.component";
import { App7782508291616525Component } from "./components/app-7782508291616525/app-7782508291616525.component";
import { App2164370092025587Component } from "./components/app-2164370092025587/app-2164370092025587.component";

// @ts-ignore
import html from './app-7433342170054259.component.html?raw';
// @ts-ignore
import style from './app-7433342170054259.component.scss?inline';

/**
 * COMPONENT: 'app-7433342170054259'
 */

export const App7433342170054259Component = new Component({
  name: 'app-7433342170054259',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7058136587116827Component,
App1575257781160523Component,
App3142296841443951Component,
App7782508291616525Component,
App2164370092025587Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
