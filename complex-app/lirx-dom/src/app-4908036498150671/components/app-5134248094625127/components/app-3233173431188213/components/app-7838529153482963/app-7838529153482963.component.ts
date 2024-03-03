import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8182227993466885Component } from "./components/app-8182227993466885/app-8182227993466885.component";
import { App5780913326324769Component } from "./components/app-5780913326324769/app-5780913326324769.component";
import { App7793135107207203Component } from "./components/app-7793135107207203/app-7793135107207203.component";
import { App6722115566454803Component } from "./components/app-6722115566454803/app-6722115566454803.component";
import { App3353709115948311Component } from "./components/app-3353709115948311/app-3353709115948311.component";

// @ts-ignore
import html from './app-7838529153482963.component.html?raw';
// @ts-ignore
import style from './app-7838529153482963.component.scss?inline';

/**
 * COMPONENT: 'app-7838529153482963'
 */

export const App7838529153482963Component = new Component({
  name: 'app-7838529153482963',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8182227993466885Component,
App5780913326324769Component,
App7793135107207203Component,
App6722115566454803Component,
App3353709115948311Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
