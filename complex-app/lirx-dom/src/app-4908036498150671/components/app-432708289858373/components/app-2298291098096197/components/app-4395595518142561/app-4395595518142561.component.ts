import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8470450907825527Component } from "./components/app-8470450907825527/app-8470450907825527.component";
import { App2931257641526123Component } from "./components/app-2931257641526123/app-2931257641526123.component";
import { App5943997527168137Component } from "./components/app-5943997527168137/app-5943997527168137.component";
import { App8601754520409303Component } from "./components/app-8601754520409303/app-8601754520409303.component";
import { App4018507942089233Component } from "./components/app-4018507942089233/app-4018507942089233.component";

// @ts-ignore
import html from './app-4395595518142561.component.html?raw';
// @ts-ignore
import style from './app-4395595518142561.component.scss?inline';

/**
 * COMPONENT: 'app-4395595518142561'
 */

export const App4395595518142561Component = new Component({
  name: 'app-4395595518142561',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8470450907825527Component,
App2931257641526123Component,
App5943997527168137Component,
App8601754520409303Component,
App4018507942089233Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
