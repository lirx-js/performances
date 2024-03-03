import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7079071643765047Component } from "./components/app-7079071643765047/app-7079071643765047.component";
import { App1128766865829795Component } from "./components/app-1128766865829795/app-1128766865829795.component";
import { App6354642878262427Component } from "./components/app-6354642878262427/app-6354642878262427.component";
import { App186741494484211Component } from "./components/app-186741494484211/app-186741494484211.component";
import { App2936756779963051Component } from "./components/app-2936756779963051/app-2936756779963051.component";

// @ts-ignore
import html from './app-8776093967627661.component.html?raw';
// @ts-ignore
import style from './app-8776093967627661.component.scss?inline';

/**
 * COMPONENT: 'app-8776093967627661'
 */

export const App8776093967627661Component = new Component({
  name: 'app-8776093967627661',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7079071643765047Component,
App1128766865829795Component,
App6354642878262427Component,
App186741494484211Component,
App2936756779963051Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
