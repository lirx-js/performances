import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App3158748904059725Component } from "./components/app-3158748904059725/app-3158748904059725.component";
import { App3804587332687155Component } from "./components/app-3804587332687155/app-3804587332687155.component";
import { App7001422629879773Component } from "./components/app-7001422629879773/app-7001422629879773.component";
import { App5692936247604001Component } from "./components/app-5692936247604001/app-5692936247604001.component";
import { App4850632913310821Component } from "./components/app-4850632913310821/app-4850632913310821.component";

// @ts-ignore
import html from './app-1267944310181423.component.html?raw';
// @ts-ignore
import style from './app-1267944310181423.component.scss?inline';

/**
 * COMPONENT: 'app-1267944310181423'
 */

export const App1267944310181423Component = new Component({
  name: 'app-1267944310181423',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App3158748904059725Component,
App3804587332687155Component,
App7001422629879773Component,
App5692936247604001Component,
App4850632913310821Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
