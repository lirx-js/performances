import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App733657880836495Component } from "./components/app-733657880836495/app-733657880836495.component";
import { App3775510790427029Component } from "./components/app-3775510790427029/app-3775510790427029.component";
import { App3210890563529253Component } from "./components/app-3210890563529253/app-3210890563529253.component";
import { App4929576965133879Component } from "./components/app-4929576965133879/app-4929576965133879.component";
import { App7712589255948641Component } from "./components/app-7712589255948641/app-7712589255948641.component";

// @ts-ignore
import html from './app-2326165475417733.component.html?raw';
// @ts-ignore
import style from './app-2326165475417733.component.scss?inline';

/**
 * COMPONENT: 'app-2326165475417733'
 */

export const App2326165475417733Component = new Component({
  name: 'app-2326165475417733',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App733657880836495Component,
App3775510790427029Component,
App3210890563529253Component,
App4929576965133879Component,
App7712589255948641Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
