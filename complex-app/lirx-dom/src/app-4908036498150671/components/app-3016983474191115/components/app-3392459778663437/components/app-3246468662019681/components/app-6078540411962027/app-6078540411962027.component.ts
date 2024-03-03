import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3351481829939069Component } from "./components/app-3351481829939069/app-3351481829939069.component";
import { App124116971641261Component } from "./components/app-124116971641261/app-124116971641261.component";
import { App83655622503319Component } from "./components/app-83655622503319/app-83655622503319.component";
import { App6234958594358705Component } from "./components/app-6234958594358705/app-6234958594358705.component";
import { App1703947220687317Component } from "./components/app-1703947220687317/app-1703947220687317.component";

// @ts-ignore
import html from './app-6078540411962027.component.html?raw';
// @ts-ignore
import style from './app-6078540411962027.component.scss?inline';

/**
 * COMPONENT: 'app-6078540411962027'
 */

export const App6078540411962027Component = new Component({
  name: 'app-6078540411962027',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3351481829939069Component,
App124116971641261Component,
App83655622503319Component,
App6234958594358705Component,
App1703947220687317Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
