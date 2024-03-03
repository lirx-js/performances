import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3587717474306735Component } from "./components/app-3587717474306735/app-3587717474306735.component";
import { App5803135668871751Component } from "./components/app-5803135668871751/app-5803135668871751.component";
import { App3555859946920183Component } from "./components/app-3555859946920183/app-3555859946920183.component";
import { App3351396932909571Component } from "./components/app-3351396932909571/app-3351396932909571.component";
import { App7267979044606631Component } from "./components/app-7267979044606631/app-7267979044606631.component";

// @ts-ignore
import html from './app-4559494876344903.component.html?raw';
// @ts-ignore
import style from './app-4559494876344903.component.scss?inline';

/**
 * COMPONENT: 'app-4559494876344903'
 */

export const App4559494876344903Component = new Component({
  name: 'app-4559494876344903',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3587717474306735Component,
App5803135668871751Component,
App3555859946920183Component,
App3351396932909571Component,
App7267979044606631Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
