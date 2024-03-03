import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App5760211742973591Component } from "./components/app-5760211742973591/app-5760211742973591.component";
import { App3015325138920447Component } from "./components/app-3015325138920447/app-3015325138920447.component";
import { App6778577461390443Component } from "./components/app-6778577461390443/app-6778577461390443.component";
import { App7884100157569951Component } from "./components/app-7884100157569951/app-7884100157569951.component";
import { App7913769033546455Component } from "./components/app-7913769033546455/app-7913769033546455.component";

// @ts-ignore
import html from './app-5950966929426777.component.html?raw';
// @ts-ignore
import style from './app-5950966929426777.component.scss?inline';

/**
 * COMPONENT: 'app-5950966929426777'
 */

export const App5950966929426777Component = new Component({
  name: 'app-5950966929426777',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App5760211742973591Component,
App3015325138920447Component,
App6778577461390443Component,
App7884100157569951Component,
App7913769033546455Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
