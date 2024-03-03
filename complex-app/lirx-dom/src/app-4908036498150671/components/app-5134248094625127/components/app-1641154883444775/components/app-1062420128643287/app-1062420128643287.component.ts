import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2163519918659297Component } from "./components/app-2163519918659297/app-2163519918659297.component";
import { App2331387670642821Component } from "./components/app-2331387670642821/app-2331387670642821.component";
import { App8207830815529367Component } from "./components/app-8207830815529367/app-8207830815529367.component";
import { App4891651145538843Component } from "./components/app-4891651145538843/app-4891651145538843.component";
import { App6175706706628701Component } from "./components/app-6175706706628701/app-6175706706628701.component";

// @ts-ignore
import html from './app-1062420128643287.component.html?raw';
// @ts-ignore
import style from './app-1062420128643287.component.scss?inline';

/**
 * COMPONENT: 'app-1062420128643287'
 */

export const App1062420128643287Component = new Component({
  name: 'app-1062420128643287',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2163519918659297Component,
App2331387670642821Component,
App8207830815529367Component,
App4891651145538843Component,
App6175706706628701Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
