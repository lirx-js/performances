import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6080410284438277Component } from "./components/app-6080410284438277/app-6080410284438277.component";
import { App4887068890329479Component } from "./components/app-4887068890329479/app-4887068890329479.component";
import { App8334813246943203Component } from "./components/app-8334813246943203/app-8334813246943203.component";
import { App1607898634233339Component } from "./components/app-1607898634233339/app-1607898634233339.component";
import { App459565579093557Component } from "./components/app-459565579093557/app-459565579093557.component";

// @ts-ignore
import html from './app-3163490624736123.component.html?raw';
// @ts-ignore
import style from './app-3163490624736123.component.scss?inline';

/**
 * COMPONENT: 'app-3163490624736123'
 */

export const App3163490624736123Component = new Component({
  name: 'app-3163490624736123',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6080410284438277Component,
App4887068890329479Component,
App8334813246943203Component,
App1607898634233339Component,
App459565579093557Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
