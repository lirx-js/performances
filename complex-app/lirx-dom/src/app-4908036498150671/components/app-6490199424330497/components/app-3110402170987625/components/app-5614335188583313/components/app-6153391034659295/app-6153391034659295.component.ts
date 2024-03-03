import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7117726389090839Component } from "./components/app-7117726389090839/app-7117726389090839.component";
import { App777850196920445Component } from "./components/app-777850196920445/app-777850196920445.component";
import { App8895371327666815Component } from "./components/app-8895371327666815/app-8895371327666815.component";
import { App5583049951145923Component } from "./components/app-5583049951145923/app-5583049951145923.component";
import { App6386011684670981Component } from "./components/app-6386011684670981/app-6386011684670981.component";

// @ts-ignore
import html from './app-6153391034659295.component.html?raw';
// @ts-ignore
import style from './app-6153391034659295.component.scss?inline';

/**
 * COMPONENT: 'app-6153391034659295'
 */

export const App6153391034659295Component = new Component({
  name: 'app-6153391034659295',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7117726389090839Component,
App777850196920445Component,
App8895371327666815Component,
App5583049951145923Component,
App6386011684670981Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
