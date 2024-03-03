import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1023896421223859Component } from "./components/app-1023896421223859/app-1023896421223859.component";
import { App230566005767033Component } from "./components/app-230566005767033/app-230566005767033.component";
import { App3042807488694159Component } from "./components/app-3042807488694159/app-3042807488694159.component";
import { App6688005963699041Component } from "./components/app-6688005963699041/app-6688005963699041.component";
import { App1288829276519471Component } from "./components/app-1288829276519471/app-1288829276519471.component";

// @ts-ignore
import html from './app-2566192496856239.component.html?raw';
// @ts-ignore
import style from './app-2566192496856239.component.scss?inline';

/**
 * COMPONENT: 'app-2566192496856239'
 */

export const App2566192496856239Component = new Component({
  name: 'app-2566192496856239',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1023896421223859Component,
App230566005767033Component,
App3042807488694159Component,
App6688005963699041Component,
App1288829276519471Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
