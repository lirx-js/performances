import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7406296774785557Component } from "./components/app-7406296774785557/app-7406296774785557.component";
import { App8955129970813035Component } from "./components/app-8955129970813035/app-8955129970813035.component";
import { App5961758764356921Component } from "./components/app-5961758764356921/app-5961758764356921.component";
import { App4730359747009157Component } from "./components/app-4730359747009157/app-4730359747009157.component";
import { App6729519646961673Component } from "./components/app-6729519646961673/app-6729519646961673.component";

// @ts-ignore
import html from './app-5619228529782855.component.html?raw';
// @ts-ignore
import style from './app-5619228529782855.component.scss?inline';

/**
 * COMPONENT: 'app-5619228529782855'
 */

export const App5619228529782855Component = new Component({
  name: 'app-5619228529782855',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7406296774785557Component,
App8955129970813035Component,
App5961758764356921Component,
App4730359747009157Component,
App6729519646961673Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
