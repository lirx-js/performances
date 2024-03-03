import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7563674467868407Component } from "./components/app-7563674467868407/app-7563674467868407.component";
import { App4273819759743815Component } from "./components/app-4273819759743815/app-4273819759743815.component";
import { App5985603886244861Component } from "./components/app-5985603886244861/app-5985603886244861.component";
import { App4296397157223383Component } from "./components/app-4296397157223383/app-4296397157223383.component";
import { App5171511346212719Component } from "./components/app-5171511346212719/app-5171511346212719.component";

// @ts-ignore
import html from './app-4431685095232067.component.html?raw';
// @ts-ignore
import style from './app-4431685095232067.component.scss?inline';

/**
 * COMPONENT: 'app-4431685095232067'
 */

export const App4431685095232067Component = new Component({
  name: 'app-4431685095232067',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7563674467868407Component,
App4273819759743815Component,
App5985603886244861Component,
App4296397157223383Component,
App5171511346212719Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
