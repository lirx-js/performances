import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4663343942235771Component } from "./components/app-4663343942235771/app-4663343942235771.component";
import { App7870432584680671Component } from "./components/app-7870432584680671/app-7870432584680671.component";
import { App6240905217868259Component } from "./components/app-6240905217868259/app-6240905217868259.component";
import { App1742169057847629Component } from "./components/app-1742169057847629/app-1742169057847629.component";
import { App4854088324171327Component } from "./components/app-4854088324171327/app-4854088324171327.component";

// @ts-ignore
import html from './app-7423299843312087.component.html?raw';
// @ts-ignore
import style from './app-7423299843312087.component.scss?inline';

/**
 * COMPONENT: 'app-7423299843312087'
 */

export const App7423299843312087Component = new Component({
  name: 'app-7423299843312087',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4663343942235771Component,
App7870432584680671Component,
App6240905217868259Component,
App1742169057847629Component,
App4854088324171327Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
