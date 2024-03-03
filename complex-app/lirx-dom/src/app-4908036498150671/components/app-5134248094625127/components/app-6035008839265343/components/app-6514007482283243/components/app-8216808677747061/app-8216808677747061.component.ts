import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App434983516718035Component } from "./components/app-434983516718035/app-434983516718035.component";
import { App3308051171123367Component } from "./components/app-3308051171123367/app-3308051171123367.component";
import { App7107963208020131Component } from "./components/app-7107963208020131/app-7107963208020131.component";
import { App7423688060145341Component } from "./components/app-7423688060145341/app-7423688060145341.component";
import { App2980403754533593Component } from "./components/app-2980403754533593/app-2980403754533593.component";

// @ts-ignore
import html from './app-8216808677747061.component.html?raw';
// @ts-ignore
import style from './app-8216808677747061.component.scss?inline';

/**
 * COMPONENT: 'app-8216808677747061'
 */

export const App8216808677747061Component = new Component({
  name: 'app-8216808677747061',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App434983516718035Component,
App3308051171123367Component,
App7107963208020131Component,
App7423688060145341Component,
App2980403754533593Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
