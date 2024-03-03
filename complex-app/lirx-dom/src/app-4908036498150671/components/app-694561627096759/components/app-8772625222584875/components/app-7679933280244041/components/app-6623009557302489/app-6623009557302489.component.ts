import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5786407553758491Component } from "./components/app-5786407553758491/app-5786407553758491.component";
import { App1794137941459265Component } from "./components/app-1794137941459265/app-1794137941459265.component";
import { App2089222072351339Component } from "./components/app-2089222072351339/app-2089222072351339.component";
import { App1978363076501353Component } from "./components/app-1978363076501353/app-1978363076501353.component";
import { App7981676900667221Component } from "./components/app-7981676900667221/app-7981676900667221.component";

// @ts-ignore
import html from './app-6623009557302489.component.html?raw';
// @ts-ignore
import style from './app-6623009557302489.component.scss?inline';

/**
 * COMPONENT: 'app-6623009557302489'
 */

export const App6623009557302489Component = new Component({
  name: 'app-6623009557302489',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5786407553758491Component,
App1794137941459265Component,
App2089222072351339Component,
App1978363076501353Component,
App7981676900667221Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
