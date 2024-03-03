import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4609261347360271Component } from "./components/app-4609261347360271/app-4609261347360271.component";
import { App4103909254313309Component } from "./components/app-4103909254313309/app-4103909254313309.component";
import { App4697965629888369Component } from "./components/app-4697965629888369/app-4697965629888369.component";
import { App2769208884874335Component } from "./components/app-2769208884874335/app-2769208884874335.component";
import { App4738868597706529Component } from "./components/app-4738868597706529/app-4738868597706529.component";

// @ts-ignore
import html from './app-5719634522628149.component.html?raw';
// @ts-ignore
import style from './app-5719634522628149.component.scss?inline';

/**
 * COMPONENT: 'app-5719634522628149'
 */

export const App5719634522628149Component = new Component({
  name: 'app-5719634522628149',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4609261347360271Component,
App4103909254313309Component,
App4697965629888369Component,
App2769208884874335Component,
App4738868597706529Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
