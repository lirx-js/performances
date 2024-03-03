import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App933637406823651Component } from "./components/app-933637406823651/app-933637406823651.component";
import { App3703024089960595Component } from "./components/app-3703024089960595/app-3703024089960595.component";
import { App1038637371019129Component } from "./components/app-1038637371019129/app-1038637371019129.component";
import { App8573879497081491Component } from "./components/app-8573879497081491/app-8573879497081491.component";
import { App7260642350045997Component } from "./components/app-7260642350045997/app-7260642350045997.component";

// @ts-ignore
import html from './app-5572059063362579.component.html?raw';
// @ts-ignore
import style from './app-5572059063362579.component.scss?inline';

/**
 * COMPONENT: 'app-5572059063362579'
 */

export const App5572059063362579Component = new Component({
  name: 'app-5572059063362579',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App933637406823651Component,
App3703024089960595Component,
App1038637371019129Component,
App8573879497081491Component,
App7260642350045997Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
