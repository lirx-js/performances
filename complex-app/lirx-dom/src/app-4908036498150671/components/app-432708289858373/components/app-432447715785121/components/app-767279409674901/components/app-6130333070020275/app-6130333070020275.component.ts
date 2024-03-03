import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7544607711057189Component } from "./components/app-7544607711057189/app-7544607711057189.component";
import { App6126764230968983Component } from "./components/app-6126764230968983/app-6126764230968983.component";
import { App1591753892980349Component } from "./components/app-1591753892980349/app-1591753892980349.component";
import { App7415489013171335Component } from "./components/app-7415489013171335/app-7415489013171335.component";
import { App1869494888126611Component } from "./components/app-1869494888126611/app-1869494888126611.component";

// @ts-ignore
import html from './app-6130333070020275.component.html?raw';
// @ts-ignore
import style from './app-6130333070020275.component.scss?inline';

/**
 * COMPONENT: 'app-6130333070020275'
 */

export const App6130333070020275Component = new Component({
  name: 'app-6130333070020275',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7544607711057189Component,
App6126764230968983Component,
App1591753892980349Component,
App7415489013171335Component,
App1869494888126611Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
