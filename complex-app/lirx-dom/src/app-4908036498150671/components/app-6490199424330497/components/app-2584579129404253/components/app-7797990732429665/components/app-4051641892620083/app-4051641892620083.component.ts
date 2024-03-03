import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4078381613911831Component } from "./components/app-4078381613911831/app-4078381613911831.component";
import { App8681212270634187Component } from "./components/app-8681212270634187/app-8681212270634187.component";
import { App2520369231369935Component } from "./components/app-2520369231369935/app-2520369231369935.component";
import { App5188504247750059Component } from "./components/app-5188504247750059/app-5188504247750059.component";
import { App3473014399707447Component } from "./components/app-3473014399707447/app-3473014399707447.component";

// @ts-ignore
import html from './app-4051641892620083.component.html?raw';
// @ts-ignore
import style from './app-4051641892620083.component.scss?inline';

/**
 * COMPONENT: 'app-4051641892620083'
 */

export const App4051641892620083Component = new Component({
  name: 'app-4051641892620083',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4078381613911831Component,
App8681212270634187Component,
App2520369231369935Component,
App5188504247750059Component,
App3473014399707447Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
