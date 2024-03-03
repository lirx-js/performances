import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2981684091094995Component } from "./components/app-2981684091094995/app-2981684091094995.component";
import { App2854688862386395Component } from "./components/app-2854688862386395/app-2854688862386395.component";
import { App5614335188583313Component } from "./components/app-5614335188583313/app-5614335188583313.component";
import { App3247638519266285Component } from "./components/app-3247638519266285/app-3247638519266285.component";
import { App1326673686090565Component } from "./components/app-1326673686090565/app-1326673686090565.component";

// @ts-ignore
import html from './app-3110402170987625.component.html?raw';
// @ts-ignore
import style from './app-3110402170987625.component.scss?inline';

/**
 * COMPONENT: 'app-3110402170987625'
 */

export const App3110402170987625Component = new Component({
  name: 'app-3110402170987625',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2981684091094995Component,
App2854688862386395Component,
App5614335188583313Component,
App3247638519266285Component,
App1326673686090565Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
