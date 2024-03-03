import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7517895068015365Component } from "./components/app-7517895068015365/app-7517895068015365.component";
import { App2795850727218845Component } from "./components/app-2795850727218845/app-2795850727218845.component";
import { App3607270002188641Component } from "./components/app-3607270002188641/app-3607270002188641.component";
import { App5256593010958441Component } from "./components/app-5256593010958441/app-5256593010958441.component";
import { App1634780372631993Component } from "./components/app-1634780372631993/app-1634780372631993.component";

// @ts-ignore
import html from './app-4472632974234077.component.html?raw';
// @ts-ignore
import style from './app-4472632974234077.component.scss?inline';

/**
 * COMPONENT: 'app-4472632974234077'
 */

export const App4472632974234077Component = new Component({
  name: 'app-4472632974234077',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7517895068015365Component,
App2795850727218845Component,
App3607270002188641Component,
App5256593010958441Component,
App1634780372631993Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
