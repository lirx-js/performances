import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1322777671982999Component } from "./components/app-1322777671982999/app-1322777671982999.component";
import { App5133991413139939Component } from "./components/app-5133991413139939/app-5133991413139939.component";
import { App2117011426932627Component } from "./components/app-2117011426932627/app-2117011426932627.component";
import { App5649844850223347Component } from "./components/app-5649844850223347/app-5649844850223347.component";
import { App7517316208535801Component } from "./components/app-7517316208535801/app-7517316208535801.component";

// @ts-ignore
import html from './app-6109667681660801.component.html?raw';
// @ts-ignore
import style from './app-6109667681660801.component.scss?inline';

/**
 * COMPONENT: 'app-6109667681660801'
 */

export const App6109667681660801Component = new Component({
  name: 'app-6109667681660801',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1322777671982999Component,
App5133991413139939Component,
App2117011426932627Component,
App5649844850223347Component,
App7517316208535801Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
