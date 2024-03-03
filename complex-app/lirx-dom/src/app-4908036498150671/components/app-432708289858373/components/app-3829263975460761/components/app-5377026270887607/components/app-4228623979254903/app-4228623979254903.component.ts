import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2074546592917643Component } from "./components/app-2074546592917643/app-2074546592917643.component";
import { App1331223398135069Component } from "./components/app-1331223398135069/app-1331223398135069.component";
import { App1369152064492991Component } from "./components/app-1369152064492991/app-1369152064492991.component";
import { App1525776563854685Component } from "./components/app-1525776563854685/app-1525776563854685.component";
import { App8639575791397951Component } from "./components/app-8639575791397951/app-8639575791397951.component";

// @ts-ignore
import html from './app-4228623979254903.component.html?raw';
// @ts-ignore
import style from './app-4228623979254903.component.scss?inline';

/**
 * COMPONENT: 'app-4228623979254903'
 */

export const App4228623979254903Component = new Component({
  name: 'app-4228623979254903',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2074546592917643Component,
App1331223398135069Component,
App1369152064492991Component,
App1525776563854685Component,
App8639575791397951Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
