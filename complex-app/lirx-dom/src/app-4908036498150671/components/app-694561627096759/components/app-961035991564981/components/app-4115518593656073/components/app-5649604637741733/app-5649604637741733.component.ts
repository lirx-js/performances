import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2702704649596349Component } from "./components/app-2702704649596349/app-2702704649596349.component";
import { App1271698780949421Component } from "./components/app-1271698780949421/app-1271698780949421.component";
import { App6224259995457015Component } from "./components/app-6224259995457015/app-6224259995457015.component";
import { App5176143220548375Component } from "./components/app-5176143220548375/app-5176143220548375.component";
import { App4258671982607283Component } from "./components/app-4258671982607283/app-4258671982607283.component";

// @ts-ignore
import html from './app-5649604637741733.component.html?raw';
// @ts-ignore
import style from './app-5649604637741733.component.scss?inline';

/**
 * COMPONENT: 'app-5649604637741733'
 */

export const App5649604637741733Component = new Component({
  name: 'app-5649604637741733',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2702704649596349Component,
App1271698780949421Component,
App6224259995457015Component,
App5176143220548375Component,
App4258671982607283Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
