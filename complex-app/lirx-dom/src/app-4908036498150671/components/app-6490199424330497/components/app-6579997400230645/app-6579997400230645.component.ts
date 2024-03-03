import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2934291245222875Component } from "./components/app-2934291245222875/app-2934291245222875.component";
import { App6562837167821745Component } from "./components/app-6562837167821745/app-6562837167821745.component";
import { App3204404630603899Component } from "./components/app-3204404630603899/app-3204404630603899.component";
import { App7471055027402051Component } from "./components/app-7471055027402051/app-7471055027402051.component";
import { App6540796563840167Component } from "./components/app-6540796563840167/app-6540796563840167.component";

// @ts-ignore
import html from './app-6579997400230645.component.html?raw';
// @ts-ignore
import style from './app-6579997400230645.component.scss?inline';

/**
 * COMPONENT: 'app-6579997400230645'
 */

export const App6579997400230645Component = new Component({
  name: 'app-6579997400230645',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2934291245222875Component,
App6562837167821745Component,
App3204404630603899Component,
App7471055027402051Component,
App6540796563840167Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
