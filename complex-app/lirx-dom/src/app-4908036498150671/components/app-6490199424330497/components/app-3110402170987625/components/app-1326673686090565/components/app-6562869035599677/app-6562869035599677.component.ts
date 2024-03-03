import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6325655939489889Component } from "./components/app-6325655939489889/app-6325655939489889.component";
import { App3139739542397205Component } from "./components/app-3139739542397205/app-3139739542397205.component";
import { App6369049281580233Component } from "./components/app-6369049281580233/app-6369049281580233.component";
import { App3465474416420939Component } from "./components/app-3465474416420939/app-3465474416420939.component";
import { App3012407932289471Component } from "./components/app-3012407932289471/app-3012407932289471.component";

// @ts-ignore
import html from './app-6562869035599677.component.html?raw';
// @ts-ignore
import style from './app-6562869035599677.component.scss?inline';

/**
 * COMPONENT: 'app-6562869035599677'
 */

export const App6562869035599677Component = new Component({
  name: 'app-6562869035599677',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6325655939489889Component,
App3139739542397205Component,
App6369049281580233Component,
App3465474416420939Component,
App3012407932289471Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
