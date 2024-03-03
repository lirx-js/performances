import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4696039191489985Component } from "./components/app-4696039191489985/app-4696039191489985.component";
import { App5756021622870965Component } from "./components/app-5756021622870965/app-5756021622870965.component";
import { App7838529153482963Component } from "./components/app-7838529153482963/app-7838529153482963.component";
import { App4104394409698955Component } from "./components/app-4104394409698955/app-4104394409698955.component";
import { App8699690983141601Component } from "./components/app-8699690983141601/app-8699690983141601.component";

// @ts-ignore
import html from './app-3233173431188213.component.html?raw';
// @ts-ignore
import style from './app-3233173431188213.component.scss?inline';

/**
 * COMPONENT: 'app-3233173431188213'
 */

export const App3233173431188213Component = new Component({
  name: 'app-3233173431188213',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4696039191489985Component,
App5756021622870965Component,
App7838529153482963Component,
App4104394409698955Component,
App8699690983141601Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
