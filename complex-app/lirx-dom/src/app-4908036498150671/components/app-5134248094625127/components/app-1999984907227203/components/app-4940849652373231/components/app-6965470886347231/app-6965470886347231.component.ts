import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6867628591770031Component } from "./components/app-6867628591770031/app-6867628591770031.component";
import { App668799513833527Component } from "./components/app-668799513833527/app-668799513833527.component";
import { App6685370461465341Component } from "./components/app-6685370461465341/app-6685370461465341.component";
import { App5060805208149125Component } from "./components/app-5060805208149125/app-5060805208149125.component";
import { App6146802170061529Component } from "./components/app-6146802170061529/app-6146802170061529.component";

// @ts-ignore
import html from './app-6965470886347231.component.html?raw';
// @ts-ignore
import style from './app-6965470886347231.component.scss?inline';

/**
 * COMPONENT: 'app-6965470886347231'
 */

export const App6965470886347231Component = new Component({
  name: 'app-6965470886347231',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6867628591770031Component,
App668799513833527Component,
App6685370461465341Component,
App5060805208149125Component,
App6146802170061529Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
