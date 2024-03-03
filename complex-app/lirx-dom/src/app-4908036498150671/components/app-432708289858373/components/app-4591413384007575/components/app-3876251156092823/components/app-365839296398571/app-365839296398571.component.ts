import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2792484837270963Component } from "./components/app-2792484837270963/app-2792484837270963.component";
import { App6437292637134971Component } from "./components/app-6437292637134971/app-6437292637134971.component";
import { App7068484476763951Component } from "./components/app-7068484476763951/app-7068484476763951.component";
import { App7156374702820367Component } from "./components/app-7156374702820367/app-7156374702820367.component";
import { App3623804993505521Component } from "./components/app-3623804993505521/app-3623804993505521.component";

// @ts-ignore
import html from './app-365839296398571.component.html?raw';
// @ts-ignore
import style from './app-365839296398571.component.scss?inline';

/**
 * COMPONENT: 'app-365839296398571'
 */

export const App365839296398571Component = new Component({
  name: 'app-365839296398571',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2792484837270963Component,
App6437292637134971Component,
App7068484476763951Component,
App7156374702820367Component,
App3623804993505521Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
