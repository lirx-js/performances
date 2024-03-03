import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App286941324686657Component } from "./components/app-286941324686657/app-286941324686657.component";
import { App4278375589347291Component } from "./components/app-4278375589347291/app-4278375589347291.component";
import { App7508133953313269Component } from "./components/app-7508133953313269/app-7508133953313269.component";
import { App1018275207268473Component } from "./components/app-1018275207268473/app-1018275207268473.component";
import { App7932558880286891Component } from "./components/app-7932558880286891/app-7932558880286891.component";

// @ts-ignore
import html from './app-6381721998740251.component.html?raw';
// @ts-ignore
import style from './app-6381721998740251.component.scss?inline';

/**
 * COMPONENT: 'app-6381721998740251'
 */

export const App6381721998740251Component = new Component({
  name: 'app-6381721998740251',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App286941324686657Component,
App4278375589347291Component,
App7508133953313269Component,
App1018275207268473Component,
App7932558880286891Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
