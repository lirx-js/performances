import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4782838205229451Component } from "./components/app-4782838205229451/app-4782838205229451.component";
import { App3216231929643751Component } from "./components/app-3216231929643751/app-3216231929643751.component";
import { App7882918804540831Component } from "./components/app-7882918804540831/app-7882918804540831.component";
import { App5222467828396759Component } from "./components/app-5222467828396759/app-5222467828396759.component";
import { App6860983391317973Component } from "./components/app-6860983391317973/app-6860983391317973.component";

// @ts-ignore
import html from './app-6552611360800877.component.html?raw';
// @ts-ignore
import style from './app-6552611360800877.component.scss?inline';

/**
 * COMPONENT: 'app-6552611360800877'
 */

export const App6552611360800877Component = new Component({
  name: 'app-6552611360800877',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4782838205229451Component,
App3216231929643751Component,
App7882918804540831Component,
App5222467828396759Component,
App6860983391317973Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
