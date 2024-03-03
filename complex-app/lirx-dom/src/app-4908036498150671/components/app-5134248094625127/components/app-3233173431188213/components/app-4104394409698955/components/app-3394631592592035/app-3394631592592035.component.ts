import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3587421461102807Component } from "./components/app-3587421461102807/app-3587421461102807.component";
import { App8995732741198595Component } from "./components/app-8995732741198595/app-8995732741198595.component";
import { App8137021151734731Component } from "./components/app-8137021151734731/app-8137021151734731.component";
import { App6200233750177795Component } from "./components/app-6200233750177795/app-6200233750177795.component";
import { App7798940711073097Component } from "./components/app-7798940711073097/app-7798940711073097.component";

// @ts-ignore
import html from './app-3394631592592035.component.html?raw';
// @ts-ignore
import style from './app-3394631592592035.component.scss?inline';

/**
 * COMPONENT: 'app-3394631592592035'
 */

export const App3394631592592035Component = new Component({
  name: 'app-3394631592592035',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3587421461102807Component,
App8995732741198595Component,
App8137021151734731Component,
App6200233750177795Component,
App7798940711073097Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
