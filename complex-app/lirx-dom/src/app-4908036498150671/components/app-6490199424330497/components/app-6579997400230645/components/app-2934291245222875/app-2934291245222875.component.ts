import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3746976185592591Component } from "./components/app-3746976185592591/app-3746976185592591.component";
import { App8349140673503041Component } from "./components/app-8349140673503041/app-8349140673503041.component";
import { App7742875484369897Component } from "./components/app-7742875484369897/app-7742875484369897.component";
import { App8283144094518827Component } from "./components/app-8283144094518827/app-8283144094518827.component";
import { App3916851805200303Component } from "./components/app-3916851805200303/app-3916851805200303.component";

// @ts-ignore
import html from './app-2934291245222875.component.html?raw';
// @ts-ignore
import style from './app-2934291245222875.component.scss?inline';

/**
 * COMPONENT: 'app-2934291245222875'
 */

export const App2934291245222875Component = new Component({
  name: 'app-2934291245222875',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3746976185592591Component,
App8349140673503041Component,
App7742875484369897Component,
App8283144094518827Component,
App3916851805200303Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
