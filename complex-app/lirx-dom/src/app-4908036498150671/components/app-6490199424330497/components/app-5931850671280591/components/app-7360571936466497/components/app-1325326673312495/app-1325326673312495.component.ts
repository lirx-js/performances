import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3476339190565751Component } from "./components/app-3476339190565751/app-3476339190565751.component";
import { App3012597515175715Component } from "./components/app-3012597515175715/app-3012597515175715.component";
import { App2602829095767243Component } from "./components/app-2602829095767243/app-2602829095767243.component";
import { App5569545558004989Component } from "./components/app-5569545558004989/app-5569545558004989.component";
import { App385812471588461Component } from "./components/app-385812471588461/app-385812471588461.component";

// @ts-ignore
import html from './app-1325326673312495.component.html?raw';
// @ts-ignore
import style from './app-1325326673312495.component.scss?inline';

/**
 * COMPONENT: 'app-1325326673312495'
 */

export const App1325326673312495Component = new Component({
  name: 'app-1325326673312495',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3476339190565751Component,
App3012597515175715Component,
App2602829095767243Component,
App5569545558004989Component,
App385812471588461Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
