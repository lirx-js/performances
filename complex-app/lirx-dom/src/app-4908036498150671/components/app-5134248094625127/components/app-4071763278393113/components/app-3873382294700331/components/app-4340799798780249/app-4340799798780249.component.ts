import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1782669293179133Component } from "./components/app-1782669293179133/app-1782669293179133.component";
import { App6754633821447223Component } from "./components/app-6754633821447223/app-6754633821447223.component";
import { App6853030823966189Component } from "./components/app-6853030823966189/app-6853030823966189.component";
import { App2454619145891561Component } from "./components/app-2454619145891561/app-2454619145891561.component";
import { App1701511798380213Component } from "./components/app-1701511798380213/app-1701511798380213.component";

// @ts-ignore
import html from './app-4340799798780249.component.html?raw';
// @ts-ignore
import style from './app-4340799798780249.component.scss?inline';

/**
 * COMPONENT: 'app-4340799798780249'
 */

export const App4340799798780249Component = new Component({
  name: 'app-4340799798780249',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1782669293179133Component,
App6754633821447223Component,
App6853030823966189Component,
App2454619145891561Component,
App1701511798380213Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
