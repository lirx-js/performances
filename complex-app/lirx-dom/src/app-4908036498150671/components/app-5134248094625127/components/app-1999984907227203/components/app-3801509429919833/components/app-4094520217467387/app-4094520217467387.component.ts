import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6613759742921725Component } from "./components/app-6613759742921725/app-6613759742921725.component";
import { App5942234789805345Component } from "./components/app-5942234789805345/app-5942234789805345.component";
import { App7799984672642011Component } from "./components/app-7799984672642011/app-7799984672642011.component";
import { App4046142692860143Component } from "./components/app-4046142692860143/app-4046142692860143.component";
import { App7305589453172025Component } from "./components/app-7305589453172025/app-7305589453172025.component";

// @ts-ignore
import html from './app-4094520217467387.component.html?raw';
// @ts-ignore
import style from './app-4094520217467387.component.scss?inline';

/**
 * COMPONENT: 'app-4094520217467387'
 */

export const App4094520217467387Component = new Component({
  name: 'app-4094520217467387',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6613759742921725Component,
App5942234789805345Component,
App7799984672642011Component,
App4046142692860143Component,
App7305589453172025Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
