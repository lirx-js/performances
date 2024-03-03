import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App846481347465137Component } from "./components/app-846481347465137/app-846481347465137.component";
import { App6275173465530037Component } from "./components/app-6275173465530037/app-6275173465530037.component";
import { App2279045922578165Component } from "./components/app-2279045922578165/app-2279045922578165.component";
import { App3047244550967209Component } from "./components/app-3047244550967209/app-3047244550967209.component";
import { App2342195272288193Component } from "./components/app-2342195272288193/app-2342195272288193.component";

// @ts-ignore
import html from './app-1093383973797269.component.html?raw';
// @ts-ignore
import style from './app-1093383973797269.component.scss?inline';

/**
 * COMPONENT: 'app-1093383973797269'
 */

export const App1093383973797269Component = new Component({
  name: 'app-1093383973797269',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App846481347465137Component,
App6275173465530037Component,
App2279045922578165Component,
App3047244550967209Component,
App2342195272288193Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
