import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4551411710573293Component } from "./components/app-4551411710573293/app-4551411710573293.component";
import { App2368057552460673Component } from "./components/app-2368057552460673/app-2368057552460673.component";
import { App7237171357011525Component } from "./components/app-7237171357011525/app-7237171357011525.component";
import { App411447688647851Component } from "./components/app-411447688647851/app-411447688647851.component";
import { App1319903460116211Component } from "./components/app-1319903460116211/app-1319903460116211.component";

// @ts-ignore
import html from './app-5790848423896497.component.html?raw';
// @ts-ignore
import style from './app-5790848423896497.component.scss?inline';

/**
 * COMPONENT: 'app-5790848423896497'
 */

export const App5790848423896497Component = new Component({
  name: 'app-5790848423896497',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4551411710573293Component,
App2368057552460673Component,
App7237171357011525Component,
App411447688647851Component,
App1319903460116211Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
