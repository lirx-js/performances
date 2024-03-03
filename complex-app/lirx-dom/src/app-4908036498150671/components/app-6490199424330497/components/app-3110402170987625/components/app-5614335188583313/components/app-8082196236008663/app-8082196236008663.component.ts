import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6422625269046901Component } from "./components/app-6422625269046901/app-6422625269046901.component";
import { App816274251922235Component } from "./components/app-816274251922235/app-816274251922235.component";
import { App1346363563104709Component } from "./components/app-1346363563104709/app-1346363563104709.component";
import { App7619336315254249Component } from "./components/app-7619336315254249/app-7619336315254249.component";
import { App5275809427145589Component } from "./components/app-5275809427145589/app-5275809427145589.component";

// @ts-ignore
import html from './app-8082196236008663.component.html?raw';
// @ts-ignore
import style from './app-8082196236008663.component.scss?inline';

/**
 * COMPONENT: 'app-8082196236008663'
 */

export const App8082196236008663Component = new Component({
  name: 'app-8082196236008663',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6422625269046901Component,
App816274251922235Component,
App1346363563104709Component,
App7619336315254249Component,
App5275809427145589Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
