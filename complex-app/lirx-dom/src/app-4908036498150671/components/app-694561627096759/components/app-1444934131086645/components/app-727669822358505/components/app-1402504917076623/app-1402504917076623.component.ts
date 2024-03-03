import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App555455490221029Component } from "./components/app-555455490221029/app-555455490221029.component";
import { App3666229450091009Component } from "./components/app-3666229450091009/app-3666229450091009.component";
import { App6130338664383137Component } from "./components/app-6130338664383137/app-6130338664383137.component";
import { App1985862948588527Component } from "./components/app-1985862948588527/app-1985862948588527.component";
import { App6390090074215743Component } from "./components/app-6390090074215743/app-6390090074215743.component";

// @ts-ignore
import html from './app-1402504917076623.component.html?raw';
// @ts-ignore
import style from './app-1402504917076623.component.scss?inline';

/**
 * COMPONENT: 'app-1402504917076623'
 */

export const App1402504917076623Component = new Component({
  name: 'app-1402504917076623',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App555455490221029Component,
App3666229450091009Component,
App6130338664383137Component,
App1985862948588527Component,
App6390090074215743Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
