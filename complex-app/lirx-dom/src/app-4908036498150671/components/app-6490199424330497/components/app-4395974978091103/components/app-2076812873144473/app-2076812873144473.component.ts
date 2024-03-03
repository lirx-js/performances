import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App364633346700633Component } from "./components/app-364633346700633/app-364633346700633.component";
import { App1726951014716549Component } from "./components/app-1726951014716549/app-1726951014716549.component";
import { App5150970489964933Component } from "./components/app-5150970489964933/app-5150970489964933.component";
import { App4859301396093069Component } from "./components/app-4859301396093069/app-4859301396093069.component";
import { App8868494342201661Component } from "./components/app-8868494342201661/app-8868494342201661.component";

// @ts-ignore
import html from './app-2076812873144473.component.html?raw';
// @ts-ignore
import style from './app-2076812873144473.component.scss?inline';

/**
 * COMPONENT: 'app-2076812873144473'
 */

export const App2076812873144473Component = new Component({
  name: 'app-2076812873144473',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App364633346700633Component,
App1726951014716549Component,
App5150970489964933Component,
App4859301396093069Component,
App8868494342201661Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
