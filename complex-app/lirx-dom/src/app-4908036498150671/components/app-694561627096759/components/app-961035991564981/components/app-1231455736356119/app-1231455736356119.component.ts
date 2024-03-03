import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App792365629235163Component } from "./components/app-792365629235163/app-792365629235163.component";
import { App7423299843312087Component } from "./components/app-7423299843312087/app-7423299843312087.component";
import { App2037720933725547Component } from "./components/app-2037720933725547/app-2037720933725547.component";
import { App7183012551753055Component } from "./components/app-7183012551753055/app-7183012551753055.component";
import { App3763899346558649Component } from "./components/app-3763899346558649/app-3763899346558649.component";

// @ts-ignore
import html from './app-1231455736356119.component.html?raw';
// @ts-ignore
import style from './app-1231455736356119.component.scss?inline';

/**
 * COMPONENT: 'app-1231455736356119'
 */

export const App1231455736356119Component = new Component({
  name: 'app-1231455736356119',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App792365629235163Component,
App7423299843312087Component,
App2037720933725547Component,
App7183012551753055Component,
App3763899346558649Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
