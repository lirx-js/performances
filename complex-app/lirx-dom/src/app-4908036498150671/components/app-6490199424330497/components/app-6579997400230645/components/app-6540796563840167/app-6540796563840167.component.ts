import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8850289335259351Component } from "./components/app-8850289335259351/app-8850289335259351.component";
import { App3692222142412611Component } from "./components/app-3692222142412611/app-3692222142412611.component";
import { App4812527020578103Component } from "./components/app-4812527020578103/app-4812527020578103.component";
import { App8260818911423121Component } from "./components/app-8260818911423121/app-8260818911423121.component";
import { App817433757531711Component } from "./components/app-817433757531711/app-817433757531711.component";

// @ts-ignore
import html from './app-6540796563840167.component.html?raw';
// @ts-ignore
import style from './app-6540796563840167.component.scss?inline';

/**
 * COMPONENT: 'app-6540796563840167'
 */

export const App6540796563840167Component = new Component({
  name: 'app-6540796563840167',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8850289335259351Component,
App3692222142412611Component,
App4812527020578103Component,
App8260818911423121Component,
App817433757531711Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
