import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2052739740510821Component } from "./components/app-2052739740510821/app-2052739740510821.component";
import { App272272179507609Component } from "./components/app-272272179507609/app-272272179507609.component";
import { App8344873223688229Component } from "./components/app-8344873223688229/app-8344873223688229.component";
import { App616276246699091Component } from "./components/app-616276246699091/app-616276246699091.component";
import { App1888928199309423Component } from "./components/app-1888928199309423/app-1888928199309423.component";

// @ts-ignore
import html from './app-272742975407891.component.html?raw';
// @ts-ignore
import style from './app-272742975407891.component.scss?inline';

/**
 * COMPONENT: 'app-272742975407891'
 */

export const App272742975407891Component = new Component({
  name: 'app-272742975407891',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2052739740510821Component,
App272272179507609Component,
App8344873223688229Component,
App616276246699091Component,
App1888928199309423Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
