import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6554653317744229Component } from "./components/app-6554653317744229/app-6554653317744229.component";
import { App4161561769214237Component } from "./components/app-4161561769214237/app-4161561769214237.component";
import { App7509323919968651Component } from "./components/app-7509323919968651/app-7509323919968651.component";
import { App8423996339849459Component } from "./components/app-8423996339849459/app-8423996339849459.component";
import { App6994324908703729Component } from "./components/app-6994324908703729/app-6994324908703729.component";

// @ts-ignore
import html from './app-7318613002614165.component.html?raw';
// @ts-ignore
import style from './app-7318613002614165.component.scss?inline';

/**
 * COMPONENT: 'app-7318613002614165'
 */

export const App7318613002614165Component = new Component({
  name: 'app-7318613002614165',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6554653317744229Component,
App4161561769214237Component,
App7509323919968651Component,
App8423996339849459Component,
App6994324908703729Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
