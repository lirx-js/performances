import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5954314395247091Component } from "./components/app-5954314395247091/app-5954314395247091.component";
import { App7049590130684881Component } from "./components/app-7049590130684881/app-7049590130684881.component";
import { App487435723884303Component } from "./components/app-487435723884303/app-487435723884303.component";
import { App1021027532182207Component } from "./components/app-1021027532182207/app-1021027532182207.component";
import { App4573241500447501Component } from "./components/app-4573241500447501/app-4573241500447501.component";

// @ts-ignore
import html from './app-6062328414959545.component.html?raw';
// @ts-ignore
import style from './app-6062328414959545.component.scss?inline';

/**
 * COMPONENT: 'app-6062328414959545'
 */

export const App6062328414959545Component = new Component({
  name: 'app-6062328414959545',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5954314395247091Component,
App7049590130684881Component,
App487435723884303Component,
App1021027532182207Component,
App4573241500447501Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
