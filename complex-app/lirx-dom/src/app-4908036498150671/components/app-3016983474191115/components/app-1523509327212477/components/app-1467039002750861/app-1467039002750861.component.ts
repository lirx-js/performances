import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3432560828642039Component } from "./components/app-3432560828642039/app-3432560828642039.component";
import { App3831008111546873Component } from "./components/app-3831008111546873/app-3831008111546873.component";
import { App4468124280914793Component } from "./components/app-4468124280914793/app-4468124280914793.component";
import { App4892915061486929Component } from "./components/app-4892915061486929/app-4892915061486929.component";
import { App8573197661762289Component } from "./components/app-8573197661762289/app-8573197661762289.component";

// @ts-ignore
import html from './app-1467039002750861.component.html?raw';
// @ts-ignore
import style from './app-1467039002750861.component.scss?inline';

/**
 * COMPONENT: 'app-1467039002750861'
 */

export const App1467039002750861Component = new Component({
  name: 'app-1467039002750861',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3432560828642039Component,
App3831008111546873Component,
App4468124280914793Component,
App4892915061486929Component,
App8573197661762289Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
