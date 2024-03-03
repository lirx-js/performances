import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6062328414959545Component } from "./components/app-6062328414959545/app-6062328414959545.component";
import { App8760551634198681Component } from "./components/app-8760551634198681/app-8760551634198681.component";
import { App3637310250796331Component } from "./components/app-3637310250796331/app-3637310250796331.component";
import { App5377026270887607Component } from "./components/app-5377026270887607/app-5377026270887607.component";
import { App5116668377840935Component } from "./components/app-5116668377840935/app-5116668377840935.component";

// @ts-ignore
import html from './app-3829263975460761.component.html?raw';
// @ts-ignore
import style from './app-3829263975460761.component.scss?inline';

/**
 * COMPONENT: 'app-3829263975460761'
 */

export const App3829263975460761Component = new Component({
  name: 'app-3829263975460761',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6062328414959545Component,
App8760551634198681Component,
App3637310250796331Component,
App5377026270887607Component,
App5116668377840935Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
