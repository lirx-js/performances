import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2091260838147689Component } from "./components/app-2091260838147689/app-2091260838147689.component";
import { App618137912979941Component } from "./components/app-618137912979941/app-618137912979941.component";
import { App1203149225531527Component } from "./components/app-1203149225531527/app-1203149225531527.component";
import { App3486269316111421Component } from "./components/app-3486269316111421/app-3486269316111421.component";
import { App3408537727395997Component } from "./components/app-3408537727395997/app-3408537727395997.component";

// @ts-ignore
import html from './app-7884708158957679.component.html?raw';
// @ts-ignore
import style from './app-7884708158957679.component.scss?inline';

/**
 * COMPONENT: 'app-7884708158957679'
 */

export const App7884708158957679Component = new Component({
  name: 'app-7884708158957679',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2091260838147689Component,
App618137912979941Component,
App1203149225531527Component,
App3486269316111421Component,
App3408537727395997Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
