import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7411266940110559Component } from "./components/app-7411266940110559/app-7411266940110559.component";
import { App8725625719779601Component } from "./components/app-8725625719779601/app-8725625719779601.component";
import { App1713979805885613Component } from "./components/app-1713979805885613/app-1713979805885613.component";
import { App7319279352663535Component } from "./components/app-7319279352663535/app-7319279352663535.component";
import { App229426307353063Component } from "./components/app-229426307353063/app-229426307353063.component";

// @ts-ignore
import html from './app-588649663010157.component.html?raw';
// @ts-ignore
import style from './app-588649663010157.component.scss?inline';

/**
 * COMPONENT: 'app-588649663010157'
 */

export const App588649663010157Component = new Component({
  name: 'app-588649663010157',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7411266940110559Component,
App8725625719779601Component,
App1713979805885613Component,
App7319279352663535Component,
App229426307353063Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
