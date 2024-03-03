import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1690549582553579Component } from "./components/app-1690549582553579/app-1690549582553579.component";
import { App4594470418832011Component } from "./components/app-4594470418832011/app-4594470418832011.component";
import { App628855837666293Component } from "./components/app-628855837666293/app-628855837666293.component";
import { App5938520533279653Component } from "./components/app-5938520533279653/app-5938520533279653.component";
import { App919741087420979Component } from "./components/app-919741087420979/app-919741087420979.component";

// @ts-ignore
import html from './app-6417072517962335.component.html?raw';
// @ts-ignore
import style from './app-6417072517962335.component.scss?inline';

/**
 * COMPONENT: 'app-6417072517962335'
 */

export const App6417072517962335Component = new Component({
  name: 'app-6417072517962335',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1690549582553579Component,
App4594470418832011Component,
App628855837666293Component,
App5938520533279653Component,
App919741087420979Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
