import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5050972937738085Component } from "./components/app-5050972937738085/app-5050972937738085.component";
import { App6021581693522447Component } from "./components/app-6021581693522447/app-6021581693522447.component";
import { App7335303730973071Component } from "./components/app-7335303730973071/app-7335303730973071.component";
import { App5139599363082385Component } from "./components/app-5139599363082385/app-5139599363082385.component";
import { App6455545179713455Component } from "./components/app-6455545179713455/app-6455545179713455.component";

// @ts-ignore
import html from './app-7458267382680221.component.html?raw';
// @ts-ignore
import style from './app-7458267382680221.component.scss?inline';

/**
 * COMPONENT: 'app-7458267382680221'
 */

export const App7458267382680221Component = new Component({
  name: 'app-7458267382680221',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5050972937738085Component,
App6021581693522447Component,
App7335303730973071Component,
App5139599363082385Component,
App6455545179713455Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
