import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5415534637450797Component } from "./components/app-5415534637450797/app-5415534637450797.component";
import { App8701943997584737Component } from "./components/app-8701943997584737/app-8701943997584737.component";
import { App69803573406485Component } from "./components/app-69803573406485/app-69803573406485.component";
import { App8249132228113953Component } from "./components/app-8249132228113953/app-8249132228113953.component";
import { App2169812509990931Component } from "./components/app-2169812509990931/app-2169812509990931.component";

// @ts-ignore
import html from './app-3536950699513085.component.html?raw';
// @ts-ignore
import style from './app-3536950699513085.component.scss?inline';

/**
 * COMPONENT: 'app-3536950699513085'
 */

export const App3536950699513085Component = new Component({
  name: 'app-3536950699513085',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5415534637450797Component,
App8701943997584737Component,
App69803573406485Component,
App8249132228113953Component,
App2169812509990931Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
