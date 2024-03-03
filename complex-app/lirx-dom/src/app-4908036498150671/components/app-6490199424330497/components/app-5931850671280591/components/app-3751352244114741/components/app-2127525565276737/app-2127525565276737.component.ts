import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8961383325298511Component } from "./components/app-8961383325298511/app-8961383325298511.component";
import { App7882464503750085Component } from "./components/app-7882464503750085/app-7882464503750085.component";
import { App2308024555860395Component } from "./components/app-2308024555860395/app-2308024555860395.component";
import { App3730148811953899Component } from "./components/app-3730148811953899/app-3730148811953899.component";
import { App207332224957351Component } from "./components/app-207332224957351/app-207332224957351.component";

// @ts-ignore
import html from './app-2127525565276737.component.html?raw';
// @ts-ignore
import style from './app-2127525565276737.component.scss?inline';

/**
 * COMPONENT: 'app-2127525565276737'
 */

export const App2127525565276737Component = new Component({
  name: 'app-2127525565276737',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8961383325298511Component,
App7882464503750085Component,
App2308024555860395Component,
App3730148811953899Component,
App207332224957351Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
