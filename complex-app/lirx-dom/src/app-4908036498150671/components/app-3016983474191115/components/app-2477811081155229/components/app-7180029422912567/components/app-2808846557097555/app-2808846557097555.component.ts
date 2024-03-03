import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3534970583721001Component } from "./components/app-3534970583721001/app-3534970583721001.component";
import { App213911037955723Component } from "./components/app-213911037955723/app-213911037955723.component";
import { App4811272742020059Component } from "./components/app-4811272742020059/app-4811272742020059.component";
import { App6503565335938595Component } from "./components/app-6503565335938595/app-6503565335938595.component";
import { App7081734248845971Component } from "./components/app-7081734248845971/app-7081734248845971.component";

// @ts-ignore
import html from './app-2808846557097555.component.html?raw';
// @ts-ignore
import style from './app-2808846557097555.component.scss?inline';

/**
 * COMPONENT: 'app-2808846557097555'
 */

export const App2808846557097555Component = new Component({
  name: 'app-2808846557097555',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3534970583721001Component,
App213911037955723Component,
App4811272742020059Component,
App6503565335938595Component,
App7081734248845971Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
