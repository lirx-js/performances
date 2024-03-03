import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2712359454031859Component } from "./components/app-2712359454031859/app-2712359454031859.component";
import { App1427540701905747Component } from "./components/app-1427540701905747/app-1427540701905747.component";
import { App258722349624669Component } from "./components/app-258722349624669/app-258722349624669.component";
import { App3394185408383383Component } from "./components/app-3394185408383383/app-3394185408383383.component";
import { App1701717254736947Component } from "./components/app-1701717254736947/app-1701717254736947.component";

// @ts-ignore
import html from './app-6238789231523865.component.html?raw';
// @ts-ignore
import style from './app-6238789231523865.component.scss?inline';

/**
 * COMPONENT: 'app-6238789231523865'
 */

export const App6238789231523865Component = new Component({
  name: 'app-6238789231523865',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2712359454031859Component,
App1427540701905747Component,
App258722349624669Component,
App3394185408383383Component,
App1701717254736947Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
