import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5751347844137289Component } from "./components/app-5751347844137289/app-5751347844137289.component";
import { App5053797899189841Component } from "./components/app-5053797899189841/app-5053797899189841.component";
import { App5890535771319783Component } from "./components/app-5890535771319783/app-5890535771319783.component";
import { App1320452829419517Component } from "./components/app-1320452829419517/app-1320452829419517.component";
import { App2674226431099851Component } from "./components/app-2674226431099851/app-2674226431099851.component";

// @ts-ignore
import html from './app-3204404630603899.component.html?raw';
// @ts-ignore
import style from './app-3204404630603899.component.scss?inline';

/**
 * COMPONENT: 'app-3204404630603899'
 */

export const App3204404630603899Component = new Component({
  name: 'app-3204404630603899',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5751347844137289Component,
App5053797899189841Component,
App5890535771319783Component,
App1320452829419517Component,
App2674226431099851Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
