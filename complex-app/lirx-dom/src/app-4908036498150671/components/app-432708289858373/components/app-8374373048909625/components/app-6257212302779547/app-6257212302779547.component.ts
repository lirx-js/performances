import { compileReactiveHTMLAsComponentTemplate, compileStyleAsComponentStyle, Component } from '@lirx/dom';

import { App6240644316170585Component } from "./components/app-6240644316170585/app-6240644316170585.component";
import { App1883355191433345Component } from "./components/app-1883355191433345/app-1883355191433345.component";
import { App1295712087721929Component } from "./components/app-1295712087721929/app-1295712087721929.component";
import { App452875817832173Component } from "./components/app-452875817832173/app-452875817832173.component";
import { App5697793824719461Component } from "./components/app-5697793824719461/app-5697793824719461.component";

// @ts-ignore
import html from './app-6257212302779547.component.html?raw';
// @ts-ignore
import style from './app-6257212302779547.component.scss?inline';

/**
 * COMPONENT: 'app-6257212302779547'
 */

export const App6257212302779547Component = new Component({
  name: 'app-6257212302779547',
  template: compileReactiveHTMLAsComponentTemplate({
    html,
    components: [
      App6240644316170585Component,
App1883355191433345Component,
App1295712087721929Component,
App452875817832173Component,
App5697793824719461Component,
    ]
  }),
  styles: [compileStyleAsComponentStyle(style)],
});
