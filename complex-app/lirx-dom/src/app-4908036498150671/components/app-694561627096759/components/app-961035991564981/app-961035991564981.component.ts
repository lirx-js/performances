import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8990035455753551Component } from "./components/app-8990035455753551/app-8990035455753551.component";
import { App5704214079576561Component } from "./components/app-5704214079576561/app-5704214079576561.component";
import { App1231455736356119Component } from "./components/app-1231455736356119/app-1231455736356119.component";
import { App6276093697939651Component } from "./components/app-6276093697939651/app-6276093697939651.component";
import { App4115518593656073Component } from "./components/app-4115518593656073/app-4115518593656073.component";

// @ts-ignore
import html from './app-961035991564981.component.html?raw';
// @ts-ignore
import style from './app-961035991564981.component.scss?inline';

/**
 * COMPONENT: 'app-961035991564981'
 */

export const App961035991564981Component = new Component({
  name: 'app-961035991564981',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8990035455753551Component,
App5704214079576561Component,
App1231455736356119Component,
App6276093697939651Component,
App4115518593656073Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
