import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App7593394679069535Component } from "./components/app-7593394679069535/app-7593394679069535.component";
import { App1102381641239305Component } from "./components/app-1102381641239305/app-1102381641239305.component";
import { App7470800453247513Component } from "./components/app-7470800453247513/app-7470800453247513.component";
import { App7096854721164565Component } from "./components/app-7096854721164565/app-7096854721164565.component";
import { App863967054126011Component } from "./components/app-863967054126011/app-863967054126011.component";

// @ts-ignore
import html from './app-1127756353644093.component.html?raw';
// @ts-ignore
import style from './app-1127756353644093.component.scss?inline';

/**
 * COMPONENT: 'app-1127756353644093'
 */

export const App1127756353644093Component = new Component({
  name: 'app-1127756353644093',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App7593394679069535Component,
App1102381641239305Component,
App7470800453247513Component,
App7096854721164565Component,
App863967054126011Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
