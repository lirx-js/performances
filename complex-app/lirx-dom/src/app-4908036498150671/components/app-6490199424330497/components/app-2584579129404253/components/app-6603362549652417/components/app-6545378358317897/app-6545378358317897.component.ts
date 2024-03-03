import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5610125379731827Component } from "./components/app-5610125379731827/app-5610125379731827.component";
import { App2644193857305961Component } from "./components/app-2644193857305961/app-2644193857305961.component";
import { App6291262083082045Component } from "./components/app-6291262083082045/app-6291262083082045.component";
import { App2467445557305707Component } from "./components/app-2467445557305707/app-2467445557305707.component";
import { App2898418576118565Component } from "./components/app-2898418576118565/app-2898418576118565.component";

// @ts-ignore
import html from './app-6545378358317897.component.html?raw';
// @ts-ignore
import style from './app-6545378358317897.component.scss?inline';

/**
 * COMPONENT: 'app-6545378358317897'
 */

export const App6545378358317897Component = new Component({
  name: 'app-6545378358317897',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5610125379731827Component,
App2644193857305961Component,
App6291262083082045Component,
App2467445557305707Component,
App2898418576118565Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
