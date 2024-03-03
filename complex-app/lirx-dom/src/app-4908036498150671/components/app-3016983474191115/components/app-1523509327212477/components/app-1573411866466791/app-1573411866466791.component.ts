import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5619228529782855Component } from "./components/app-5619228529782855/app-5619228529782855.component";
import { App5814403901211713Component } from "./components/app-5814403901211713/app-5814403901211713.component";
import { App5340455668768047Component } from "./components/app-5340455668768047/app-5340455668768047.component";
import { App8047833998931125Component } from "./components/app-8047833998931125/app-8047833998931125.component";
import { App4707963245589167Component } from "./components/app-4707963245589167/app-4707963245589167.component";

// @ts-ignore
import html from './app-1573411866466791.component.html?raw';
// @ts-ignore
import style from './app-1573411866466791.component.scss?inline';

/**
 * COMPONENT: 'app-1573411866466791'
 */

export const App1573411866466791Component = new Component({
  name: 'app-1573411866466791',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5619228529782855Component,
App5814403901211713Component,
App5340455668768047Component,
App8047833998931125Component,
App4707963245589167Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
