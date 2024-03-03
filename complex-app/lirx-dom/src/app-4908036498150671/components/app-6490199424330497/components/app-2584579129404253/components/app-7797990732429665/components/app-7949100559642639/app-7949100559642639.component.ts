import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7640763196224947Component } from "./components/app-7640763196224947/app-7640763196224947.component";
import { App6391713266027759Component } from "./components/app-6391713266027759/app-6391713266027759.component";
import { App947257681314411Component } from "./components/app-947257681314411/app-947257681314411.component";
import { App397330260152555Component } from "./components/app-397330260152555/app-397330260152555.component";
import { App2866255286764155Component } from "./components/app-2866255286764155/app-2866255286764155.component";

// @ts-ignore
import html from './app-7949100559642639.component.html?raw';
// @ts-ignore
import style from './app-7949100559642639.component.scss?inline';

/**
 * COMPONENT: 'app-7949100559642639'
 */

export const App7949100559642639Component = new Component({
  name: 'app-7949100559642639',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7640763196224947Component,
App6391713266027759Component,
App947257681314411Component,
App397330260152555Component,
App2866255286764155Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
