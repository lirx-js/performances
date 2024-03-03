import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5953063270001435Component } from "./components/app-5953063270001435/app-5953063270001435.component";
import { App4117343235227823Component } from "./components/app-4117343235227823/app-4117343235227823.component";
import { App4440971093993361Component } from "./components/app-4440971093993361/app-4440971093993361.component";
import { App7342671641399171Component } from "./components/app-7342671641399171/app-7342671641399171.component";
import { App2821303881553821Component } from "./components/app-2821303881553821/app-2821303881553821.component";

// @ts-ignore
import html from './app-3937179629875241.component.html?raw';
// @ts-ignore
import style from './app-3937179629875241.component.scss?inline';

/**
 * COMPONENT: 'app-3937179629875241'
 */

export const App3937179629875241Component = new Component({
  name: 'app-3937179629875241',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5953063270001435Component,
App4117343235227823Component,
App4440971093993361Component,
App7342671641399171Component,
App2821303881553821Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
