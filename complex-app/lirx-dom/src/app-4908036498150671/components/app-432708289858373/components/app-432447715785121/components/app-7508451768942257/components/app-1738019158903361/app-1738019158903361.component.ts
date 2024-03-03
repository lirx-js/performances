import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3444200334446891Component } from "./components/app-3444200334446891/app-3444200334446891.component";
import { App3857162208653301Component } from "./components/app-3857162208653301/app-3857162208653301.component";
import { App6322695175945739Component } from "./components/app-6322695175945739/app-6322695175945739.component";
import { App6201306172935869Component } from "./components/app-6201306172935869/app-6201306172935869.component";
import { App4728832567624797Component } from "./components/app-4728832567624797/app-4728832567624797.component";

// @ts-ignore
import html from './app-1738019158903361.component.html?raw';
// @ts-ignore
import style from './app-1738019158903361.component.scss?inline';

/**
 * COMPONENT: 'app-1738019158903361'
 */

export const App1738019158903361Component = new Component({
  name: 'app-1738019158903361',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3444200334446891Component,
App3857162208653301Component,
App6322695175945739Component,
App6201306172935869Component,
App4728832567624797Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
