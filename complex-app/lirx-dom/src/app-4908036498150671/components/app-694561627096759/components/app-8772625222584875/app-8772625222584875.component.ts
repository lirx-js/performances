import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5165169173920711Component } from "./components/app-5165169173920711/app-5165169173920711.component";
import { App3272366769724935Component } from "./components/app-3272366769724935/app-3272366769724935.component";
import { App7679933280244041Component } from "./components/app-7679933280244041/app-7679933280244041.component";
import { App2340260445713345Component } from "./components/app-2340260445713345/app-2340260445713345.component";
import { App1380464957111033Component } from "./components/app-1380464957111033/app-1380464957111033.component";

// @ts-ignore
import html from './app-8772625222584875.component.html?raw';
// @ts-ignore
import style from './app-8772625222584875.component.scss?inline';

/**
 * COMPONENT: 'app-8772625222584875'
 */

export const App8772625222584875Component = new Component({
  name: 'app-8772625222584875',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5165169173920711Component,
App3272366769724935Component,
App7679933280244041Component,
App2340260445713345Component,
App1380464957111033Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
