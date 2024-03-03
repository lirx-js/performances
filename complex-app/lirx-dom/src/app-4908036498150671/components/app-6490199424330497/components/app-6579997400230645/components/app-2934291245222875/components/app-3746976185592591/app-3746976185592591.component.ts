import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4698852852886251Component } from "./components/app-4698852852886251/app-4698852852886251.component";
import { App1101675153550991Component } from "./components/app-1101675153550991/app-1101675153550991.component";
import { App4648536649463407Component } from "./components/app-4648536649463407/app-4648536649463407.component";
import { App2215254631766469Component } from "./components/app-2215254631766469/app-2215254631766469.component";
import { App8009661262548909Component } from "./components/app-8009661262548909/app-8009661262548909.component";

// @ts-ignore
import html from './app-3746976185592591.component.html?raw';
// @ts-ignore
import style from './app-3746976185592591.component.scss?inline';

/**
 * COMPONENT: 'app-3746976185592591'
 */

export const App3746976185592591Component = new Component({
  name: 'app-3746976185592591',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4698852852886251Component,
App1101675153550991Component,
App4648536649463407Component,
App2215254631766469Component,
App8009661262548909Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
