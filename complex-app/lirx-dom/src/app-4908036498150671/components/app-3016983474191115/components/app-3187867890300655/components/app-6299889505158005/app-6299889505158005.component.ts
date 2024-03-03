import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3714414710518467Component } from "./components/app-3714414710518467/app-3714414710518467.component";
import { App7929105873180545Component } from "./components/app-7929105873180545/app-7929105873180545.component";
import { App3684431644453511Component } from "./components/app-3684431644453511/app-3684431644453511.component";
import { App4876774809595069Component } from "./components/app-4876774809595069/app-4876774809595069.component";
import { App4997932729105469Component } from "./components/app-4997932729105469/app-4997932729105469.component";

// @ts-ignore
import html from './app-6299889505158005.component.html?raw';
// @ts-ignore
import style from './app-6299889505158005.component.scss?inline';

/**
 * COMPONENT: 'app-6299889505158005'
 */

export const App6299889505158005Component = new Component({
  name: 'app-6299889505158005',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3714414710518467Component,
App7929105873180545Component,
App3684431644453511Component,
App4876774809595069Component,
App4997932729105469Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
