import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App1076162232944111Component } from "./components/app-1076162232944111/app-1076162232944111.component";
import { App7763555228056101Component } from "./components/app-7763555228056101/app-7763555228056101.component";
import { App7129561995466053Component } from "./components/app-7129561995466053/app-7129561995466053.component";
import { App5234811915688341Component } from "./components/app-5234811915688341/app-5234811915688341.component";
import { App2186785150156463Component } from "./components/app-2186785150156463/app-2186785150156463.component";

// @ts-ignore
import html from './app-8868494342201661.component.html?raw';
// @ts-ignore
import style from './app-8868494342201661.component.scss?inline';

/**
 * COMPONENT: 'app-8868494342201661'
 */

export const App8868494342201661Component = new Component({
  name: 'app-8868494342201661',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App1076162232944111Component,
App7763555228056101Component,
App7129561995466053Component,
App5234811915688341Component,
App2186785150156463Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
