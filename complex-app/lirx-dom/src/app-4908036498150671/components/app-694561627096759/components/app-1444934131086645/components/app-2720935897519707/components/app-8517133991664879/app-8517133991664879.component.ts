import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6461370312226035Component } from "./components/app-6461370312226035/app-6461370312226035.component";
import { App3840952915924535Component } from "./components/app-3840952915924535/app-3840952915924535.component";
import { App5354693847922661Component } from "./components/app-5354693847922661/app-5354693847922661.component";
import { App8526184423068187Component } from "./components/app-8526184423068187/app-8526184423068187.component";
import { App4333987146390759Component } from "./components/app-4333987146390759/app-4333987146390759.component";

// @ts-ignore
import html from './app-8517133991664879.component.html?raw';
// @ts-ignore
import style from './app-8517133991664879.component.scss?inline';

/**
 * COMPONENT: 'app-8517133991664879'
 */

export const App8517133991664879Component = new Component({
  name: 'app-8517133991664879',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6461370312226035Component,
App3840952915924535Component,
App5354693847922661Component,
App8526184423068187Component,
App4333987146390759Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
