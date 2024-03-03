import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7999670034498591Component } from "./components/app-7999670034498591/app-7999670034498591.component";
import { App2094868433849553Component } from "./components/app-2094868433849553/app-2094868433849553.component";
import { App58339453034223Component } from "./components/app-58339453034223/app-58339453034223.component";
import { App3158831827350455Component } from "./components/app-3158831827350455/app-3158831827350455.component";
import { App5382489256576051Component } from "./components/app-5382489256576051/app-5382489256576051.component";

// @ts-ignore
import html from './app-5477819044925045.component.html?raw';
// @ts-ignore
import style from './app-5477819044925045.component.scss?inline';

/**
 * COMPONENT: 'app-5477819044925045'
 */

export const App5477819044925045Component = new Component({
  name: 'app-5477819044925045',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7999670034498591Component,
App2094868433849553Component,
App58339453034223Component,
App3158831827350455Component,
App5382489256576051Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
