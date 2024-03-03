import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6755482536746783Component } from "./components/app-6755482536746783/app-6755482536746783.component";
import { App8014927460210227Component } from "./components/app-8014927460210227/app-8014927460210227.component";
import { App1171712186017461Component } from "./components/app-1171712186017461/app-1171712186017461.component";
import { App3040731169772263Component } from "./components/app-3040731169772263/app-3040731169772263.component";
import { App564483689455383Component } from "./components/app-564483689455383/app-564483689455383.component";

// @ts-ignore
import html from './app-6875043444247715.component.html?raw';
// @ts-ignore
import style from './app-6875043444247715.component.scss?inline';

/**
 * COMPONENT: 'app-6875043444247715'
 */

export const App6875043444247715Component = new Component({
  name: 'app-6875043444247715',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6755482536746783Component,
App8014927460210227Component,
App1171712186017461Component,
App3040731169772263Component,
App564483689455383Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
