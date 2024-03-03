import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7811595526261547Component } from "./components/app-7811595526261547/app-7811595526261547.component";
import { App8802795046008259Component } from "./components/app-8802795046008259/app-8802795046008259.component";
import { App4294977354564951Component } from "./components/app-4294977354564951/app-4294977354564951.component";
import { App6602207870975213Component } from "./components/app-6602207870975213/app-6602207870975213.component";
import { App2894303919436101Component } from "./components/app-2894303919436101/app-2894303919436101.component";

// @ts-ignore
import html from './app-5446139180064491.component.html?raw';
// @ts-ignore
import style from './app-5446139180064491.component.scss?inline';

/**
 * COMPONENT: 'app-5446139180064491'
 */

export const App5446139180064491Component = new Component({
  name: 'app-5446139180064491',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7811595526261547Component,
App8802795046008259Component,
App4294977354564951Component,
App6602207870975213Component,
App2894303919436101Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
