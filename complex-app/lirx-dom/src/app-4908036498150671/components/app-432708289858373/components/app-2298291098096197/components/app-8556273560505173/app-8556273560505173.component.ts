import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3871693314051379Component } from "./components/app-3871693314051379/app-3871693314051379.component";
import { App281595631340361Component } from "./components/app-281595631340361/app-281595631340361.component";
import { App169066489907137Component } from "./components/app-169066489907137/app-169066489907137.component";
import { App6524164466127485Component } from "./components/app-6524164466127485/app-6524164466127485.component";
import { App3037600964150699Component } from "./components/app-3037600964150699/app-3037600964150699.component";

// @ts-ignore
import html from './app-8556273560505173.component.html?raw';
// @ts-ignore
import style from './app-8556273560505173.component.scss?inline';

/**
 * COMPONENT: 'app-8556273560505173'
 */

export const App8556273560505173Component = new Component({
  name: 'app-8556273560505173',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3871693314051379Component,
App281595631340361Component,
App169066489907137Component,
App6524164466127485Component,
App3037600964150699Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
