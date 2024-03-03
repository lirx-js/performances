import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4708156467518645Component } from "./components/app-4708156467518645/app-4708156467518645.component";
import { App4239843346778887Component } from "./components/app-4239843346778887/app-4239843346778887.component";
import { App2301549209341223Component } from "./components/app-2301549209341223/app-2301549209341223.component";
import { App8536595172801129Component } from "./components/app-8536595172801129/app-8536595172801129.component";
import { App8742343970892525Component } from "./components/app-8742343970892525/app-8742343970892525.component";

// @ts-ignore
import html from './app-1655148336246027.component.html?raw';
// @ts-ignore
import style from './app-1655148336246027.component.scss?inline';

/**
 * COMPONENT: 'app-1655148336246027'
 */

export const App1655148336246027Component = new Component({
  name: 'app-1655148336246027',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4708156467518645Component,
App4239843346778887Component,
App2301549209341223Component,
App8536595172801129Component,
App8742343970892525Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
