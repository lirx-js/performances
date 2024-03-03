import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8093098266456959Component } from "./components/app-8093098266456959/app-8093098266456959.component";
import { App8389686461861395Component } from "./components/app-8389686461861395/app-8389686461861395.component";
import { App6109667681660801Component } from "./components/app-6109667681660801/app-6109667681660801.component";
import { App1878053103128359Component } from "./components/app-1878053103128359/app-1878053103128359.component";
import { App2866738105209391Component } from "./components/app-2866738105209391/app-2866738105209391.component";

// @ts-ignore
import html from './app-2695628176609773.component.html?raw';
// @ts-ignore
import style from './app-2695628176609773.component.scss?inline';

/**
 * COMPONENT: 'app-2695628176609773'
 */

export const App2695628176609773Component = new Component({
  name: 'app-2695628176609773',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8093098266456959Component,
App8389686461861395Component,
App6109667681660801Component,
App1878053103128359Component,
App2866738105209391Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
