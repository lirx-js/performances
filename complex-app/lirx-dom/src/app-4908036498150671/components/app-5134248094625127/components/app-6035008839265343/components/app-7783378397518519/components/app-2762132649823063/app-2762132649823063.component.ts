import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6707917692869593Component } from "./components/app-6707917692869593/app-6707917692869593.component";
import { App4292443507137889Component } from "./components/app-4292443507137889/app-4292443507137889.component";
import { App5203725822972947Component } from "./components/app-5203725822972947/app-5203725822972947.component";
import { App4408527939789037Component } from "./components/app-4408527939789037/app-4408527939789037.component";
import { App8983840076794425Component } from "./components/app-8983840076794425/app-8983840076794425.component";

// @ts-ignore
import html from './app-2762132649823063.component.html?raw';
// @ts-ignore
import style from './app-2762132649823063.component.scss?inline';

/**
 * COMPONENT: 'app-2762132649823063'
 */

export const App2762132649823063Component = new Component({
  name: 'app-2762132649823063',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6707917692869593Component,
App4292443507137889Component,
App5203725822972947Component,
App4408527939789037Component,
App8983840076794425Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
