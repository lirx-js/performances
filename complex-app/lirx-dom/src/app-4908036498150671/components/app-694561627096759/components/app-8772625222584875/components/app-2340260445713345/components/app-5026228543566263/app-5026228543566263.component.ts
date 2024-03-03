import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2194264355657019Component } from "./components/app-2194264355657019/app-2194264355657019.component";
import { App5007926761927797Component } from "./components/app-5007926761927797/app-5007926761927797.component";
import { App6365378850099937Component } from "./components/app-6365378850099937/app-6365378850099937.component";
import { App8363373821638441Component } from "./components/app-8363373821638441/app-8363373821638441.component";
import { App4654087618943649Component } from "./components/app-4654087618943649/app-4654087618943649.component";

// @ts-ignore
import html from './app-5026228543566263.component.html?raw';
// @ts-ignore
import style from './app-5026228543566263.component.scss?inline';

/**
 * COMPONENT: 'app-5026228543566263'
 */

export const App5026228543566263Component = new Component({
  name: 'app-5026228543566263',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2194264355657019Component,
App5007926761927797Component,
App6365378850099937Component,
App8363373821638441Component,
App4654087618943649Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
