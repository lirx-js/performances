import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4545330930058431Component } from "./components/app-4545330930058431/app-4545330930058431.component";
import { App679514075295087Component } from "./components/app-679514075295087/app-679514075295087.component";
import { App1990441033231065Component } from "./components/app-1990441033231065/app-1990441033231065.component";
import { App3962575865214819Component } from "./components/app-3962575865214819/app-3962575865214819.component";
import { App4114170903060063Component } from "./components/app-4114170903060063/app-4114170903060063.component";

// @ts-ignore
import html from './app-3313982500106553.component.html?raw';
// @ts-ignore
import style from './app-3313982500106553.component.scss?inline';

/**
 * COMPONENT: 'app-3313982500106553'
 */

export const App3313982500106553Component = new Component({
  name: 'app-3313982500106553',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4545330930058431Component,
App679514075295087Component,
App1990441033231065Component,
App3962575865214819Component,
App4114170903060063Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
