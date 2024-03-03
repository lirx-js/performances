import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6573931713735567Component } from "./components/app-6573931713735567/app-6573931713735567.component";
import { App7079873332248625Component } from "./components/app-7079873332248625/app-7079873332248625.component";
import { App5468893428583145Component } from "./components/app-5468893428583145/app-5468893428583145.component";
import { App1409025737943011Component } from "./components/app-1409025737943011/app-1409025737943011.component";
import { App371656111211769Component } from "./components/app-371656111211769/app-371656111211769.component";

// @ts-ignore
import html from './app-6191276847870377.component.html?raw';
// @ts-ignore
import style from './app-6191276847870377.component.scss?inline';

/**
 * COMPONENT: 'app-6191276847870377'
 */

export const App6191276847870377Component = new Component({
  name: 'app-6191276847870377',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6573931713735567Component,
App7079873332248625Component,
App5468893428583145Component,
App1409025737943011Component,
App371656111211769Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
