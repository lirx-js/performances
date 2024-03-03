import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3133552849954103Component } from "./components/app-3133552849954103/app-3133552849954103.component";
import { App8135257557770853Component } from "./components/app-8135257557770853/app-8135257557770853.component";
import { App3778902100527969Component } from "./components/app-3778902100527969/app-3778902100527969.component";
import { App6440498056600057Component } from "./components/app-6440498056600057/app-6440498056600057.component";
import { App1515629498468489Component } from "./components/app-1515629498468489/app-1515629498468489.component";

// @ts-ignore
import html from './app-6674675971678795.component.html?raw';
// @ts-ignore
import style from './app-6674675971678795.component.scss?inline';

/**
 * COMPONENT: 'app-6674675971678795'
 */

export const App6674675971678795Component = new Component({
  name: 'app-6674675971678795',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3133552849954103Component,
App8135257557770853Component,
App3778902100527969Component,
App6440498056600057Component,
App1515629498468489Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
