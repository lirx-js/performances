import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5451807793492229Component } from "./components/app-5451807793492229/app-5451807793492229.component";
import { App7168747475596869Component } from "./components/app-7168747475596869/app-7168747475596869.component";
import { App7675041644542999Component } from "./components/app-7675041644542999/app-7675041644542999.component";
import { App4047487398929893Component } from "./components/app-4047487398929893/app-4047487398929893.component";
import { App1865743038371479Component } from "./components/app-1865743038371479/app-1865743038371479.component";

// @ts-ignore
import html from './app-364633346700633.component.html?raw';
// @ts-ignore
import style from './app-364633346700633.component.scss?inline';

/**
 * COMPONENT: 'app-364633346700633'
 */

export const App364633346700633Component = new Component({
  name: 'app-364633346700633',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5451807793492229Component,
App7168747475596869Component,
App7675041644542999Component,
App4047487398929893Component,
App1865743038371479Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
