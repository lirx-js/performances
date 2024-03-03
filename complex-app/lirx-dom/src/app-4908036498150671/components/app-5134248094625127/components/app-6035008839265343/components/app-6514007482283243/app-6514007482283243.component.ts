import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App8804607696702025Component } from "./components/app-8804607696702025/app-8804607696702025.component";
import { App6136428601896221Component } from "./components/app-6136428601896221/app-6136428601896221.component";
import { App8216808677747061Component } from "./components/app-8216808677747061/app-8216808677747061.component";
import { App7082663395562605Component } from "./components/app-7082663395562605/app-7082663395562605.component";
import { App3583310704189795Component } from "./components/app-3583310704189795/app-3583310704189795.component";

// @ts-ignore
import html from './app-6514007482283243.component.html?raw';
// @ts-ignore
import style from './app-6514007482283243.component.scss?inline';

/**
 * COMPONENT: 'app-6514007482283243'
 */

export const App6514007482283243Component = new Component({
  name: 'app-6514007482283243',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App8804607696702025Component,
App6136428601896221Component,
App8216808677747061Component,
App7082663395562605Component,
App3583310704189795Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
