import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1678621611074423Component } from "./components/app-1678621611074423/app-1678621611074423.component";
import { App440541709848711Component } from "./components/app-440541709848711/app-440541709848711.component";
import { App1256669852068037Component } from "./components/app-1256669852068037/app-1256669852068037.component";
import { App5919205308396701Component } from "./components/app-5919205308396701/app-5919205308396701.component";
import { App715735495531893Component } from "./components/app-715735495531893/app-715735495531893.component";

// @ts-ignore
import html from './app-2931257641526123.component.html?raw';
// @ts-ignore
import style from './app-2931257641526123.component.scss?inline';

/**
 * COMPONENT: 'app-2931257641526123'
 */

export const App2931257641526123Component = new Component({
  name: 'app-2931257641526123',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1678621611074423Component,
App440541709848711Component,
App1256669852068037Component,
App5919205308396701Component,
App715735495531893Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
