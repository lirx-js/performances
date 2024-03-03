import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1464421381886351Component } from "./components/app-1464421381886351/app-1464421381886351.component";
import { App3991057131850427Component } from "./components/app-3991057131850427/app-3991057131850427.component";
import { App3621554265517585Component } from "./components/app-3621554265517585/app-3621554265517585.component";
import { App2321438776135565Component } from "./components/app-2321438776135565/app-2321438776135565.component";
import { App8219660958974131Component } from "./components/app-8219660958974131/app-8219660958974131.component";

// @ts-ignore
import html from './app-6845085419814861.component.html?raw';
// @ts-ignore
import style from './app-6845085419814861.component.scss?inline';

/**
 * COMPONENT: 'app-6845085419814861'
 */

export const App6845085419814861Component = new Component({
  name: 'app-6845085419814861',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1464421381886351Component,
App3991057131850427Component,
App3621554265517585Component,
App2321438776135565Component,
App8219660958974131Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
