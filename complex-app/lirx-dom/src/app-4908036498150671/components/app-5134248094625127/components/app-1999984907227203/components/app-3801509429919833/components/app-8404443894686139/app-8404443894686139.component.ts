import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1557268224012733Component } from "./components/app-1557268224012733/app-1557268224012733.component";
import { App7784775460277103Component } from "./components/app-7784775460277103/app-7784775460277103.component";
import { App3502312368799339Component } from "./components/app-3502312368799339/app-3502312368799339.component";
import { App5446993640347145Component } from "./components/app-5446993640347145/app-5446993640347145.component";
import { App5521379527878345Component } from "./components/app-5521379527878345/app-5521379527878345.component";

// @ts-ignore
import html from './app-8404443894686139.component.html?raw';
// @ts-ignore
import style from './app-8404443894686139.component.scss?inline';

/**
 * COMPONENT: 'app-8404443894686139'
 */

export const App8404443894686139Component = new Component({
  name: 'app-8404443894686139',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1557268224012733Component,
App7784775460277103Component,
App3502312368799339Component,
App5446993640347145Component,
App5521379527878345Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
