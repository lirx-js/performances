import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5303514996685081Component } from "./components/app-5303514996685081/app-5303514996685081.component";
import { App6625718650396779Component } from "./components/app-6625718650396779/app-6625718650396779.component";
import { App5243954220553593Component } from "./components/app-5243954220553593/app-5243954220553593.component";
import { App3982529740385043Component } from "./components/app-3982529740385043/app-3982529740385043.component";
import { App6726258585643769Component } from "./components/app-6726258585643769/app-6726258585643769.component";

// @ts-ignore
import html from './app-907861846989087.component.html?raw';
// @ts-ignore
import style from './app-907861846989087.component.scss?inline';

/**
 * COMPONENT: 'app-907861846989087'
 */

export const App907861846989087Component = new Component({
  name: 'app-907861846989087',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5303514996685081Component,
App6625718650396779Component,
App5243954220553593Component,
App3982529740385043Component,
App6726258585643769Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
