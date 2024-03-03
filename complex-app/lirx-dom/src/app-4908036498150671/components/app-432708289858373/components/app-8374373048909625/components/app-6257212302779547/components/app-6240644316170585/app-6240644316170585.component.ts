import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8936466501415321Component } from "./components/app-8936466501415321/app-8936466501415321.component";
import { App3219617103775383Component } from "./components/app-3219617103775383/app-3219617103775383.component";
import { App5387725353453215Component } from "./components/app-5387725353453215/app-5387725353453215.component";
import { App1302596906726585Component } from "./components/app-1302596906726585/app-1302596906726585.component";
import { App1272954856027557Component } from "./components/app-1272954856027557/app-1272954856027557.component";

// @ts-ignore
import html from './app-6240644316170585.component.html?raw';
// @ts-ignore
import style from './app-6240644316170585.component.scss?inline';

/**
 * COMPONENT: 'app-6240644316170585'
 */

export const App6240644316170585Component = new Component({
  name: 'app-6240644316170585',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8936466501415321Component,
App3219617103775383Component,
App5387725353453215Component,
App1302596906726585Component,
App1272954856027557Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
