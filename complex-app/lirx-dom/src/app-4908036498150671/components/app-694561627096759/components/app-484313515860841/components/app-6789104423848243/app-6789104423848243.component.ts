import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3881259811288443Component } from "./components/app-3881259811288443/app-3881259811288443.component";
import { App7140877133579961Component } from "./components/app-7140877133579961/app-7140877133579961.component";
import { App6134316839579415Component } from "./components/app-6134316839579415/app-6134316839579415.component";
import { App4146753150824953Component } from "./components/app-4146753150824953/app-4146753150824953.component";
import { App1609743603356381Component } from "./components/app-1609743603356381/app-1609743603356381.component";

// @ts-ignore
import html from './app-6789104423848243.component.html?raw';
// @ts-ignore
import style from './app-6789104423848243.component.scss?inline';

/**
 * COMPONENT: 'app-6789104423848243'
 */

export const App6789104423848243Component = new Component({
  name: 'app-6789104423848243',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3881259811288443Component,
App7140877133579961Component,
App6134316839579415Component,
App4146753150824953Component,
App1609743603356381Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
