import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App69972490557757Component } from "./components/app-69972490557757/app-69972490557757.component";
import { App1457259144431591Component } from "./components/app-1457259144431591/app-1457259144431591.component";
import { App164210897461405Component } from "./components/app-164210897461405/app-164210897461405.component";
import { App5946617927622647Component } from "./components/app-5946617927622647/app-5946617927622647.component";
import { App3736042563805365Component } from "./components/app-3736042563805365/app-3736042563805365.component";

// @ts-ignore
import html from './app-2268249396619231.component.html?raw';
// @ts-ignore
import style from './app-2268249396619231.component.scss?inline';

/**
 * COMPONENT: 'app-2268249396619231'
 */

export const App2268249396619231Component = new Component({
  name: 'app-2268249396619231',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App69972490557757Component,
App1457259144431591Component,
App164210897461405Component,
App5946617927622647Component,
App3736042563805365Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
