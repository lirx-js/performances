import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8643520751521911Component } from "./components/app-8643520751521911/app-8643520751521911.component";
import { App3052063806729673Component } from "./components/app-3052063806729673/app-3052063806729673.component";
import { App7578474577194153Component } from "./components/app-7578474577194153/app-7578474577194153.component";
import { App1786249732405921Component } from "./components/app-1786249732405921/app-1786249732405921.component";
import { App6776899129771589Component } from "./components/app-6776899129771589/app-6776899129771589.component";

// @ts-ignore
import html from './app-2787211244039609.component.html?raw';
// @ts-ignore
import style from './app-2787211244039609.component.scss?inline';

/**
 * COMPONENT: 'app-2787211244039609'
 */

export const App2787211244039609Component = new Component({
  name: 'app-2787211244039609',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8643520751521911Component,
App3052063806729673Component,
App7578474577194153Component,
App1786249732405921Component,
App6776899129771589Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
