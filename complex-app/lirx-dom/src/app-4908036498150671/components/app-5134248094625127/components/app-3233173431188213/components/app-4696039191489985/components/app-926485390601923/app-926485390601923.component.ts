import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App4437391836920819Component } from "./components/app-4437391836920819/app-4437391836920819.component";
import { App4280887444781815Component } from "./components/app-4280887444781815/app-4280887444781815.component";
import { App5471552326544715Component } from "./components/app-5471552326544715/app-5471552326544715.component";
import { App6510499780012663Component } from "./components/app-6510499780012663/app-6510499780012663.component";
import { App4147039324953179Component } from "./components/app-4147039324953179/app-4147039324953179.component";

// @ts-ignore
import html from './app-926485390601923.component.html?raw';
// @ts-ignore
import style from './app-926485390601923.component.scss?inline';

/**
 * COMPONENT: 'app-926485390601923'
 */

export const App926485390601923Component = new Component({
  name: 'app-926485390601923',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App4437391836920819Component,
App4280887444781815Component,
App5471552326544715Component,
App6510499780012663Component,
App4147039324953179Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
