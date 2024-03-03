import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5335516385987609Component } from "./components/app-5335516385987609/app-5335516385987609.component";
import { App2893209230447191Component } from "./components/app-2893209230447191/app-2893209230447191.component";
import { App7946883650608191Component } from "./components/app-7946883650608191/app-7946883650608191.component";
import { App2339624318283151Component } from "./components/app-2339624318283151/app-2339624318283151.component";
import { App3713994360303485Component } from "./components/app-3713994360303485/app-3713994360303485.component";

// @ts-ignore
import html from './app-7471496745602509.component.html?raw';
// @ts-ignore
import style from './app-7471496745602509.component.scss?inline';

/**
 * COMPONENT: 'app-7471496745602509'
 */

export const App7471496745602509Component = new Component({
  name: 'app-7471496745602509',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5335516385987609Component,
App2893209230447191Component,
App7946883650608191Component,
App2339624318283151Component,
App3713994360303485Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
