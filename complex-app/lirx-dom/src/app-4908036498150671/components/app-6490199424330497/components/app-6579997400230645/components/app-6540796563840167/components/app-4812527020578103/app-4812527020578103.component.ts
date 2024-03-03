import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4715233836861423Component } from "./components/app-4715233836861423/app-4715233836861423.component";
import { App8431718605795195Component } from "./components/app-8431718605795195/app-8431718605795195.component";
import { App7662750677056071Component } from "./components/app-7662750677056071/app-7662750677056071.component";
import { App2480201275814351Component } from "./components/app-2480201275814351/app-2480201275814351.component";
import { App5054355162317209Component } from "./components/app-5054355162317209/app-5054355162317209.component";

// @ts-ignore
import html from './app-4812527020578103.component.html?raw';
// @ts-ignore
import style from './app-4812527020578103.component.scss?inline';

/**
 * COMPONENT: 'app-4812527020578103'
 */

export const App4812527020578103Component = new Component({
  name: 'app-4812527020578103',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4715233836861423Component,
App8431718605795195Component,
App7662750677056071Component,
App2480201275814351Component,
App5054355162317209Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
