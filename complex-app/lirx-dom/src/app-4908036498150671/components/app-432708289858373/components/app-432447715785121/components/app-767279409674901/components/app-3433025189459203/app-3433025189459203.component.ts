import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4338757335128011Component } from "./components/app-4338757335128011/app-4338757335128011.component";
import { App1771503454969459Component } from "./components/app-1771503454969459/app-1771503454969459.component";
import { App2475372253076449Component } from "./components/app-2475372253076449/app-2475372253076449.component";
import { App7149949897496007Component } from "./components/app-7149949897496007/app-7149949897496007.component";
import { App912233422931377Component } from "./components/app-912233422931377/app-912233422931377.component";

// @ts-ignore
import html from './app-3433025189459203.component.html?raw';
// @ts-ignore
import style from './app-3433025189459203.component.scss?inline';

/**
 * COMPONENT: 'app-3433025189459203'
 */

export const App3433025189459203Component = new Component({
  name: 'app-3433025189459203',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4338757335128011Component,
App1771503454969459Component,
App2475372253076449Component,
App7149949897496007Component,
App912233422931377Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
