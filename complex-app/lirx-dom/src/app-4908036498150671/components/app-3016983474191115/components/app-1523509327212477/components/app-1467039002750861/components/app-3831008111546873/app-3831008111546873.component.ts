import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8576940991016389Component } from "./components/app-8576940991016389/app-8576940991016389.component";
import { App4895888065449767Component } from "./components/app-4895888065449767/app-4895888065449767.component";
import { App2886037814210535Component } from "./components/app-2886037814210535/app-2886037814210535.component";
import { App100597646678737Component } from "./components/app-100597646678737/app-100597646678737.component";
import { App4447541910131315Component } from "./components/app-4447541910131315/app-4447541910131315.component";

// @ts-ignore
import html from './app-3831008111546873.component.html?raw';
// @ts-ignore
import style from './app-3831008111546873.component.scss?inline';

/**
 * COMPONENT: 'app-3831008111546873'
 */

export const App3831008111546873Component = new Component({
  name: 'app-3831008111546873',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8576940991016389Component,
App4895888065449767Component,
App2886037814210535Component,
App100597646678737Component,
App4447541910131315Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
