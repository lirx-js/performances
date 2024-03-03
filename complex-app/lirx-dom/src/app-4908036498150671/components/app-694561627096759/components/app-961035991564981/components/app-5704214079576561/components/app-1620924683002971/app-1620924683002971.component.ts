import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5760600471663893Component } from "./components/app-5760600471663893/app-5760600471663893.component";
import { App817192264560139Component } from "./components/app-817192264560139/app-817192264560139.component";
import { App1007123291433639Component } from "./components/app-1007123291433639/app-1007123291433639.component";
import { App1528742207111675Component } from "./components/app-1528742207111675/app-1528742207111675.component";
import { App2655624972582147Component } from "./components/app-2655624972582147/app-2655624972582147.component";

// @ts-ignore
import html from './app-1620924683002971.component.html?raw';
// @ts-ignore
import style from './app-1620924683002971.component.scss?inline';

/**
 * COMPONENT: 'app-1620924683002971'
 */

export const App1620924683002971Component = new Component({
  name: 'app-1620924683002971',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5760600471663893Component,
App817192264560139Component,
App1007123291433639Component,
App1528742207111675Component,
App2655624972582147Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
