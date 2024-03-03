import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4926694172096197Component } from "./components/app-4926694172096197/app-4926694172096197.component";
import { App7294375212148093Component } from "./components/app-7294375212148093/app-7294375212148093.component";
import { App3064118874500873Component } from "./components/app-3064118874500873/app-3064118874500873.component";
import { App7931876317204763Component } from "./components/app-7931876317204763/app-7931876317204763.component";
import { App2999667315846149Component } from "./components/app-2999667315846149/app-2999667315846149.component";

// @ts-ignore
import html from './app-521743599462063.component.html?raw';
// @ts-ignore
import style from './app-521743599462063.component.scss?inline';

/**
 * COMPONENT: 'app-521743599462063'
 */

export const App521743599462063Component = new Component({
  name: 'app-521743599462063',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4926694172096197Component,
App7294375212148093Component,
App3064118874500873Component,
App7931876317204763Component,
App2999667315846149Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
