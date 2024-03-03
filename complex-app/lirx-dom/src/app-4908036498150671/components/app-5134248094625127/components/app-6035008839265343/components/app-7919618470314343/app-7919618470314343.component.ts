import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App128673606132387Component } from "./components/app-128673606132387/app-128673606132387.component";
import { App4187844912110967Component } from "./components/app-4187844912110967/app-4187844912110967.component";
import { App5706859564296967Component } from "./components/app-5706859564296967/app-5706859564296967.component";
import { App2583504726741721Component } from "./components/app-2583504726741721/app-2583504726741721.component";
import { App1535593225118835Component } from "./components/app-1535593225118835/app-1535593225118835.component";

// @ts-ignore
import html from './app-7919618470314343.component.html?raw';
// @ts-ignore
import style from './app-7919618470314343.component.scss?inline';

/**
 * COMPONENT: 'app-7919618470314343'
 */

export const App7919618470314343Component = new Component({
  name: 'app-7919618470314343',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App128673606132387Component,
App4187844912110967Component,
App5706859564296967Component,
App2583504726741721Component,
App1535593225118835Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
