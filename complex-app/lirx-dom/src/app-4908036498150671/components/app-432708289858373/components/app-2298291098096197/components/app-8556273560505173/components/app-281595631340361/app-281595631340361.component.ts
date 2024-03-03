import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5725761662936685Component } from "./components/app-5725761662936685/app-5725761662936685.component";
import { App6914117198643277Component } from "./components/app-6914117198643277/app-6914117198643277.component";
import { App3226234735811943Component } from "./components/app-3226234735811943/app-3226234735811943.component";
import { App3524716430602293Component } from "./components/app-3524716430602293/app-3524716430602293.component";
import { App587081425155455Component } from "./components/app-587081425155455/app-587081425155455.component";

// @ts-ignore
import html from './app-281595631340361.component.html?raw';
// @ts-ignore
import style from './app-281595631340361.component.scss?inline';

/**
 * COMPONENT: 'app-281595631340361'
 */

export const App281595631340361Component = new Component({
  name: 'app-281595631340361',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5725761662936685Component,
App6914117198643277Component,
App3226234735811943Component,
App3524716430602293Component,
App587081425155455Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
