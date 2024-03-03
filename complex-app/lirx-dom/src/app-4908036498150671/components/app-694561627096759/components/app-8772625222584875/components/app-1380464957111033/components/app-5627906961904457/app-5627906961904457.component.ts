import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1567027968833337Component } from "./components/app-1567027968833337/app-1567027968833337.component";
import { App2614706267978547Component } from "./components/app-2614706267978547/app-2614706267978547.component";
import { App4956384651241363Component } from "./components/app-4956384651241363/app-4956384651241363.component";
import { App4030880176126729Component } from "./components/app-4030880176126729/app-4030880176126729.component";
import { App7237989700628727Component } from "./components/app-7237989700628727/app-7237989700628727.component";

// @ts-ignore
import html from './app-5627906961904457.component.html?raw';
// @ts-ignore
import style from './app-5627906961904457.component.scss?inline';

/**
 * COMPONENT: 'app-5627906961904457'
 */

export const App5627906961904457Component = new Component({
  name: 'app-5627906961904457',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1567027968833337Component,
App2614706267978547Component,
App4956384651241363Component,
App4030880176126729Component,
App7237989700628727Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
