import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1638012194305169Component } from "./components/app-1638012194305169/app-1638012194305169.component";
import { App4353633084173193Component } from "./components/app-4353633084173193/app-4353633084173193.component";
import { App6652432868707945Component } from "./components/app-6652432868707945/app-6652432868707945.component";
import { App8766774768120149Component } from "./components/app-8766774768120149/app-8766774768120149.component";
import { App6595914417566363Component } from "./components/app-6595914417566363/app-6595914417566363.component";

// @ts-ignore
import html from './app-5098600725530033.component.html?raw';
// @ts-ignore
import style from './app-5098600725530033.component.scss?inline';

/**
 * COMPONENT: 'app-5098600725530033'
 */

export const App5098600725530033Component = new Component({
  name: 'app-5098600725530033',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1638012194305169Component,
App4353633084173193Component,
App6652432868707945Component,
App8766774768120149Component,
App6595914417566363Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
