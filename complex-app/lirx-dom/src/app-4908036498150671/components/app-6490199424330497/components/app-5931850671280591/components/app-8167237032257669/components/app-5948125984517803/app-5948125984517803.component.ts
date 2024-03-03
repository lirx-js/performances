import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7752124973784265Component } from "./components/app-7752124973784265/app-7752124973784265.component";
import { App3421180981249361Component } from "./components/app-3421180981249361/app-3421180981249361.component";
import { App657758872829063Component } from "./components/app-657758872829063/app-657758872829063.component";
import { App305048421239823Component } from "./components/app-305048421239823/app-305048421239823.component";
import { App8178546461255375Component } from "./components/app-8178546461255375/app-8178546461255375.component";

// @ts-ignore
import html from './app-5948125984517803.component.html?raw';
// @ts-ignore
import style from './app-5948125984517803.component.scss?inline';

/**
 * COMPONENT: 'app-5948125984517803'
 */

export const App5948125984517803Component = new Component({
  name: 'app-5948125984517803',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7752124973784265Component,
App3421180981249361Component,
App657758872829063Component,
App305048421239823Component,
App8178546461255375Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
