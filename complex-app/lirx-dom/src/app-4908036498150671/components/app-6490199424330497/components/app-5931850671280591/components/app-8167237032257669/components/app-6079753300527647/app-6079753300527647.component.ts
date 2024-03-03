import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App216242892880853Component } from "./components/app-216242892880853/app-216242892880853.component";
import { App1248247996010453Component } from "./components/app-1248247996010453/app-1248247996010453.component";
import { App4120516798509747Component } from "./components/app-4120516798509747/app-4120516798509747.component";
import { App1227076940177691Component } from "./components/app-1227076940177691/app-1227076940177691.component";
import { App6493417103972631Component } from "./components/app-6493417103972631/app-6493417103972631.component";

// @ts-ignore
import html from './app-6079753300527647.component.html?raw';
// @ts-ignore
import style from './app-6079753300527647.component.scss?inline';

/**
 * COMPONENT: 'app-6079753300527647'
 */

export const App6079753300527647Component = new Component({
  name: 'app-6079753300527647',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App216242892880853Component,
App1248247996010453Component,
App4120516798509747Component,
App1227076940177691Component,
App6493417103972631Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
