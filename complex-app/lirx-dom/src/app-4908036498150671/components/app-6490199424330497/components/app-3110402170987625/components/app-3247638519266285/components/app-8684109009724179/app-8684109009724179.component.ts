import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App975724133894565Component } from "./components/app-975724133894565/app-975724133894565.component";
import { App3692731837156985Component } from "./components/app-3692731837156985/app-3692731837156985.component";
import { App3234179263832267Component } from "./components/app-3234179263832267/app-3234179263832267.component";
import { App2956725712174209Component } from "./components/app-2956725712174209/app-2956725712174209.component";
import { App3474600009200615Component } from "./components/app-3474600009200615/app-3474600009200615.component";

// @ts-ignore
import html from './app-8684109009724179.component.html?raw';
// @ts-ignore
import style from './app-8684109009724179.component.scss?inline';

/**
 * COMPONENT: 'app-8684109009724179'
 */

export const App8684109009724179Component = new Component({
  name: 'app-8684109009724179',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App975724133894565Component,
App3692731837156985Component,
App3234179263832267Component,
App2956725712174209Component,
App3474600009200615Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
