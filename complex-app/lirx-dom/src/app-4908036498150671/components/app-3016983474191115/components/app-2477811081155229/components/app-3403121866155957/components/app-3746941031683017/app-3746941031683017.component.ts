import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1605935717057243Component } from "./components/app-1605935717057243/app-1605935717057243.component";
import { App8804005148420049Component } from "./components/app-8804005148420049/app-8804005148420049.component";
import { App1975076076385473Component } from "./components/app-1975076076385473/app-1975076076385473.component";
import { App7183945968737773Component } from "./components/app-7183945968737773/app-7183945968737773.component";
import { App8823635635676921Component } from "./components/app-8823635635676921/app-8823635635676921.component";

// @ts-ignore
import html from './app-3746941031683017.component.html?raw';
// @ts-ignore
import style from './app-3746941031683017.component.scss?inline';

/**
 * COMPONENT: 'app-3746941031683017'
 */

export const App3746941031683017Component = new Component({
  name: 'app-3746941031683017',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1605935717057243Component,
App8804005148420049Component,
App1975076076385473Component,
App7183945968737773Component,
App8823635635676921Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
