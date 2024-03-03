import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6318630660526097Component } from "./components/app-6318630660526097/app-6318630660526097.component";
import { App2605917716232491Component } from "./components/app-2605917716232491/app-2605917716232491.component";
import { App6058418263904595Component } from "./components/app-6058418263904595/app-6058418263904595.component";
import { App4652936732647361Component } from "./components/app-4652936732647361/app-4652936732647361.component";
import { App6814383054935511Component } from "./components/app-6814383054935511/app-6814383054935511.component";

// @ts-ignore
import html from './app-5521438738312869.component.html?raw';
// @ts-ignore
import style from './app-5521438738312869.component.scss?inline';

/**
 * COMPONENT: 'app-5521438738312869'
 */

export const App5521438738312869Component = new Component({
  name: 'app-5521438738312869',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6318630660526097Component,
App2605917716232491Component,
App6058418263904595Component,
App4652936732647361Component,
App6814383054935511Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
