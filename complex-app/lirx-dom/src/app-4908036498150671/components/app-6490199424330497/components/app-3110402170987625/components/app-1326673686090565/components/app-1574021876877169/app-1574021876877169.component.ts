import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5916231353837569Component } from "./components/app-5916231353837569/app-5916231353837569.component";
import { App1099270688682415Component } from "./components/app-1099270688682415/app-1099270688682415.component";
import { App4246072112028063Component } from "./components/app-4246072112028063/app-4246072112028063.component";
import { App7916763457293851Component } from "./components/app-7916763457293851/app-7916763457293851.component";
import { App7058070421999669Component } from "./components/app-7058070421999669/app-7058070421999669.component";

// @ts-ignore
import html from './app-1574021876877169.component.html?raw';
// @ts-ignore
import style from './app-1574021876877169.component.scss?inline';

/**
 * COMPONENT: 'app-1574021876877169'
 */

export const App1574021876877169Component = new Component({
  name: 'app-1574021876877169',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5916231353837569Component,
App1099270688682415Component,
App4246072112028063Component,
App7916763457293851Component,
App7058070421999669Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
