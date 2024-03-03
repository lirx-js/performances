import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7296829280060589Component } from "./components/app-7296829280060589/app-7296829280060589.component";
import { App7205147897228787Component } from "./components/app-7205147897228787/app-7205147897228787.component";
import { App8593404890284823Component } from "./components/app-8593404890284823/app-8593404890284823.component";
import { App7205476530909663Component } from "./components/app-7205476530909663/app-7205476530909663.component";
import { App6902949807752171Component } from "./components/app-6902949807752171/app-6902949807752171.component";

// @ts-ignore
import html from './app-7897320656605995.component.html?raw';
// @ts-ignore
import style from './app-7897320656605995.component.scss?inline';

/**
 * COMPONENT: 'app-7897320656605995'
 */

export const App7897320656605995Component = new Component({
  name: 'app-7897320656605995',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7296829280060589Component,
App7205147897228787Component,
App8593404890284823Component,
App7205476530909663Component,
App6902949807752171Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
