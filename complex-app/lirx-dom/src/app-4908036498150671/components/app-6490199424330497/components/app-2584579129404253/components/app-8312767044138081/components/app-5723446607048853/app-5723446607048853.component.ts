import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7284129787543255Component } from "./components/app-7284129787543255/app-7284129787543255.component";
import { App4301546212514031Component } from "./components/app-4301546212514031/app-4301546212514031.component";
import { App8645566502244803Component } from "./components/app-8645566502244803/app-8645566502244803.component";
import { App7024913237174781Component } from "./components/app-7024913237174781/app-7024913237174781.component";
import { App2680963138628979Component } from "./components/app-2680963138628979/app-2680963138628979.component";

// @ts-ignore
import html from './app-5723446607048853.component.html?raw';
// @ts-ignore
import style from './app-5723446607048853.component.scss?inline';

/**
 * COMPONENT: 'app-5723446607048853'
 */

export const App5723446607048853Component = new Component({
  name: 'app-5723446607048853',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7284129787543255Component,
App4301546212514031Component,
App8645566502244803Component,
App7024913237174781Component,
App2680963138628979Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
