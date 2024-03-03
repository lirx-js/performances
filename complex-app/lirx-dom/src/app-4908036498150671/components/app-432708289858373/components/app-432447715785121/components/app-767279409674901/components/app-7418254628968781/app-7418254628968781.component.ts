import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8846617072702391Component } from "./components/app-8846617072702391/app-8846617072702391.component";
import { App983045210537527Component } from "./components/app-983045210537527/app-983045210537527.component";
import { App8324128780213651Component } from "./components/app-8324128780213651/app-8324128780213651.component";
import { App8429381302963439Component } from "./components/app-8429381302963439/app-8429381302963439.component";
import { App2212085584279289Component } from "./components/app-2212085584279289/app-2212085584279289.component";

// @ts-ignore
import html from './app-7418254628968781.component.html?raw';
// @ts-ignore
import style from './app-7418254628968781.component.scss?inline';

/**
 * COMPONENT: 'app-7418254628968781'
 */

export const App7418254628968781Component = new Component({
  name: 'app-7418254628968781',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8846617072702391Component,
App983045210537527Component,
App8324128780213651Component,
App8429381302963439Component,
App2212085584279289Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
