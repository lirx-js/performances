import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5719634522628149Component } from "./components/app-5719634522628149/app-5719634522628149.component";
import { App2506479089844659Component } from "./components/app-2506479089844659/app-2506479089844659.component";
import { App2028955374813143Component } from "./components/app-2028955374813143/app-2028955374813143.component";
import { App1836404190554385Component } from "./components/app-1836404190554385/app-1836404190554385.component";
import { App8358032876048159Component } from "./components/app-8358032876048159/app-8358032876048159.component";

// @ts-ignore
import html from './app-164162394955883.component.html?raw';
// @ts-ignore
import style from './app-164162394955883.component.scss?inline';

/**
 * COMPONENT: 'app-164162394955883'
 */

export const App164162394955883Component = new Component({
  name: 'app-164162394955883',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5719634522628149Component,
App2506479089844659Component,
App2028955374813143Component,
App1836404190554385Component,
App8358032876048159Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
