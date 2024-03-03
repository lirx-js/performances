import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5149239786694461Component } from "./components/app-5149239786694461/app-5149239786694461.component";
import { App3700464503541309Component } from "./components/app-3700464503541309/app-3700464503541309.component";
import { App8732118424669271Component } from "./components/app-8732118424669271/app-8732118424669271.component";
import { App2269944781842901Component } from "./components/app-2269944781842901/app-2269944781842901.component";
import { App681345743186859Component } from "./components/app-681345743186859/app-681345743186859.component";

// @ts-ignore
import html from './app-7723909710286827.component.html?raw';
// @ts-ignore
import style from './app-7723909710286827.component.scss?inline';

/**
 * COMPONENT: 'app-7723909710286827'
 */

export const App7723909710286827Component = new Component({
  name: 'app-7723909710286827',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5149239786694461Component,
App3700464503541309Component,
App8732118424669271Component,
App2269944781842901Component,
App681345743186859Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
