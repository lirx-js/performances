import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3816793219848223Component } from "./components/app-3816793219848223/app-3816793219848223.component";
import { App5664252562321241Component } from "./components/app-5664252562321241/app-5664252562321241.component";
import { App6494204713073113Component } from "./components/app-6494204713073113/app-6494204713073113.component";
import { App862898662034717Component } from "./components/app-862898662034717/app-862898662034717.component";
import { App3214158083647939Component } from "./components/app-3214158083647939/app-3214158083647939.component";

// @ts-ignore
import html from './app-4893205329956819.component.html?raw';
// @ts-ignore
import style from './app-4893205329956819.component.scss?inline';

/**
 * COMPONENT: 'app-4893205329956819'
 */

export const App4893205329956819Component = new Component({
  name: 'app-4893205329956819',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3816793219848223Component,
App5664252562321241Component,
App6494204713073113Component,
App862898662034717Component,
App3214158083647939Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
