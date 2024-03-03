import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1158890533388639Component } from "./components/app-1158890533388639/app-1158890533388639.component";
import { App1072877872340145Component } from "./components/app-1072877872340145/app-1072877872340145.component";
import { App1513205115586845Component } from "./components/app-1513205115586845/app-1513205115586845.component";
import { App4928686203220041Component } from "./components/app-4928686203220041/app-4928686203220041.component";
import { App7442625836065029Component } from "./components/app-7442625836065029/app-7442625836065029.component";

// @ts-ignore
import html from './app-3353709115948311.component.html?raw';
// @ts-ignore
import style from './app-3353709115948311.component.scss?inline';

/**
 * COMPONENT: 'app-3353709115948311'
 */

export const App3353709115948311Component = new Component({
  name: 'app-3353709115948311',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1158890533388639Component,
App1072877872340145Component,
App1513205115586845Component,
App4928686203220041Component,
App7442625836065029Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
