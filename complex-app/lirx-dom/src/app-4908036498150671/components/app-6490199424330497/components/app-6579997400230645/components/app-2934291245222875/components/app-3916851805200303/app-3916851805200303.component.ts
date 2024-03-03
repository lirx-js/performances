import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3677378575991671Component } from "./components/app-3677378575991671/app-3677378575991671.component";
import { App5514943744587173Component } from "./components/app-5514943744587173/app-5514943744587173.component";
import { App6264737302962229Component } from "./components/app-6264737302962229/app-6264737302962229.component";
import { App8925769707751129Component } from "./components/app-8925769707751129/app-8925769707751129.component";
import { App1663053619365503Component } from "./components/app-1663053619365503/app-1663053619365503.component";

// @ts-ignore
import html from './app-3916851805200303.component.html?raw';
// @ts-ignore
import style from './app-3916851805200303.component.scss?inline';

/**
 * COMPONENT: 'app-3916851805200303'
 */

export const App3916851805200303Component = new Component({
  name: 'app-3916851805200303',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3677378575991671Component,
App5514943744587173Component,
App6264737302962229Component,
App8925769707751129Component,
App1663053619365503Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
