import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8980571718183397Component } from "./components/app-8980571718183397/app-8980571718183397.component";
import { App2292244471272219Component } from "./components/app-2292244471272219/app-2292244471272219.component";
import { App3027116472163365Component } from "./components/app-3027116472163365/app-3027116472163365.component";
import { App6791430819959803Component } from "./components/app-6791430819959803/app-6791430819959803.component";
import { App1660332050215469Component } from "./components/app-1660332050215469/app-1660332050215469.component";

// @ts-ignore
import html from './app-6608534333755221.component.html?raw';
// @ts-ignore
import style from './app-6608534333755221.component.scss?inline';

/**
 * COMPONENT: 'app-6608534333755221'
 */

export const App6608534333755221Component = new Component({
  name: 'app-6608534333755221',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8980571718183397Component,
App2292244471272219Component,
App3027116472163365Component,
App6791430819959803Component,
App1660332050215469Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
