import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7430229009912791Component } from "./components/app-7430229009912791/app-7430229009912791.component";
import { App108100368083039Component } from "./components/app-108100368083039/app-108100368083039.component";
import { App816109045630027Component } from "./components/app-816109045630027/app-816109045630027.component";
import { App535252896661569Component } from "./components/app-535252896661569/app-535252896661569.component";
import { App4387153822731355Component } from "./components/app-4387153822731355/app-4387153822731355.component";

// @ts-ignore
import html from './app-4506352990869913.component.html?raw';
// @ts-ignore
import style from './app-4506352990869913.component.scss?inline';

/**
 * COMPONENT: 'app-4506352990869913'
 */

export const App4506352990869913Component = new Component({
  name: 'app-4506352990869913',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7430229009912791Component,
App108100368083039Component,
App816109045630027Component,
App535252896661569Component,
App4387153822731355Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
