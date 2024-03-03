import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App425345246401187Component } from "./components/app-425345246401187/app-425345246401187.component";
import { App5321744405478003Component } from "./components/app-5321744405478003/app-5321744405478003.component";
import { App1532598618051633Component } from "./components/app-1532598618051633/app-1532598618051633.component";
import { App6682320577294361Component } from "./components/app-6682320577294361/app-6682320577294361.component";
import { App7645365315178935Component } from "./components/app-7645365315178935/app-7645365315178935.component";

// @ts-ignore
import html from './app-1413006620439987.component.html?raw';
// @ts-ignore
import style from './app-1413006620439987.component.scss?inline';

/**
 * COMPONENT: 'app-1413006620439987'
 */

export const App1413006620439987Component = new Component({
  name: 'app-1413006620439987',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App425345246401187Component,
App5321744405478003Component,
App1532598618051633Component,
App6682320577294361Component,
App7645365315178935Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
