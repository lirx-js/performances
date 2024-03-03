import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1538052002935945Component } from "./components/app-1538052002935945/app-1538052002935945.component";
import { App6623009557302489Component } from "./components/app-6623009557302489/app-6623009557302489.component";
import { App6309748709084173Component } from "./components/app-6309748709084173/app-6309748709084173.component";
import { App4346923866693353Component } from "./components/app-4346923866693353/app-4346923866693353.component";
import { App8455946670724329Component } from "./components/app-8455946670724329/app-8455946670724329.component";

// @ts-ignore
import html from './app-7679933280244041.component.html?raw';
// @ts-ignore
import style from './app-7679933280244041.component.scss?inline';

/**
 * COMPONENT: 'app-7679933280244041'
 */

export const App7679933280244041Component = new Component({
  name: 'app-7679933280244041',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1538052002935945Component,
App6623009557302489Component,
App6309748709084173Component,
App4346923866693353Component,
App8455946670724329Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
