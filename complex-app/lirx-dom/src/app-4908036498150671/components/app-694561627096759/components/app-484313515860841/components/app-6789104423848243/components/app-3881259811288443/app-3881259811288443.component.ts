import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3249536767655361Component } from "./components/app-3249536767655361/app-3249536767655361.component";
import { App2630413498814705Component } from "./components/app-2630413498814705/app-2630413498814705.component";
import { App4484228695371685Component } from "./components/app-4484228695371685/app-4484228695371685.component";
import { App5999480495966581Component } from "./components/app-5999480495966581/app-5999480495966581.component";
import { App4074408537713307Component } from "./components/app-4074408537713307/app-4074408537713307.component";

// @ts-ignore
import html from './app-3881259811288443.component.html?raw';
// @ts-ignore
import style from './app-3881259811288443.component.scss?inline';

/**
 * COMPONENT: 'app-3881259811288443'
 */

export const App3881259811288443Component = new Component({
  name: 'app-3881259811288443',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3249536767655361Component,
App2630413498814705Component,
App4484228695371685Component,
App5999480495966581Component,
App4074408537713307Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
