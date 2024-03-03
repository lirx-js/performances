import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6919767708289365Component } from "./components/app-6919767708289365/app-6919767708289365.component";
import { App2899561369221057Component } from "./components/app-2899561369221057/app-2899561369221057.component";
import { App6271441607525315Component } from "./components/app-6271441607525315/app-6271441607525315.component";
import { App3419440903232423Component } from "./components/app-3419440903232423/app-3419440903232423.component";
import { App2537399683111033Component } from "./components/app-2537399683111033/app-2537399683111033.component";

// @ts-ignore
import html from './app-3497610344157151.component.html?raw';
// @ts-ignore
import style from './app-3497610344157151.component.scss?inline';

/**
 * COMPONENT: 'app-3497610344157151'
 */

export const App3497610344157151Component = new Component({
  name: 'app-3497610344157151',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6919767708289365Component,
App2899561369221057Component,
App6271441607525315Component,
App3419440903232423Component,
App2537399683111033Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
