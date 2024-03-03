import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7925369064139691Component } from "./components/app-7925369064139691/app-7925369064139691.component";
import { App4620040389408171Component } from "./components/app-4620040389408171/app-4620040389408171.component";
import { App703488203705097Component } from "./components/app-703488203705097/app-703488203705097.component";
import { App949670462557213Component } from "./components/app-949670462557213/app-949670462557213.component";
import { App5789334248779273Component } from "./components/app-5789334248779273/app-5789334248779273.component";

// @ts-ignore
import html from './app-4891651145538843.component.html?raw';
// @ts-ignore
import style from './app-4891651145538843.component.scss?inline';

/**
 * COMPONENT: 'app-4891651145538843'
 */

export const App4891651145538843Component = new Component({
  name: 'app-4891651145538843',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7925369064139691Component,
App4620040389408171Component,
App703488203705097Component,
App949670462557213Component,
App5789334248779273Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
