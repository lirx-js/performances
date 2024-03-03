import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App308460718931557Component } from "./components/app-308460718931557/app-308460718931557.component";
import { App858370717469889Component } from "./components/app-858370717469889/app-858370717469889.component";
import { App3855461670273309Component } from "./components/app-3855461670273309/app-3855461670273309.component";
import { App4954447684324855Component } from "./components/app-4954447684324855/app-4954447684324855.component";
import { App2987321241167543Component } from "./components/app-2987321241167543/app-2987321241167543.component";

// @ts-ignore
import html from './app-788914917384315.component.html?raw';
// @ts-ignore
import style from './app-788914917384315.component.scss?inline';

/**
 * COMPONENT: 'app-788914917384315'
 */

export const App788914917384315Component = new Component({
  name: 'app-788914917384315',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App308460718931557Component,
App858370717469889Component,
App3855461670273309Component,
App4954447684324855Component,
App2987321241167543Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
