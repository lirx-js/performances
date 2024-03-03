import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4484910898736441Component } from "./components/app-4484910898736441/app-4484910898736441.component";
import { App4406852984114887Component } from "./components/app-4406852984114887/app-4406852984114887.component";
import { App747830140358269Component } from "./components/app-747830140358269/app-747830140358269.component";
import { App4953154813820459Component } from "./components/app-4953154813820459/app-4953154813820459.component";
import { App2892513151850403Component } from "./components/app-2892513151850403/app-2892513151850403.component";

// @ts-ignore
import html from './app-5943997527168137.component.html?raw';
// @ts-ignore
import style from './app-5943997527168137.component.scss?inline';

/**
 * COMPONENT: 'app-5943997527168137'
 */

export const App5943997527168137Component = new Component({
  name: 'app-5943997527168137',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4484910898736441Component,
App4406852984114887Component,
App747830140358269Component,
App4953154813820459Component,
App2892513151850403Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
