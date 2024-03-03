import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7205014005786219Component } from "./components/app-7205014005786219/app-7205014005786219.component";
import { App4532179236872717Component } from "./components/app-4532179236872717/app-4532179236872717.component";
import { App8744916022773023Component } from "./components/app-8744916022773023/app-8744916022773023.component";
import { App5851352706226135Component } from "./components/app-5851352706226135/app-5851352706226135.component";
import { App6273757431892623Component } from "./components/app-6273757431892623/app-6273757431892623.component";

// @ts-ignore
import html from './app-5415534637450797.component.html?raw';
// @ts-ignore
import style from './app-5415534637450797.component.scss?inline';

/**
 * COMPONENT: 'app-5415534637450797'
 */

export const App5415534637450797Component = new Component({
  name: 'app-5415534637450797',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7205014005786219Component,
App4532179236872717Component,
App8744916022773023Component,
App5851352706226135Component,
App6273757431892623Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
