import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5032873344618179Component } from "./components/app-5032873344618179/app-5032873344618179.component";
import { App5848299494975065Component } from "./components/app-5848299494975065/app-5848299494975065.component";
import { App7067357821810479Component } from "./components/app-7067357821810479/app-7067357821810479.component";
import { App4429614600678785Component } from "./components/app-4429614600678785/app-4429614600678785.component";
import { App6418212309999959Component } from "./components/app-6418212309999959/app-6418212309999959.component";

// @ts-ignore
import html from './app-4468124280914793.component.html?raw';
// @ts-ignore
import style from './app-4468124280914793.component.scss?inline';

/**
 * COMPONENT: 'app-4468124280914793'
 */

export const App4468124280914793Component = new Component({
  name: 'app-4468124280914793',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5032873344618179Component,
App5848299494975065Component,
App7067357821810479Component,
App4429614600678785Component,
App6418212309999959Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
