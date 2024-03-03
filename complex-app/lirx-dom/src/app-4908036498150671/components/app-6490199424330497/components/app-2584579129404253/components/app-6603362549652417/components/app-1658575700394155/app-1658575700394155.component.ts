import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3713175528757603Component } from "./components/app-3713175528757603/app-3713175528757603.component";
import { App7598311004955643Component } from "./components/app-7598311004955643/app-7598311004955643.component";
import { App1946950052768213Component } from "./components/app-1946950052768213/app-1946950052768213.component";
import { App7902386564498329Component } from "./components/app-7902386564498329/app-7902386564498329.component";
import { App2436156532485625Component } from "./components/app-2436156532485625/app-2436156532485625.component";

// @ts-ignore
import html from './app-1658575700394155.component.html?raw';
// @ts-ignore
import style from './app-1658575700394155.component.scss?inline';

/**
 * COMPONENT: 'app-1658575700394155'
 */

export const App1658575700394155Component = new Component({
  name: 'app-1658575700394155',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3713175528757603Component,
App7598311004955643Component,
App1946950052768213Component,
App7902386564498329Component,
App2436156532485625Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
