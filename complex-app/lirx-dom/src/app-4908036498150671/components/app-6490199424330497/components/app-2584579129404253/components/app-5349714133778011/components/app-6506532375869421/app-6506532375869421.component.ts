import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3845184292065057Component } from "./components/app-3845184292065057/app-3845184292065057.component";
import { App8095871836052959Component } from "./components/app-8095871836052959/app-8095871836052959.component";
import { App7667737803029797Component } from "./components/app-7667737803029797/app-7667737803029797.component";
import { App8812949088555973Component } from "./components/app-8812949088555973/app-8812949088555973.component";
import { App7182296573386905Component } from "./components/app-7182296573386905/app-7182296573386905.component";

// @ts-ignore
import html from './app-6506532375869421.component.html?raw';
// @ts-ignore
import style from './app-6506532375869421.component.scss?inline';

/**
 * COMPONENT: 'app-6506532375869421'
 */

export const App6506532375869421Component = new Component({
  name: 'app-6506532375869421',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3845184292065057Component,
App8095871836052959Component,
App7667737803029797Component,
App8812949088555973Component,
App7182296573386905Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
