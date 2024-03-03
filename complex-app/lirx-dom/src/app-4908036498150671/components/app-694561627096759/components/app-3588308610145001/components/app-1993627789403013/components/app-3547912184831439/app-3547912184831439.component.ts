import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App38170839915315Component } from "./components/app-38170839915315/app-38170839915315.component";
import { App4850339769894969Component } from "./components/app-4850339769894969/app-4850339769894969.component";
import { App2027291879430031Component } from "./components/app-2027291879430031/app-2027291879430031.component";
import { App6010366608143655Component } from "./components/app-6010366608143655/app-6010366608143655.component";
import { App1985787437475425Component } from "./components/app-1985787437475425/app-1985787437475425.component";

// @ts-ignore
import html from './app-3547912184831439.component.html?raw';
// @ts-ignore
import style from './app-3547912184831439.component.scss?inline';

/**
 * COMPONENT: 'app-3547912184831439'
 */

export const App3547912184831439Component = new Component({
  name: 'app-3547912184831439',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App38170839915315Component,
App4850339769894969Component,
App2027291879430031Component,
App6010366608143655Component,
App1985787437475425Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
