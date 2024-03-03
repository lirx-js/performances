import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3988925103960631Component } from "./components/app-3988925103960631/app-3988925103960631.component";
import { App3876251156092823Component } from "./components/app-3876251156092823/app-3876251156092823.component";
import { App6849546379505783Component } from "./components/app-6849546379505783/app-6849546379505783.component";
import { App2683727142800651Component } from "./components/app-2683727142800651/app-2683727142800651.component";
import { App4971192747243511Component } from "./components/app-4971192747243511/app-4971192747243511.component";

// @ts-ignore
import html from './app-4591413384007575.component.html?raw';
// @ts-ignore
import style from './app-4591413384007575.component.scss?inline';

/**
 * COMPONENT: 'app-4591413384007575'
 */

export const App4591413384007575Component = new Component({
  name: 'app-4591413384007575',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3988925103960631Component,
App3876251156092823Component,
App6849546379505783Component,
App2683727142800651Component,
App4971192747243511Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
