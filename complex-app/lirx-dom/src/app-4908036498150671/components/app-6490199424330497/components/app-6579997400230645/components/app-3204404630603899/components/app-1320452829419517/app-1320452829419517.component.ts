import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7090967798811181Component } from "./components/app-7090967798811181/app-7090967798811181.component";
import { App2293284555255463Component } from "./components/app-2293284555255463/app-2293284555255463.component";
import { App7817334762940379Component } from "./components/app-7817334762940379/app-7817334762940379.component";
import { App8589371326806435Component } from "./components/app-8589371326806435/app-8589371326806435.component";
import { App7106209030227109Component } from "./components/app-7106209030227109/app-7106209030227109.component";

// @ts-ignore
import html from './app-1320452829419517.component.html?raw';
// @ts-ignore
import style from './app-1320452829419517.component.scss?inline';

/**
 * COMPONENT: 'app-1320452829419517'
 */

export const App1320452829419517Component = new Component({
  name: 'app-1320452829419517',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7090967798811181Component,
App2293284555255463Component,
App7817334762940379Component,
App8589371326806435Component,
App7106209030227109Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
