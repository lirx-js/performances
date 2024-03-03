import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1359366795094187Component } from "./components/app-1359366795094187/app-1359366795094187.component";
import { App1910851140859607Component } from "./components/app-1910851140859607/app-1910851140859607.component";
import { App2791991136871721Component } from "./components/app-2791991136871721/app-2791991136871721.component";
import { App4151685093694311Component } from "./components/app-4151685093694311/app-4151685093694311.component";
import { App5689305456806709Component } from "./components/app-5689305456806709/app-5689305456806709.component";

// @ts-ignore
import html from './app-7777577409397819.component.html?raw';
// @ts-ignore
import style from './app-7777577409397819.component.scss?inline';

/**
 * COMPONENT: 'app-7777577409397819'
 */

export const App7777577409397819Component = new Component({
  name: 'app-7777577409397819',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1359366795094187Component,
App1910851140859607Component,
App2791991136871721Component,
App4151685093694311Component,
App5689305456806709Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
