import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6238524001288117Component } from "./components/app-6238524001288117/app-6238524001288117.component";
import { App7227914042901169Component } from "./components/app-7227914042901169/app-7227914042901169.component";
import { App5236854601119521Component } from "./components/app-5236854601119521/app-5236854601119521.component";
import { App6562853789073017Component } from "./components/app-6562853789073017/app-6562853789073017.component";
import { App4973467585912851Component } from "./components/app-4973467585912851/app-4973467585912851.component";

// @ts-ignore
import html from './app-9001829913708595.component.html?raw';
// @ts-ignore
import style from './app-9001829913708595.component.scss?inline';

/**
 * COMPONENT: 'app-9001829913708595'
 */

export const App9001829913708595Component = new Component({
  name: 'app-9001829913708595',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6238524001288117Component,
App7227914042901169Component,
App5236854601119521Component,
App6562853789073017Component,
App4973467585912851Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
