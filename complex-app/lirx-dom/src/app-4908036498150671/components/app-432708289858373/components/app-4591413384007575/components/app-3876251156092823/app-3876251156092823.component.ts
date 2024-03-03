import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App365839296398571Component } from "./components/app-365839296398571/app-365839296398571.component";
import { App4573815012678199Component } from "./components/app-4573815012678199/app-4573815012678199.component";
import { App6875043444247715Component } from "./components/app-6875043444247715/app-6875043444247715.component";
import { App2304107176454581Component } from "./components/app-2304107176454581/app-2304107176454581.component";
import { App5446139180064491Component } from "./components/app-5446139180064491/app-5446139180064491.component";

// @ts-ignore
import html from './app-3876251156092823.component.html?raw';
// @ts-ignore
import style from './app-3876251156092823.component.scss?inline';

/**
 * COMPONENT: 'app-3876251156092823'
 */

export const App3876251156092823Component = new Component({
  name: 'app-3876251156092823',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App365839296398571Component,
App4573815012678199Component,
App6875043444247715Component,
App2304107176454581Component,
App5446139180064491Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
