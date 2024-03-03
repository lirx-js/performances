import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3335335705930621Component } from "./components/app-3335335705930621/app-3335335705930621.component";
import { App5588191351988197Component } from "./components/app-5588191351988197/app-5588191351988197.component";
import { App5895574266431597Component } from "./components/app-5895574266431597/app-5895574266431597.component";
import { App4853560746161321Component } from "./components/app-4853560746161321/app-4853560746161321.component";
import { App4051115550672257Component } from "./components/app-4051115550672257/app-4051115550672257.component";

// @ts-ignore
import html from './app-69803573406485.component.html?raw';
// @ts-ignore
import style from './app-69803573406485.component.scss?inline';

/**
 * COMPONENT: 'app-69803573406485'
 */

export const App69803573406485Component = new Component({
  name: 'app-69803573406485',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3335335705930621Component,
App5588191351988197Component,
App5895574266431597Component,
App4853560746161321Component,
App4051115550672257Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
