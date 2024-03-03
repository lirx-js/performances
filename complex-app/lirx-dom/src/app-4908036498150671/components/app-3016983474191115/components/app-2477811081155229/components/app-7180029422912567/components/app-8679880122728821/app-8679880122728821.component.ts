import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App148207363208367Component } from "./components/app-148207363208367/app-148207363208367.component";
import { App8131208553136401Component } from "./components/app-8131208553136401/app-8131208553136401.component";
import { App3281724106241231Component } from "./components/app-3281724106241231/app-3281724106241231.component";
import { App160379233589979Component } from "./components/app-160379233589979/app-160379233589979.component";
import { App6647025439730399Component } from "./components/app-6647025439730399/app-6647025439730399.component";

// @ts-ignore
import html from './app-8679880122728821.component.html?raw';
// @ts-ignore
import style from './app-8679880122728821.component.scss?inline';

/**
 * COMPONENT: 'app-8679880122728821'
 */

export const App8679880122728821Component = new Component({
  name: 'app-8679880122728821',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App148207363208367Component,
App8131208553136401Component,
App3281724106241231Component,
App160379233589979Component,
App6647025439730399Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
