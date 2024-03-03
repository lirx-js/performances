import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2711847423504621Component } from "./components/app-2711847423504621/app-2711847423504621.component";
import { App885895081195585Component } from "./components/app-885895081195585/app-885895081195585.component";
import { App4919058121883965Component } from "./components/app-4919058121883965/app-4919058121883965.component";
import { App6749266417292197Component } from "./components/app-6749266417292197/app-6749266417292197.component";
import { App4156114501404111Component } from "./components/app-4156114501404111/app-4156114501404111.component";

// @ts-ignore
import html from './app-2331387670642821.component.html?raw';
// @ts-ignore
import style from './app-2331387670642821.component.scss?inline';

/**
 * COMPONENT: 'app-2331387670642821'
 */

export const App2331387670642821Component = new Component({
  name: 'app-2331387670642821',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2711847423504621Component,
App885895081195585Component,
App4919058121883965Component,
App6749266417292197Component,
App4156114501404111Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
