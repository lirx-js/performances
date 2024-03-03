import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App296171042488801Component } from "./components/app-296171042488801/app-296171042488801.component";
import { App5896600771119605Component } from "./components/app-5896600771119605/app-5896600771119605.component";
import { App624831566445563Component } from "./components/app-624831566445563/app-624831566445563.component";
import { App1063795386108915Component } from "./components/app-1063795386108915/app-1063795386108915.component";
import { App3611264778984511Component } from "./components/app-3611264778984511/app-3611264778984511.component";

// @ts-ignore
import html from './app-6988053524107251.component.html?raw';
// @ts-ignore
import style from './app-6988053524107251.component.scss?inline';

/**
 * COMPONENT: 'app-6988053524107251'
 */

export const App6988053524107251Component = new Component({
  name: 'app-6988053524107251',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App296171042488801Component,
App5896600771119605Component,
App624831566445563Component,
App1063795386108915Component,
App3611264778984511Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
