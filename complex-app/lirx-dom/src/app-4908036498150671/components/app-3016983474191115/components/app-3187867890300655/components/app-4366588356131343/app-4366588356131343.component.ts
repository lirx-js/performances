import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5373569979331521Component } from "./components/app-5373569979331521/app-5373569979331521.component";
import { App4049404372923265Component } from "./components/app-4049404372923265/app-4049404372923265.component";
import { App2306805621117049Component } from "./components/app-2306805621117049/app-2306805621117049.component";
import { App4962854763773787Component } from "./components/app-4962854763773787/app-4962854763773787.component";
import { App7877399997174527Component } from "./components/app-7877399997174527/app-7877399997174527.component";

// @ts-ignore
import html from './app-4366588356131343.component.html?raw';
// @ts-ignore
import style from './app-4366588356131343.component.scss?inline';

/**
 * COMPONENT: 'app-4366588356131343'
 */

export const App4366588356131343Component = new Component({
  name: 'app-4366588356131343',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5373569979331521Component,
App4049404372923265Component,
App2306805621117049Component,
App4962854763773787Component,
App7877399997174527Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
