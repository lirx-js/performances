import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6724609734709127Component } from "./components/app-6724609734709127/app-6724609734709127.component";
import { App4508993172168187Component } from "./components/app-4508993172168187/app-4508993172168187.component";
import { App6458723000807253Component } from "./components/app-6458723000807253/app-6458723000807253.component";
import { App6779322371544017Component } from "./components/app-6779322371544017/app-6779322371544017.component";
import { App1901531545537011Component } from "./components/app-1901531545537011/app-1901531545537011.component";

// @ts-ignore
import html from './app-1071182354163409.component.html?raw';
// @ts-ignore
import style from './app-1071182354163409.component.scss?inline';

/**
 * COMPONENT: 'app-1071182354163409'
 */

export const App1071182354163409Component = new Component({
  name: 'app-1071182354163409',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6724609734709127Component,
App4508993172168187Component,
App6458723000807253Component,
App6779322371544017Component,
App1901531545537011Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
