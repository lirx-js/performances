import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2548035032087135Component } from "./components/app-2548035032087135/app-2548035032087135.component";
import { App2293946707486253Component } from "./components/app-2293946707486253/app-2293946707486253.component";
import { App2952898844375273Component } from "./components/app-2952898844375273/app-2952898844375273.component";
import { App8061900541616163Component } from "./components/app-8061900541616163/app-8061900541616163.component";
import { App880241399757013Component } from "./components/app-880241399757013/app-880241399757013.component";

// @ts-ignore
import html from './app-2949075316664247.component.html?raw';
// @ts-ignore
import style from './app-2949075316664247.component.scss?inline';

/**
 * COMPONENT: 'app-2949075316664247'
 */

export const App2949075316664247Component = new Component({
  name: 'app-2949075316664247',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2548035032087135Component,
App2293946707486253Component,
App2952898844375273Component,
App8061900541616163Component,
App880241399757013Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
