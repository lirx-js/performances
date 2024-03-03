import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8519217343333401Component } from "./components/app-8519217343333401/app-8519217343333401.component";
import { App7005381577160547Component } from "./components/app-7005381577160547/app-7005381577160547.component";
import { App3376322557743783Component } from "./components/app-3376322557743783/app-3376322557743783.component";
import { App1212958602789231Component } from "./components/app-1212958602789231/app-1212958602789231.component";
import { App2260434030468675Component } from "./components/app-2260434030468675/app-2260434030468675.component";

// @ts-ignore
import html from './app-1848702176874965.component.html?raw';
// @ts-ignore
import style from './app-1848702176874965.component.scss?inline';

/**
 * COMPONENT: 'app-1848702176874965'
 */

export const App1848702176874965Component = new Component({
  name: 'app-1848702176874965',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8519217343333401Component,
App7005381577160547Component,
App3376322557743783Component,
App1212958602789231Component,
App2260434030468675Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
