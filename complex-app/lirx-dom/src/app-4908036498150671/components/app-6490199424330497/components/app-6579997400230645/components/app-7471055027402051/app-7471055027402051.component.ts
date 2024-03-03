import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1735494691523487Component } from "./components/app-1735494691523487/app-1735494691523487.component";
import { App2949075316664247Component } from "./components/app-2949075316664247/app-2949075316664247.component";
import { App4209336970708587Component } from "./components/app-4209336970708587/app-4209336970708587.component";
import { App5572059063362579Component } from "./components/app-5572059063362579/app-5572059063362579.component";
import { App736751345787123Component } from "./components/app-736751345787123/app-736751345787123.component";

// @ts-ignore
import html from './app-7471055027402051.component.html?raw';
// @ts-ignore
import style from './app-7471055027402051.component.scss?inline';

/**
 * COMPONENT: 'app-7471055027402051'
 */

export const App7471055027402051Component = new Component({
  name: 'app-7471055027402051',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1735494691523487Component,
App2949075316664247Component,
App4209336970708587Component,
App5572059063362579Component,
App736751345787123Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
