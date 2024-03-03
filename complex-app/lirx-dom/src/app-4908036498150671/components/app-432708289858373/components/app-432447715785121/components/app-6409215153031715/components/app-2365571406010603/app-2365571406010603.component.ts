import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1747524233600161Component } from "./components/app-1747524233600161/app-1747524233600161.component";
import { App8721277398527605Component } from "./components/app-8721277398527605/app-8721277398527605.component";
import { App3910130346571699Component } from "./components/app-3910130346571699/app-3910130346571699.component";
import { App4795733709219205Component } from "./components/app-4795733709219205/app-4795733709219205.component";
import { App8171336406175805Component } from "./components/app-8171336406175805/app-8171336406175805.component";

// @ts-ignore
import html from './app-2365571406010603.component.html?raw';
// @ts-ignore
import style from './app-2365571406010603.component.scss?inline';

/**
 * COMPONENT: 'app-2365571406010603'
 */

export const App2365571406010603Component = new Component({
  name: 'app-2365571406010603',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1747524233600161Component,
App8721277398527605Component,
App3910130346571699Component,
App4795733709219205Component,
App8171336406175805Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
