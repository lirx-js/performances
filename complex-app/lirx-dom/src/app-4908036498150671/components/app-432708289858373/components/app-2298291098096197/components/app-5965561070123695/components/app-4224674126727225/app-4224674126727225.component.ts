import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2068337865328699Component } from "./components/app-2068337865328699/app-2068337865328699.component";
import { App3097717357434041Component } from "./components/app-3097717357434041/app-3097717357434041.component";
import { App2402660701608347Component } from "./components/app-2402660701608347/app-2402660701608347.component";
import { App8481414648644835Component } from "./components/app-8481414648644835/app-8481414648644835.component";
import { App3269484704616117Component } from "./components/app-3269484704616117/app-3269484704616117.component";

// @ts-ignore
import html from './app-4224674126727225.component.html?raw';
// @ts-ignore
import style from './app-4224674126727225.component.scss?inline';

/**
 * COMPONENT: 'app-4224674126727225'
 */

export const App4224674126727225Component = new Component({
  name: 'app-4224674126727225',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2068337865328699Component,
App3097717357434041Component,
App2402660701608347Component,
App8481414648644835Component,
App3269484704616117Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
