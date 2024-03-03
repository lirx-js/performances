import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App482927803053957Component } from "./components/app-482927803053957/app-482927803053957.component";
import { App8582260090988357Component } from "./components/app-8582260090988357/app-8582260090988357.component";
import { App5078312883847409Component } from "./components/app-5078312883847409/app-5078312883847409.component";
import { App8268552426359619Component } from "./components/app-8268552426359619/app-8268552426359619.component";
import { App6660741340255091Component } from "./components/app-6660741340255091/app-6660741340255091.component";

// @ts-ignore
import html from './app-3871693314051379.component.html?raw';
// @ts-ignore
import style from './app-3871693314051379.component.scss?inline';

/**
 * COMPONENT: 'app-3871693314051379'
 */

export const App3871693314051379Component = new Component({
  name: 'app-3871693314051379',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App482927803053957Component,
App8582260090988357Component,
App5078312883847409Component,
App8268552426359619Component,
App6660741340255091Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
