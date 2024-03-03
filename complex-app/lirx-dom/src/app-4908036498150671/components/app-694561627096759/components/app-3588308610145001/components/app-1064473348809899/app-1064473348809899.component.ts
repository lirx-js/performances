import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2063310078242999Component } from "./components/app-2063310078242999/app-2063310078242999.component";
import { App6988053524107251Component } from "./components/app-6988053524107251/app-6988053524107251.component";
import { App8861850595770803Component } from "./components/app-8861850595770803/app-8861850595770803.component";
import { App4401580856053225Component } from "./components/app-4401580856053225/app-4401580856053225.component";
import { App6776313898257259Component } from "./components/app-6776313898257259/app-6776313898257259.component";

// @ts-ignore
import html from './app-1064473348809899.component.html?raw';
// @ts-ignore
import style from './app-1064473348809899.component.scss?inline';

/**
 * COMPONENT: 'app-1064473348809899'
 */

export const App1064473348809899Component = new Component({
  name: 'app-1064473348809899',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2063310078242999Component,
App6988053524107251Component,
App8861850595770803Component,
App4401580856053225Component,
App6776313898257259Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
