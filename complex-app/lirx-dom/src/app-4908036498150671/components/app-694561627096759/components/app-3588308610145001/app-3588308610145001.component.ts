import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1064473348809899Component } from "./components/app-1064473348809899/app-1064473348809899.component";
import { App5211101413521491Component } from "./components/app-5211101413521491/app-5211101413521491.component";
import { App1993627789403013Component } from "./components/app-1993627789403013/app-1993627789403013.component";
import { App3536950699513085Component } from "./components/app-3536950699513085/app-3536950699513085.component";
import { App6743563112379651Component } from "./components/app-6743563112379651/app-6743563112379651.component";

// @ts-ignore
import html from './app-3588308610145001.component.html?raw';
// @ts-ignore
import style from './app-3588308610145001.component.scss?inline';

/**
 * COMPONENT: 'app-3588308610145001'
 */

export const App3588308610145001Component = new Component({
  name: 'app-3588308610145001',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1064473348809899Component,
App5211101413521491Component,
App1993627789403013Component,
App3536950699513085Component,
App6743563112379651Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
