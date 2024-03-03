import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App2897780925489375Component } from "./components/app-2897780925489375/app-2897780925489375.component";
import { App2904146693837361Component } from "./components/app-2904146693837361/app-2904146693837361.component";
import { App2848334599980001Component } from "./components/app-2848334599980001/app-2848334599980001.component";
import { App6090393210443651Component } from "./components/app-6090393210443651/app-6090393210443651.component";
import { App7701651767061977Component } from "./components/app-7701651767061977/app-7701651767061977.component";

// @ts-ignore
import html from './app-3409724515255077.component.html?raw';
// @ts-ignore
import style from './app-3409724515255077.component.scss?inline';

/**
 * COMPONENT: 'app-3409724515255077'
 */

export const App3409724515255077Component = new Component({
  name: 'app-3409724515255077',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App2897780925489375Component,
App2904146693837361Component,
App2848334599980001Component,
App6090393210443651Component,
App7701651767061977Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
