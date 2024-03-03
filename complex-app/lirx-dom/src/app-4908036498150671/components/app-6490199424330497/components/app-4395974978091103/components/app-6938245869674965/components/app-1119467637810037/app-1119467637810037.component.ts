import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1478870569107867Component } from "./components/app-1478870569107867/app-1478870569107867.component";
import { App4580165707170585Component } from "./components/app-4580165707170585/app-4580165707170585.component";
import { App6666859853622935Component } from "./components/app-6666859853622935/app-6666859853622935.component";
import { App7489047415214019Component } from "./components/app-7489047415214019/app-7489047415214019.component";
import { App6255808679231273Component } from "./components/app-6255808679231273/app-6255808679231273.component";

// @ts-ignore
import html from './app-1119467637810037.component.html?raw';
// @ts-ignore
import style from './app-1119467637810037.component.scss?inline';

/**
 * COMPONENT: 'app-1119467637810037'
 */

export const App1119467637810037Component = new Component({
  name: 'app-1119467637810037',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1478870569107867Component,
App4580165707170585Component,
App6666859853622935Component,
App7489047415214019Component,
App6255808679231273Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
