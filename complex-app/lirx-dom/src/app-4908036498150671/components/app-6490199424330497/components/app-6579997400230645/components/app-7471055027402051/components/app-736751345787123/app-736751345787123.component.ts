import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7828858888498001Component } from "./components/app-7828858888498001/app-7828858888498001.component";
import { App5356228290170235Component } from "./components/app-5356228290170235/app-5356228290170235.component";
import { App2151913351296711Component } from "./components/app-2151913351296711/app-2151913351296711.component";
import { App6563038725844793Component } from "./components/app-6563038725844793/app-6563038725844793.component";
import { App4420034572040623Component } from "./components/app-4420034572040623/app-4420034572040623.component";

// @ts-ignore
import html from './app-736751345787123.component.html?raw';
// @ts-ignore
import style from './app-736751345787123.component.scss?inline';

/**
 * COMPONENT: 'app-736751345787123'
 */

export const App736751345787123Component = new Component({
  name: 'app-736751345787123',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7828858888498001Component,
App5356228290170235Component,
App2151913351296711Component,
App6563038725844793Component,
App4420034572040623Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
