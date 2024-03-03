import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6765823616620573Component } from "./components/app-6765823616620573/app-6765823616620573.component";
import { App5942523288839031Component } from "./components/app-5942523288839031/app-5942523288839031.component";
import { App1071182354163409Component } from "./components/app-1071182354163409/app-1071182354163409.component";
import { App5649604637741733Component } from "./components/app-5649604637741733/app-5649604637741733.component";
import { App84188776373533Component } from "./components/app-84188776373533/app-84188776373533.component";

// @ts-ignore
import html from './app-4115518593656073.component.html?raw';
// @ts-ignore
import style from './app-4115518593656073.component.scss?inline';

/**
 * COMPONENT: 'app-4115518593656073'
 */

export const App4115518593656073Component = new Component({
  name: 'app-4115518593656073',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6765823616620573Component,
App5942523288839031Component,
App1071182354163409Component,
App5649604637741733Component,
App84188776373533Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
