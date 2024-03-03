import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7243957823391597Component } from "./components/app-7243957823391597/app-7243957823391597.component";
import { App2798453317973579Component } from "./components/app-2798453317973579/app-2798453317973579.component";
import { App6164283282301367Component } from "./components/app-6164283282301367/app-6164283282301367.component";
import { App7658083694639687Component } from "./components/app-7658083694639687/app-7658083694639687.component";
import { App8210573685932441Component } from "./components/app-8210573685932441/app-8210573685932441.component";

// @ts-ignore
import html from './app-2169812509990931.component.html?raw';
// @ts-ignore
import style from './app-2169812509990931.component.scss?inline';

/**
 * COMPONENT: 'app-2169812509990931'
 */

export const App2169812509990931Component = new Component({
  name: 'app-2169812509990931',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7243957823391597Component,
App2798453317973579Component,
App6164283282301367Component,
App7658083694639687Component,
App8210573685932441Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
