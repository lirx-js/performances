import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8609753832983855Component } from "./components/app-8609753832983855/app-8609753832983855.component";
import { App7938198464979321Component } from "./components/app-7938198464979321/app-7938198464979321.component";
import { App5898209543239623Component } from "./components/app-5898209543239623/app-5898209543239623.component";
import { App2617091129067171Component } from "./components/app-2617091129067171/app-2617091129067171.component";
import { App6615476192008009Component } from "./components/app-6615476192008009/app-6615476192008009.component";

// @ts-ignore
import html from './app-4346923866693353.component.html?raw';
// @ts-ignore
import style from './app-4346923866693353.component.scss?inline';

/**
 * COMPONENT: 'app-4346923866693353'
 */

export const App4346923866693353Component = new Component({
  name: 'app-4346923866693353',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8609753832983855Component,
App7938198464979321Component,
App5898209543239623Component,
App2617091129067171Component,
App6615476192008009Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
