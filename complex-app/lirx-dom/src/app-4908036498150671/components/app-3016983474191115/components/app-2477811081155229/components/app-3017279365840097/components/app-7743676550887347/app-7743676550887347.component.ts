import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7810578347336873Component } from "./components/app-7810578347336873/app-7810578347336873.component";
import { App1351680060833967Component } from "./components/app-1351680060833967/app-1351680060833967.component";
import { App8389760216799005Component } from "./components/app-8389760216799005/app-8389760216799005.component";
import { App3621869344943809Component } from "./components/app-3621869344943809/app-3621869344943809.component";
import { App3959462671085493Component } from "./components/app-3959462671085493/app-3959462671085493.component";

// @ts-ignore
import html from './app-7743676550887347.component.html?raw';
// @ts-ignore
import style from './app-7743676550887347.component.scss?inline';

/**
 * COMPONENT: 'app-7743676550887347'
 */

export const App7743676550887347Component = new Component({
  name: 'app-7743676550887347',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7810578347336873Component,
App1351680060833967Component,
App8389760216799005Component,
App3621869344943809Component,
App3959462671085493Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
