import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2126768489308701Component } from "./components/app-2126768489308701/app-2126768489308701.component";
import { App8580608671148949Component } from "./components/app-8580608671148949/app-8580608671148949.component";
import { App3190557883962927Component } from "./components/app-3190557883962927/app-3190557883962927.component";
import { App6832116597262099Component } from "./components/app-6832116597262099/app-6832116597262099.component";
import { App5613350486714463Component } from "./components/app-5613350486714463/app-5613350486714463.component";

// @ts-ignore
import html from './app-2274057491779465.component.html?raw';
// @ts-ignore
import style from './app-2274057491779465.component.scss?inline';

/**
 * COMPONENT: 'app-2274057491779465'
 */

export const App2274057491779465Component = new Component({
  name: 'app-2274057491779465',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2126768489308701Component,
App8580608671148949Component,
App3190557883962927Component,
App6832116597262099Component,
App5613350486714463Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
