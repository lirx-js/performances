import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3777337401095113Component } from "./components/app-3777337401095113/app-3777337401095113.component";
import { App4746677580478611Component } from "./components/app-4746677580478611/app-4746677580478611.component";
import { App2558891741302103Component } from "./components/app-2558891741302103/app-2558891741302103.component";
import { App4679849294970437Component } from "./components/app-4679849294970437/app-4679849294970437.component";
import { App3984243308974613Component } from "./components/app-3984243308974613/app-3984243308974613.component";

// @ts-ignore
import html from './app-3410965095040111.component.html?raw';
// @ts-ignore
import style from './app-3410965095040111.component.scss?inline';

/**
 * COMPONENT: 'app-3410965095040111'
 */

export const App3410965095040111Component = new Component({
  name: 'app-3410965095040111',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3777337401095113Component,
App4746677580478611Component,
App2558891741302103Component,
App4679849294970437Component,
App3984243308974613Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
