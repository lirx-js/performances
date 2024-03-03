import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8562976109528219Component } from "./components/app-8562976109528219/app-8562976109528219.component";
import { App516867656591845Component } from "./components/app-516867656591845/app-516867656591845.component";
import { App8904216680556931Component } from "./components/app-8904216680556931/app-8904216680556931.component";
import { App8057714150767537Component } from "./components/app-8057714150767537/app-8057714150767537.component";
import { App6437754057162575Component } from "./components/app-6437754057162575/app-6437754057162575.component";

// @ts-ignore
import html from './app-7289511834058501.component.html?raw';
// @ts-ignore
import style from './app-7289511834058501.component.scss?inline';

/**
 * COMPONENT: 'app-7289511834058501'
 */

export const App7289511834058501Component = new Component({
  name: 'app-7289511834058501',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8562976109528219Component,
App516867656591845Component,
App8904216680556931Component,
App8057714150767537Component,
App6437754057162575Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
