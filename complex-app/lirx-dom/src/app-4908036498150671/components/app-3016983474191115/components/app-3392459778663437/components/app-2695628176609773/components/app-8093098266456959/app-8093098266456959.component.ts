import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2026647507203379Component } from "./components/app-2026647507203379/app-2026647507203379.component";
import { App4520846470706455Component } from "./components/app-4520846470706455/app-4520846470706455.component";
import { App8740301672005489Component } from "./components/app-8740301672005489/app-8740301672005489.component";
import { App4947592897251959Component } from "./components/app-4947592897251959/app-4947592897251959.component";
import { App271169686099443Component } from "./components/app-271169686099443/app-271169686099443.component";

// @ts-ignore
import html from './app-8093098266456959.component.html?raw';
// @ts-ignore
import style from './app-8093098266456959.component.scss?inline';

/**
 * COMPONENT: 'app-8093098266456959'
 */

export const App8093098266456959Component = new Component({
  name: 'app-8093098266456959',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2026647507203379Component,
App4520846470706455Component,
App8740301672005489Component,
App4947592897251959Component,
App271169686099443Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
