import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1506164257648439Component } from "./components/app-1506164257648439/app-1506164257648439.component";
import { App2740846778660005Component } from "./components/app-2740846778660005/app-2740846778660005.component";
import { App3503650730096187Component } from "./components/app-3503650730096187/app-3503650730096187.component";
import { App8110584872410129Component } from "./components/app-8110584872410129/app-8110584872410129.component";
import { App1882230429047441Component } from "./components/app-1882230429047441/app-1882230429047441.component";

// @ts-ignore
import html from './app-1043475380534073.component.html?raw';
// @ts-ignore
import style from './app-1043475380534073.component.scss?inline';

/**
 * COMPONENT: 'app-1043475380534073'
 */

export const App1043475380534073Component = new Component({
  name: 'app-1043475380534073',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1506164257648439Component,
App2740846778660005Component,
App3503650730096187Component,
App8110584872410129Component,
App1882230429047441Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
