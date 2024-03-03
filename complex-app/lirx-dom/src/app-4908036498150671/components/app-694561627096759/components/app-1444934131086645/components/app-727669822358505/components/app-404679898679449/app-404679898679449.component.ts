import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App404017596951241Component } from "./components/app-404017596951241/app-404017596951241.component";
import { App3240199953522471Component } from "./components/app-3240199953522471/app-3240199953522471.component";
import { App102702690459317Component } from "./components/app-102702690459317/app-102702690459317.component";
import { App4401425727167817Component } from "./components/app-4401425727167817/app-4401425727167817.component";
import { App8914325258693673Component } from "./components/app-8914325258693673/app-8914325258693673.component";

// @ts-ignore
import html from './app-404679898679449.component.html?raw';
// @ts-ignore
import style from './app-404679898679449.component.scss?inline';

/**
 * COMPONENT: 'app-404679898679449'
 */

export const App404679898679449Component = new Component({
  name: 'app-404679898679449',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App404017596951241Component,
App3240199953522471Component,
App102702690459317Component,
App4401425727167817Component,
App8914325258693673Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
