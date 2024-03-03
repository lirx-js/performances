import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2826910063017917Component } from "./components/app-2826910063017917/app-2826910063017917.component";
import { App4198792499222177Component } from "./components/app-4198792499222177/app-4198792499222177.component";
import { App1371104966710251Component } from "./components/app-1371104966710251/app-1371104966710251.component";
import { App8453381080948727Component } from "./components/app-8453381080948727/app-8453381080948727.component";
import { App7784537004277131Component } from "./components/app-7784537004277131/app-7784537004277131.component";

// @ts-ignore
import html from './app-935303130244479.component.html?raw';
// @ts-ignore
import style from './app-935303130244479.component.scss?inline';

/**
 * COMPONENT: 'app-935303130244479'
 */

export const App935303130244479Component = new Component({
  name: 'app-935303130244479',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2826910063017917Component,
App4198792499222177Component,
App1371104966710251Component,
App8453381080948727Component,
App7784537004277131Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
