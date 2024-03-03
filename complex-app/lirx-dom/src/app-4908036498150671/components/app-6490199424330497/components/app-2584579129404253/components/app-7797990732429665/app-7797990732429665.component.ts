import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4051641892620083Component } from "./components/app-4051641892620083/app-4051641892620083.component";
import { App935303130244479Component } from "./components/app-935303130244479/app-935303130244479.component";
import { App7949100559642639Component } from "./components/app-7949100559642639/app-7949100559642639.component";
import { App3902610443978921Component } from "./components/app-3902610443978921/app-3902610443978921.component";
import { App8001178159691861Component } from "./components/app-8001178159691861/app-8001178159691861.component";

// @ts-ignore
import html from './app-7797990732429665.component.html?raw';
// @ts-ignore
import style from './app-7797990732429665.component.scss?inline';

/**
 * COMPONENT: 'app-7797990732429665'
 */

export const App7797990732429665Component = new Component({
  name: 'app-7797990732429665',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4051641892620083Component,
App935303130244479Component,
App7949100559642639Component,
App3902610443978921Component,
App8001178159691861Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
